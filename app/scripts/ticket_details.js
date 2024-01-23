let client;
let idTicket = "";
let idContact = "";
let descriptionText = "";
let name_file = "";
let url_record = "";

app.initialized().then(function (_client) {
  client = _client;
  client.events.on("app.activated", function () {
    client.data
      .get("ticket")
      .then(async function (data) {
        idTicket = data?.ticket?.id;
        idContact = data?.ticket?.requester_id;
        descriptionText = data?.ticket?.description_text;
        console.log("Ticket Data", data);
        if (descriptionText == "file record") {
          return;
        } else {
          // B1. call api lấy file csv
          const resultDataCsv = await getFileCsvTicket(idTicket);
          if (resultDataCsv.length > 0) {
            console.log("chay vao bc 1 getFileCsvTicket", resultDataCsv);
            var dateTimeStart = dateFormat(resultDataCsv?.TimeStart);
            var crFileName =
              "cr_" + dateTimeStart + "_" + resultDataCsv?.CallId + ".wav";
            // B2. get file từ s3
            const resultDataS3 = await getFileS3(crFileName);

            url_record = resultDataS3?.name ? resultDataS3?.name : "";
            if (url_record != "") {
             await updateTicket(idTicket, idContact);
            }
          }
          // B3. Sau khi có file thì call sang api s3 với tham sô callID để lay url_record
          // B4 Sau khi lấy record gọi api update ticket trường description để cập nhật reccord
        }
      })
      .catch(function (e) {
        console.log("Exception - ", e);
      });
  });
});

async function getFileCsvTicket(idTicket) {
  try {
    var result = await client.request.invokeTemplate("getFileCsvTicket", {
      context: {
        id_ticket: idTicket,
      },
    });
    debugger;
    var detail = result?.response ? JSON.parse(result?.response) : [];

    return detail;
  } catch (error) {
    console.error(error);
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
    var detail = result?.response ? JSON.parse(result?.response) : [];
    console.log("chay vao bc 2 getFileS3", detail);
    return detail;
  } catch (error) {
    console.error(error);
    return [];
  }
}

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

function dateFormat(timeStamp) {
  let dateFormat = new Date(timeStamp);
  const year = dateFormat.getFullYear();
  const month =
    dateFormat.getMonth() + 1 < 10
      ? `0${dateFormat.getMonth() + 1}`
      : dateFormat.getMonth() + 1;
  const date =
    dateFormat.getDate() < 10
      ? `0${dateFormat.getDate()}`
      : dateFormat.getDate();
  const dateTimeStart = year + month + date;
  return dateTimeStart;
}
