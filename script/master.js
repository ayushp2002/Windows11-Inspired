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

    // Start menu toggle
    $(".start-button").click(function (e) {
        if ($(".start-menu").css("bottom") == "-700px") {
            $(".start-menu").css("bottom", ($(".taskbar").height() + 12) + "px");
            e.stopPropagation();
        } else {
            $(".start-menu").css("bottom", "-700px");
            e.stopPropagation();
        }
        $(document).on("click", function () {
            if ($(e.target).closest("#start-menu").length === 0) {
                $(".start-menu").css("bottom", "-700px");
                e.stopPropagation();
            }
        });
    });

    $(".quick-settings").css("bottom", ($(".taskbar").height() + 12) + "px");
    // Quick settings toggle
    $(".tray-control-icons").on("click", function () {
        if ($(".quick-settings").css("right") == "-700px") {
            $(".quick-settings").css("right", "12px");
        } else {
            $(".quick-settings").css("right", "-700px");
        }
    });
});