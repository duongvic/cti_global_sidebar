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
      console.info("successfully closed the CTI app");
      showNotify("success", "Successfully closed the CTI app.");
    })
    .catch(function (error) {
      console.error("Error: Failed to close the CTI app");
      console.error(error);
    });
}

/**
 * To listen to click event for phone numbers in the Freshdesk pages and use the clicked phone number
 */
function clickToCall() {
  // let textElement = document.getElementById("appText");
  // let textElementDialpad = document.getElementById("output").value;

  client.events.on("cti.triggerDialer", function (event) {
    openApp();
    var data = event.helper.getData();
    console.log("data", data);
    // textElement.innerText = `Clicked phone number: ${data.number}`;
    document.getElementById("output").value = data.number;
    //getContact by Id
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
      console.log(phone);
      // document.getElementById('mainContent').style.display = 'block';
      // addEventListeners();
      /* Adding event handlers for all the buttons in the UI of the app */
      document.getElementById("btnClose").addEventListener("fwClick", closeApp);

      // document.getElementById("btnClose1").addEventListener("click", () => {
      //   client.interface
      //     .trigger("hide", { id: "softphone" })
      //     .then(function () {
      //       console.info("successfully closed the CTI app");
      //       // showNotify("success", "Successfully closed the CTI app.");
      //     })
      //     .catch(function (error) {
      //       console.error("Error: Failed to close the CTI app");
      //       console.error(error);
      //     });
      // });

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
  console.info("App is deactivated");
}
