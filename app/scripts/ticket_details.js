let client;
// let idTicket = null;
// let idContact = "";
let descriptionText = "";
let name_file = "";
let url_record = null;

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
        // if (descriptionText == "file record") {
        //   return;
        // } else {
        // B1. call api lấy file csv
        const resultDataCsv = await getFileCsvTicket(idTicket);
        if (resultDataCsv.length > 0) {
          console.log("chay vao bc 1 getFileCsvTicket", resultDataCsv);
          // var dateTimeConnect = dateFormat(resultDataCsv[0]?.TimeConnect);
          // var crFileName ="cr_" + dateTimeConnect + "_" + resultDataCsv[0]?.CallID + ".wav";
          var crFileName = "cr_" + resultDataCsv[0]?.CallID + ".wav";
          // B2. get file từ s3
          const resultDataS3 = await getFileS3(crFileName);
          url_record = resultDataS3;

          // if (url_record != null && descriptionText != "file record") {
          //   await updateTicket(idTicket, idContact);
          // }

          if (url_record != null) {
            await updateTicket(idTicket, idContact);
            // // Chuỗi URL
            // var url = url_record;
            // // Biểu thức chính quy để tìm tham số Expires và lấy giá trị của nó
            // var regex = /[?&]Expires=([^&#]*)/;
            // var match = regex.exec(url);
            // // Nếu match không null và có index 1 tức là đã tìm thấy tham số Expires trong URL
            // var expiresValue = null;
            // debugger;
            // if (match !== null && match.length > 1) {
            //   expiresValue = match[1];
            //   console.log("Giá trị của tham số Expires:", expiresValue);
            // } else {
            //   console.log(
            //     "Không tìm thấy giá trị của tham số Expires trong URL."
            //   );
            // }

            // var soPhut = 120;

            // // Chuyển đổi timestamp thành một đối tượng Date
            // var ngayHetHan = new Date(expiresValue * 1000);
            // // Thêm số phút cần kiểm tra vào ngày hết hạn
            // ngayHetHan.setMinutes(ngayHetHan.getMinutes() + soPhut);

            // console.log("ngayHetHan", ngayHetHan);
            // // Lấy ngày hiện tại
            // var ngayHienTai = new Date();

            // console.log("ngayHienTai", ngayHienTai);

            // if (descriptionText == "file record") {
            //   // So sánh ngày hết hạn với ngày hiện tại
            //   if (ngayHienTai > ngayHetHan) {
            //     console.log("Timestamp đã hết hạn sau " + soPhut + " phút.");
            //     await updateTicket(idTicket, idContact);
            //     location.reload();
            //   } else {
            //     console.log("Timestamp chưa hết hạn sau " + soPhut + " phút.");
            //   }
            // } else {
            //   await updateTicket(idTicket, idContact);
            //   location.reload();
            // }
          }
        } else {
          console.log(
            "gọi sang api: s3stg-crm.oncallcx.vn/file/"
              .concat(idTicket)
              .concat("chưa trả vê getFileCsvTicket")
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

{
  /* <a href="${url_record} rel="noreferrer" target="_blank" heap-ignore="true" class="_ar_hide_"
_ar_hide_="width:62px;height:19px;margin:0px;position:static;display:inline-block;" style="
text-decoration: unset; padding: 10px 10px;">
file record
</a> */
}

async function updateTicket(idTicket, idContact) {
  console.log("co chay vao update ticket:", idContact);
  let html = `<div style="font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif; font-size:14px">
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
      `Successfully upload recored ticket for: ${idTicket}. Reload page!`
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

// // Hàm kiểm tra xem một khoảng thời gian đã qua hạn sau một số phút nhất định hay chưa
// function kiemTraThoiGianQuaHan(ngayBatDau, soPhut) {
//   var ngayHetHan = new Date(ngayBatDau.getTime() + soPhut * 60000); // Tính toán ngày hết hạn sau số phút nhất định
//   var ngayHienTai = new Date(); // Lấy ngày hiện tại

//   var currentDate = new Date().toLocaleString();
//   console.log("currentDate", currentDate); //currentDate 09:25:57 4/3/2024
//   var date = new Date(1709524667 * 1000).toLocaleString();
//   console.log("date", date); //date 10:57:47 4/3/2024

//   // So sánh ngày hết hạn với ngày hiện tại
//   if (ngayHienTai > ngayHetHan) {
//     return true; // Đã qua hạn
//   } else {
//     return false; // Chưa qua hạn
//   }
// }

// // Sử dụng hàm kiểm tra
// var ngayBatDau = new Date("2024-03-01T12:00:00"); // Đặt ngày bắt đầu ở đây
// var soPhut = 100; // Đặt số phút ở đây

// if (kiemTraThoiGianQuaHan(ngayBatDau, soPhut)) {
//   console.log("Khoảng thời gian đã qua hạn sau " + soPhut + " phút.");
// } else {
//   console.log("Khoảng thời gian chưa qua hạn sau " + soPhut + " phút.");
// }
