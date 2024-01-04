let client;
let idTicket = "";
let idContact = "";
let descriptionText = "";
let url_record =
  "https://hcm.fstorage.vn/pbx-stg/PBX_CRM/cr_20231227-093134_a8af567859d796ca_cc2ftistg-2b0cbc25338675bd.wav?AWSAccessKeyId=ZB3J75FAFEPIBPA8ZBV6&Signature=bhZ3mjeTs%2BOygvZp5VTb%2FBB%2B21U%3D&Expires=1704270512";

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
        descriptionText = data?.ticket?.description_text;
        console.log("Ticket Data", data);
        if (descriptionText == "file record") {
          return;
        } else {
          updateTicket(idTicket, idContact);
        }
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
    console.log("upload recored ticket thanh cong", detail);
    showNotify(
      "success",
      `Successfully upload recored ticket for: ${idTicket}.Reload page after endCall!`
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
