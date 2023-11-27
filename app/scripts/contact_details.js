let client;

(async function init() {
  client = await app.initialized();
  console.log("app is invoked");
  client.events.on("app.activated", onAppActivate);
  //   client.events.on("app.activated", async () => {
  //     let contacts = await getContacts();
  //     renderPayload(contacts);
  //   });
})();
async function getContacts() {
  //   let err, reply;
  let data = await to(client.request.invokeTemplate("getContacts", {}));
  let display = document.querySelector(".auth-call");
  display.innerHTML = `status ${data[0].status}`;
  console.log("data1 getContacts: ", data);
  //   if (err) console.error("Request failed \nReason", err);
  //   let { response } = reply;
  //   return JSON.parse(response);
}

async function renderPayload(jsonData) {
  //   let display = document.querySelector(".auth-call");
  //   let { name, id } = jsonData[0];
  //   display.innerHTML = `
  //     Data received from Freshdesk: <br>
  //     ${id} and ${name}`;
  console.log(`contact_sidebar placeholder: app is activated 🥁`, jsonData[0]);
}

function to(promise, improved) {
  return promise
    .then((data) => [null, data])
    .catch((err) => {
      if (improved) {
        Object.assign(err, improved);
      }
      return [err];
    });
}

async function onAppActivate() {
  let contacts = await getContacts();
  renderPayload(contacts);
}
