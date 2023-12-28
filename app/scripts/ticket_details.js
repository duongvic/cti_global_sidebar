let client;
let idTicket = "";
let idContact = "";
let url_record =
  "https://hcm.fstorage.vn/pbx-stg/PBX_CRM/cr_20231227-083625_5a5a9b4bd91b8701_cc2ftistg-f6f3fddb821fcaf5.wav?AWSAccessKeyId=ZB3J75FAFEPIBPA8ZBV6&Signature=LB57TYv4zq5ZjDAXsoAsD7o6nMY%3D&Expires=1703758292";

app.initialized().then(function (_client) {
  client = _client;
  client.events.on("app.activated", function () {
    client.data
      .get("ticket")
      .then(function (data) {
        idTicket = data?.ticket?.id;
        idContact = data?.ticket?.requester_id;
        // B1. call api lấy file csv
        // B2. map file với idTicket
        // B3. Sau khi có file thì call sang api s3 với tham sô callID để lay url_record
        // B4 Sau khi lấy record gọi api update ticket trường description để cập nhật reccord
        updateTicket(idTicket, idContact);
        console.log("Ticket Data", data);
      })
      .catch(function (e) {
        console.log("Exception - ", e);
      });
  });
});

async function updateTicket(idTicket, idContact) {
  console.log("co chay vao update ticket:", idContact);
  let html = `<div style="font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif; font-size:14px">
    <div dir="ltr">
      <a href="${url_record} rel="noreferrer" target="_blank" heap-ignore="true" class="_ar_hide_"
          _ar_hide_="width:62px;height:19px;margin:0px;position:static;display:inline-block;" style="
          text-decoration: unset; padding: 10px 10px;">
          file record
      </a>
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
    var dataUpdateTicket = await client.request.invokeTemplate("updateTicket", {
      context: {
        id_ticket: idTicket,
      },
      body: properties,
    });

    var detail = dataUpdateTicket?.response
      ? JSON.parse(dataUpdateTicket?.response)
      : [];
    showNotify(
      "success",
      `Successfully upload recored ticket for: ${idTicket}.Reload page!`
    );
  } catch (error) {
    console.error(
      `Error: Failed to update a ticket ${phoneNumberReceiver}-${idTicket}`
    );
    console.error(error);
    showNotify("danger", "Failed to update a ticket.");
  }
}

function showNotify(type, message) {
  return client.interface.trigger("showNotify", {
    type: type,
    message: message,
  });
}
