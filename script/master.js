$(document).ready(function () {
    var dt = new Date();
    if (dt.getHours() >= 12) {
        var time = (dt.getHours() - 12) + ":" + dt.getMinutes() + " PM";
    } else {
        var time = dt.getHours() + ":" + dt.getMinutes() + " AM";
    }
    var date = dt.getDate() + "/" + dt.getMonth() + "/" + dt.getFullYear()
    $(".time").text(time);
    $(".date").text(date);
    $(".start-button").on("click", function () {
        if ($(".start-menu").css("bottom") == "-700px") {
            $(".start-menu").css("bottom", ($(".taskbar").height() + 12) + "px");
        } else {
            console.log($(".start-menu").css("bottom"));
            $(".start-menu").css("bottom", "-700px");
        }
    });
});