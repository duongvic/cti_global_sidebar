let client;

app.initialized().then(function (_client) {
  client = _client;
  client.events.on("app.activated", function () {
    client.data
      .get("ticket")
      .then(function (data) {
        idTicket = data?.ticket?.id;
        // B1. call api lấy file csv
        // B2. map file với idTicket
        // B3. Sau khi có file thì call sang api s3 với tham sô callID để lay url_record
        // B4 Sau khi lấy record gọi api update ticket trường description để cập nhật reccord
        console.log("Ticket Data", data);
      })
      .catch(function (e) {
        console.log("Exception - ", e);
      });

      
  });
});
