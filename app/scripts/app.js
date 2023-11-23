let phoneNumberReceiver = "";

/**as7 backend **/
let agent = anCti.newAgent();
let webphone;
let audio = new Audio();
audio.autoplay = true;

agent.startApplicationSession({
  username: "phuln6@fpt.com",
  password: "Phuln6!!!",
});
agent.on("applicationsessionstarted", () => {
  // webphone = agent.getDevice("sip:9999@autocall.oncallcx.test.vn");
  webphone = agent.getDevice("sip:1973@oncallcx.crm.vn");
  console.log({ webphone });
  // tell server that we want to use WebRTC (error handling omitted)
  webphone.monitorStart({ rtc: true });
});

// if WebRTC creates a media-stream we bind it to the corresponding elements
agent.on("localstream", (event) => {
  document.getElementById("localView").srcObject = event.stream;
});
agent.on("applicationsessionterminated", () => {
  $("#menu").removeClass("calling established");
  $("#call").removeClass("open");
  $("#hook").text("call");
  $("#status").text("click to call an agent");
});

agent.on("remotestream", (event) => {
  document.getElementById("remoteView").srcObject = event.stream;
  audio.srcObject = event.stream;
});
//   $("#toggle").on('click',() => {
//     $("#toggle").removeClass("hint");
//     $("#call").toggleClass("open");

// });

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  console.log(h);
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59

  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = m + ":" + s + " ";
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  document.getElementById("MyClockDisplayCollapseClickToCall").innerText = time;
  document.getElementById("MyClockDisplayCollapseClickToCall").textContent =
    time;
  setTimeout(showTime, 1000);
}
showTime();
/**as7 backend **/

// var client;

// init();

// async function init() {
//   client = await app.initialized();
//   client.events.on('app.activated', renderText);
// }

// async function renderText() {
//   const textElement = document.getElementById('apptext');
//   const contactData = await client.data.get('contact');
//   const {
//     contact: { name }
//   } = contactData;

//   textElement.innerHTML = `Ticket is created by ${name}`;
// }

/**
 * Show a notification toast with the given type and message
 *
 * @param {String} type - type of the notification
 * @param {String} message - content to be shown in the notification
 **/
function showNotify(type, message) {
  return client.interface.trigger("showNotify", {
    type: type,
    message: message,
  });
}

/**
 * To get the logged in user in Freshdesk
 */
function getLoggedInUser() {
  client.data.get("loggedInUser").then(
    function (data) {
      console.info("Successfully got loggedInUser data");
      showNotify("info", `User's name: ${data.loggedInUser.contact.name}`);
    },
    function (error) {
      console.error("Error: Failed to get the loggedInUser information");
      console.error(error);
    }
  );
}

/**
 * To open the CTI app
 */
function openApp() {
  client.interface
    .trigger("show", { id: "softphone" })
    .then(function () {
      resizeApp();
      console.log(`Success: Opened the app`);
    })
    .catch(function (error) {
      console.error("Error: Failed to open the app");
      console.error(error);
    });
}

/**
 * To close the CTI app
 */
function closeApp() {
  client.interface
    .trigger("hide", { id: "softphone" })
    .then(function () {
      resizeApp();
      console.info("successfully closed the CTI app");
      // showNotify("success", "Successfully closed the CTI app.");
    })
    .catch(function (error) {
      console.error("Error: Failed to close the CTI app");
      console.error(error);
    });
}

async function getContactData() {
  try {
    const data = await client.request.invokeTemplate("getContacts", {});
    // Success output
    // data: {contact: {"active": true, ...}}
    console.log("data contact:", data);
  } catch (error) {
    // Failure operation
    console.log(error);
  }
}

/**
 * To listen to click event for phone numbers in the Freshdesk pages and use the clicked phone number
 */
function clickToCall() {
  client.instance.resize({ height: "630px" });
  let textElementPhone = document.getElementById("appTextPhone");
  // let textElementDialpad = document.getElementById("output").value;

  client.events.on("cti.triggerDialer", function (event) {
    openApp();
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("mainCollapseClickToCall").style.display = "none";
    document.getElementById("mainOutbound").style.display = "block";

    var data = event.helper.getData();
    console.log("data", data);
    textElementPhone.innerText = data.number;
    phoneNumberReceiver = data.number;
    // document.getElementById("output").value = data.number;

    /**làm thé nào de getContact by Id?*/

    /**click to call as7*/
    let call = webphone.calls[0];
    if (!call) {
      // click without an active call -> start a video call to number 23
      webphone.makeCall(phoneNumberReceiver, {
        autoOriginate: "doNotPrompt",
        audio: true,
        video: false,
        subjectOfCall: "PredictiveCall",
      });
    } else if (call.localConnectionInfo == "alerting") {
      // click while we have an alerting call -> accept it
      call.answerCall({ audio: true, video: true });
    } else {
      // otherwise we release the call
      call.clearConnection();
    }
    /**end click to call as7*/
  });
}

