window.frsh_init().then(function (client) {
  window.client = client;
  client.data.get("ticket").then(
    async function (data) {
      idTicket = data?.ticket?.id;
      idContact = data?.ticket?.requester_id;
      description = data?.ticket?.description;
      console.log("Ticket Data", data);
    },
    function (error) {
      console.log("Child:DataApi", error);
    }
  );
});

function showModal() {
  client.interface
    .trigger("showModal", {
      title: "Sample App Form",
      template: "/modal.html",
    })
    .then(
      function (data) {
        console.log("Parent:InterfaceAPI:showModal", data.message - idTicket);
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
    isPublic: false,
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

function showNotify(type, message) {
  return client.interface.trigger("showNotify", {
    type: type,
    message: message,
  });
}

async function getFileCsvTicket(idTicket) {
  try {
    var result = await client.request.invokeTemplate("getFileCsvTicket", {
      context: {
        id_ticket: idTicket,
      },
    });
    var detail = result?.response ? JSON.parse(result?.response) : [];
    return detail;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getFileS3(crFileName) {
  try {
    var result = await client.request.invokeTemplate("getFileS3", {
      context: {
        name_url_s3: crFileName,
      },
    });
    var link_record = result?.response ? result?.response : null;
    console.log("chay vao bc 2 getFileS3", link_record);
    return link_record;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function updateTicket(idTicket, idContact, url_record) {
  let html = `<div style="font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif; font-size:14px" id="file_record_user">
    <div></div>  <br />
    <div dir="ltr">
      <span>
        file record
      </span>
      <br />
      <audio controls preload="auto" style="height: 30px;margin-top: 10px;">
        <source src="${url_record}" />
      </audio>
    </div>
  </div>`;

  try {
    const properties = JSON.stringify({
      attachment_ids: [],
      cloud_files: [],
      requester_id: idContact,
      description: html,
    });
    // Send request
    var result = await client.request.invokeTemplate("updateTicket", {
      context: {
        id_ticket: idTicket,
      },
      body: properties,
    });
    return result;
  } catch (error) {
    console.error(
      `Error: Failed to update a ticket ${phoneNumberReceiver}-${idTicket}`
    );
    console.error(error);
    showNotify("danger", "Failed to update a ticket.");
    return null;
  }
}

async function createNoteTicket() {
  $("#btn_upload_record").attr({ disabled: true, loading: true });

  var url = null;
  const link_record = await getLinkRecord();
  if (link_record !== null) {
    url = link_record;
    let html = `<div style="font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif; font-size:14px" id="file_record_user">
                  <div></div>  <br />
                  <div dir="ltr">
                    <span>
                      file record
                    </span>
                    <br />
                    <audio controls preload="auto" style="height: 30px;margin-top: 10px;">
                      <source src="${url}" />
                    </audio>
                  </div>
                </div>`;
    try {
      const properties = JSON.stringify({
        private: true,
        body: html,
      });
      var result = await client.request.invokeTemplate("createNoteTicket", {
        context: {
          id_ticket: idTicket,
        },
        body: properties,
      });
      if (result?.status === 200 || result?.status === 201) {
        showNotify("success", `Create note ticket success: ${idTicket}`);
      } else {
        showNotify("danger", `Failed create note ticket: ${idTicket}`);
      }
    } catch (err) {
      if (err) {
        console.error("Error - ", err);
      }
    }
  } else {
    showNotify("danger", `Chưa có file ghi âm: ${idTicket}`);
  }
  $("#btn_upload_record").attr({ disabled: false, loading: false });
}

async function getLinkRecord() {
  try {
    const resultDataCsv = await getFileCsvTicket(idTicket);
    if (resultDataCsv.length > 0) {
      var crFileName = "cr_" + resultDataCsv[0]?.CallID + ".wav";
      // B2. get file từ s3
      const resultDataS3 = await getFileS3(crFileName);
      return resultDataS3;
    }
    return null;
  } catch (error) {
    if (error) {
      console.error("Error - ", err);
    }
    return null;
  }
}
