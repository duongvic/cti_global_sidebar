let client;
let description = "";
let name_file = "";

app.initialized().then(function (_client) {
  client = _client;
  client.events.on("app.activated", function () {
    client.data
      .get("ticket")
      .then(async function (data) {
        idTicket = data?.ticket?.id;
        idContact = data?.ticket?.requester_id;
        description = data?.ticket?.description;
        console.log("Ticket Data", data);
        // B1. call api lấy file csv
        const resultDataCsv = await getFileCsvTicket(idTicket);
        if (resultDataCsv.length > 0) {
          // console.log("chạy vào bc 1 getFileCsvTicket", resultDataCsv);
          var crFileName = "cr_" + resultDataCsv[0]?.CallID + ".wav";
          // B2. get file từ s3
          const resultDataS3 = await getFileS3(crFileName);

          if (resultDataS3 != null) {
            const result = await updateTicket(
              idTicket,
              idContact,
              resultDataS3
            );

            if (result?.status === 200) {
              var detail = result?.response ? JSON.parse(result?.response) : [];
              console.log("upload recored ticket thanh cong", detail);
              showNotify(
                "success",
                `Successfully uploaded audio file for ticket: ${idTicket}. Press f5 or refresh the page!`
              );
              window.location.reload(true);
            } else {
              showNotify("danger", `Failed to update a ticket: ${idTicket}`);
            }
          }
        } else {
          console.log(
            "gọi sang api: s3stg-crm.oncallcx.vn/file/"
              .concat(idTicket)
              .concat(" chưa trả về getFileCsvTicket")
          );
          showNotify(
            "danger",
            `Bạn đợi ít phút nữa gọi lại. Hệ thống đang xử lý file ghi âm.`
          );
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
    var link_record = result?.response ? result?.response : "";
    console.log("chay vao bc 2 getFileS3", link_record);
    return link_record;
  } catch (error) {
    console.log(error);
    return "";
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

function showNotify(type, message) {
  return client.interface.trigger("showNotify", {
    type: type,
    message: message,
  });
}

function dateFormat(timeStamp) {
  let dateFormat = new Date(parseInt(timeStamp));
  const year = `${dateFormat.getFullYear()}`;
  const month =
    dateFormat.getMonth() + 1 < 10
      ? `0${dateFormat.getMonth() + 1}`
      : `${dateFormat.getMonth() + 1}`;
  const date =
    dateFormat.getDate() < 10
      ? `0${dateFormat.getDate()}`
      : `${dateFormat.getDate()}`;
  const h =
    dateFormat.getHours() < 10
      ? `0${dateFormat.getHours()}`
      : `${dateFormat.getHours()}`;
  const min =
    dateFormat.getMinutes() < 10
      ? `0${dateFormat.getMinutes()}`
      : `${dateFormat.getMinutes()}`;
  const seconds =
    dateFormat.getSeconds() < 10
      ? `0${dateFormat.getSeconds()}`
      : `${dateFormat.getSeconds()}`;
  const dateTimeStart = `${year + month + date}`
    .concat("-")
    .concat(`${h + min + seconds}`);
  return dateTimeStart;
}

$(document).ready(function () {});

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

// "ticket_top_navigation": {
//           "url": "views/ticket/index.html",
//           "icon": "styles/images/aeroplane.svg"
//         },