// /**
//  * It opens the contact details page for the give contact id
//  *
//  * @param {number} contactId - Contact to open
//  */
// function goToContact(contactId) {
//   client.interface
//     .trigger("click", { id: "contact", value: contactId })
//     .then(function (data) {
//       console.log("contact", data);
//       console.info("successfully navigated to contact");
//     })
//     .catch(function (error) {
//       console.error("Error: Failed to navigate to contact");
//       console.error(error);
//     });
// }

/**
 * To resize the height of the CTI app
 */
function resizeApp() {
  client.instance.resize({ height: "630px" });
}

let client;
init();
async function init() {
  client = await app.initialized();
  client.events.on("app.activated", onAppActivate);
  client.events.on("app.deactivated", onAppDeactive);

  // client.events.on("app.activated", getContactData);
}

// async function getContactData() {
//   try {
//     const data = await client.data.get("contact");
//     // Success output
//     // data: {contact: {"active": true, ...}}
//     console.log(data);
//   } catch (error) {
//     // Failure operation
//     console.log(error);
//   }
// }

// async function getContacts() {
//   const iparamData = await client.iparams.get("creatorDomain");
//   const URL = `https://${iparamData.creatorDomain}.freshdesk.com/api/v2/contacts`;
//   const options = {
//     headers: {
//       Authorization: `Basic <%= encode(iparam.api_key) %>`, // substitution happens by platform
//       "Content-Type": "application/json",
//     },
//   };

//   let { response } = await client.request.get(URL, options);
//   let contacts = JSON.parse(response);

//   document.body.insertAdjacentHTML("beforebegin", "<h2>Listing contacts</h2>");
//   contacts.forEach(function renderContact({ name }) {
//     return document.body.insertAdjacentHTML("afterbegin", `${name}<br>`);
//   });
// }

function viewScreenCollapseClickToCall() {
  client.instance.resize({ height: "48px" });
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("mainOutbound").style.display = "none";
  document.getElementById("mainCollapseClickToCall").style.display = "block";
}

function onAppActivate() {
  resizeApp();

  client.data.get("loggedInUser").then(
    function (data) {
      const phone = data.loggedInUser.contact.phone
        ? data.loggedInUser.contact.phone
        : data.loggedInUser.contact.mobile
        ? data.loggedInUser.contact.mobile
        : null;
      window.userPhone = phone;
      console.log("data loggedInUser", data);
      /* Outgoing call functionality */
      // dialpadEvents();
      checkPhone();
      // document
      //   .getElementById("btnShowContact")
      //   .addEventListener("fwClick", getContactData);

      // document.getElementById("ouput").innerText = $(this).data("id");
      // addEventListeners();
      /* Adding event handlers for all the buttons in the UI of the app */
      document.getElementById("btnClose").addEventListener("fwClick", closeApp);
      document.getElementById("mainOutbound").style.display = "none";
      document.getElementById("mainCollapseClickToCall").style.display = "none";
      // thu gon màn hinh khi callbtnCollapseClickToCall
      document
        .getElementById("btnCollapseClickToCall")
        .addEventListener("fwClick", viewScreenCollapseClickToCall);
      // mo rong man hinh click to call
      document
        .getElementById("mainCollapseClickToCall")
        .addEventListener("click", () => {
          client.instance.resize({ height: "630px" });
          document.getElementById("mainCollapseClickToCall").style.display =
            "none";
          document.getElementById("mainContent").style.display = "none";
          document.getElementById("mainOutbound").style.display = "block";
        });

      /**End Call **/
      document.getElementById("toggleEndCall").addEventListener("click", () => {
        client.interface
          .trigger("hide", { id: "softphone" })
          .then(function () {
            document.getElementById("mainContent").style.display = "block";
            document.getElementById("mainOutbound").style.display = "none";
            document.getElementById("mainCollapseClickToCall").style.display =
              "none";

            phoneNumberReceiver = document.getElementById("output").value = "";
            document.getElementById("appTextPhone").value = "";
            document.getElementById("appTextPhone").innerText = "";
            /**as7 backend **/
            let call = webphone.calls[0];
            call.clearConnection();
            /**as7 backend **/
            resizeApp();
            // console.info("successfully closed the CTI app");
          })
          .catch(function (error) {
            console.error("Error: Failed to close the CTI app");
            console.error(error);
          });
      });

      // ------ ----
      document
        .getElementById("toggleEndCallCollapse")
        .addEventListener("click", () => {
          client.interface
            .trigger("hide", { id: "softphone" })
            .then(function () {
              document.getElementById("mainOutbound").style.display = "none";
              document.getElementById("mainCollapseClickToCall").style.display =
                "none";
              document.getElementById("mainContent").style.display = "block";

              phoneNumberReceiver = document.getElementById("output").value =
                "";
              document.getElementById("appTextPhone").value = "";
              document.getElementById("appTextPhone").innerText = "";
              /**as7 backend **/
              let call = webphone.calls[0];
              call.clearConnection();
              /**as7 backend **/
              onAppDeactive;
              // console.info("successfully closed the CTI app");
            })
            .catch(function (error) {
              console.error("Error: Failed to close the CTI app");
              console.error(error);
            });
        });
      /**End Call **/

      /* Click-to-call event should be called inside the app.activated life-cycle event to always listen to the event */
      clickToCall();

      console.info("App is activated");
    },
    function (error) {
      console.error("Failed to get logged in user data");
      console.error(error);
      showNotify("danger", "Failed to get user data. Try again later.");
    }
  );
}
function onAppDeactive() {
  closeApp();
  console.info("App is deactivated");
}

