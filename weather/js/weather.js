$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-DF5DA6FB-CEE0-4CBF-9A0D-5F968D55682E',
        dataType: "json",

        success: function (info) {
            //看全部結構與比數也可以依照結構去查找資料 
            // console.log(info);

            $(document).ready(function () {
                total_len = info.records.location.length;
                for (i = 0; i < total_len; i++) {
                    // $(".charge-list").append("<li class='charg-card'>" + info.records.location[i].locationName +info.records.location[i].weatherElement[0].time[0].parameter.parameterName+"</li>");  
                    $(".charge-list").append(
                        "<div class='card'>" +
                            "<div class='cardtxt'>" +
                                "<div class='small'>"+
                                info.records.location[i].locationName +
                                "</div>" +
                                "<div class='small'>" +
                                info.records.location[i].weatherElement[0].time[0].parameter.parameterName +
                                "</div>" + 
                                "<div class='small'>" +
                                info.records.location[i].weatherElement[3].time[0].parameter.parameterName+
                                "</div>" +
                                "<div class='small'>" +"最高   "+
                                info.records.location[i].weatherElement[4].time[0].parameter.parameterName+"   "+
                                "最低   "+
                                info.records.location[i].weatherElement[4].time[1].parameter.parameterName+
                                "</div>" +
                            "</div>" +
                        "</div>");
                }
            });
        },
        error: function (data) {
            console.log("請求失敗");
        }
    });

$("#myInput").on("keyup",function(){
    // 抓 輸入的關鍵詞
    var value=$(this).val().toLowerCase();
    // 抓有無符合的
    $("#myCard .card").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
});
