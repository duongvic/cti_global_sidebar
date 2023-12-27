// let client;

// (async function init() {
//   client = await app.initialized();
//   console.log("app is invoked");
//   client.events.on("app.activated", onAppActivate);
//   //   client.events.on("app.activated", async () => {
//   //     let contacts = await getContacts();
//   //     renderPayload(contacts);
//   //   });
// })();
// async function getContacts() {
//   //   let err, reply;
//   let data = await to(client.request.invokeTemplate("getContacts", {}));
//   let display = document.querySelector(".auth-call");
//   display.innerHTML = `status ${data[0].status}`;
//   console.log("data1 getContacts: ", data);
//   //   if (err) console.error("Request failed \nReason", err);
//   //   let { response } = reply;
//   //   return JSON.parse(response);
// }

// async function renderPayload(jsonData) {
//   //   let display = document.querySelector(".auth-call");
//   //   let { name, id } = jsonData[0];
//   //   display.innerHTML = `
//   //     Data received from Freshdesk: <br>
//   //     ${id} and ${name}`;
//   console.log(`contact_sidebar placeholder: app is activated 🥁`, jsonData[0]);
// }

// function to(promise, improved) {
//   return promise
//     .then((data) => [null, data])
//     .catch((err) => {
//       if (improved) {
//         Object.assign(err, improved);
//       }
//       return [err];
//     });
// }

// async function onAppActivate() {
//   client.events.on("cti.triggerDialer", function (event) {
//     var data = event.helper.getData();
//     console.log("data event.helper :", data);
//   });
//   let contacts = await getContacts();
//   renderPayload(contacts);
// }

window.frsh_init().then(function (client) {
  window.client = client;
});

function showModal() {
  client.interface
    .trigger("showModal", {
      title: "Sample App Form",
      template: "/modal.html",
    })
    .then(
      function (data) {
        console.log("Parent:InterfaceAPI:showModal", data);
      },
      function (error) {
        console.log("Parent:InterfaceAPI:showModal", error);
      }
    );
}

function showDialog() {
  client.interface
    .trigger("showDialog", {
      title: "Sample Dialog",
      template: "/modal.html",
    })
    .then(
      function (data) {
        console.log("Parent:InterfaceAPI:showDialog", data);
      },
      function (error) {
        console.log("Parent:InterfaceAPI:showDialog", error);
      }
    );
}

function showConfirm() {
  client.interface
    .trigger("showConfirm", {
      title: "Sample Confirm",
      message: "Select OK or Cancel",
    })
    .then(
      function (data) {
        console.log("Parent:InterfaceAPI:showConfirm", data);
      },
      function (error) {
        console.log("Parent:InterfaceAPI:showConfirm", error);
      }
    );
}

function notify() {
  client.interface
    .trigger("showNotify", {
      type: "success",
      message: "success message",
    })
    .then(
      function (data) {
        console.log("Parent:InterfaceAPI:showNotify", data);
      },
      function (error) {
        console.log("Parent:InterfaceAPI:showNotify", error);
      }
    );
}

function hide(element) {
  client.interface.trigger("hide", { id: element });
}

function show(element) {
  client.interface.trigger("show", { id: element });
}

function enable(element) {
  client.interface.trigger("enable", { id: element });
}

function disable(element) {
  client.interface.trigger("disable", { id: element });
}

function setValue(element, value) {
  client.interface.trigger("setValue", { id: element, value: value });
}

function openNote() {
  client.interface.trigger("click", {
    id: "openNote",
    text: "Text to be inserted",
    isPublic: true,
  });
}

function insertContent(element) {
  client.interface.trigger("setValue", {
    id: "editor",
    text: "insert content",
  });
  console.log(element);
  // Replace content
  // client.interface.trigger("setValue", {id: "editor", text: "replace content", replace: true} );

  // position end
  // client.interface.trigger("setValue", {id: "editor", text: "insert content at the end", replace: false, position: 'end'} );
}