function checkPhone() {
  var x = document.getElementById("output");
  // var phoneNumber = /^\d{10}$/;
  var phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/;
  if (x.value.match(phone)) {
    $("#callEnter").attr("disabled", false);
    $("#callEnter").css({ backgroundColor: "green" });
    document.getElementById("appTextPhone1").innerText = "Correct";
    document.getElementById("appTextPhone1").className =
      "correct__number__phone";
    /**Call tu man hinh dialpad **/
    document.getElementById("callEnter").addEventListener("click", () => {
      openApp();
      let textElementDialpad = document.getElementById("output").value;
      document.getElementById("mainContent").style.display = "none";
      document.getElementById("mainOutbound").style.display = "block";
      document.getElementById("mainCollapseClickToCall").style.display = "none";

      phoneNumberReceiver = textElementDialpad;
      document.getElementById("appTextPhone").value = phoneNumberReceiver;
      document.getElementById("appTextPhone").innerText = phoneNumberReceiver;
      /**click to call as7*/
      let call = webphone.calls[0];
      if (!call) {
        // click without an active call -> start a video call to number 23
        webphone.makeCall(phoneNumberReceiver, {
          autoOriginate: "doNotPrompt",
          audio: true,
          video: false,
          subjectOfCall: "PredictiveCall",
        });
      } else if (call.localConnectionInfo == "alerting") {
        // click while we have an alerting call -> accept it
        call.answerCall({ audio: true, video: true });
      } else {
        // otherwise we release the call
        call.clearConnection();
      }
      /**end click to call as7*/
    });
    /**Call tu man hinh dialpad **/

    // return true;
  } else {
    $("#callEnter").attr("disabled", true);
    $("#callEnter").css({ backgroundColor: "darkgray" });
    if (x.value.length === 0) {
      document.getElementById("appTextPhone1").innerText = "Correct";
      document.getElementById("appTextPhone1").className =
        "correct__number__phone";
    } else
      document.getElementById("appTextPhone1").className =
        "error__number__phone";
    document.getElementById("appTextPhone1").innerText =
      "Incorrect phone number format";
    return false;
  }
}

/**
 * Adds dialer events
 **/
var count = 0;
$(".digit").on("click", function () {
  var num = $(this).clone().children().remove().end().text();
  // $("#output1").append("<span>" + num.trim() + "</span>");
  var prevOutput = document.getElementById("output").value;
  document.getElementById("output").value = prevOutput + num;
  count++;
  if (count < 12) {
    checkPhone();
  }
});

function ResetTxtPhone() {
  var x = document.getElementById("output").value;
  document.getElementById("output").value = x.substring(0, x.length - 1);
  if (x.length < 12) {
    checkPhone();
  }
}
