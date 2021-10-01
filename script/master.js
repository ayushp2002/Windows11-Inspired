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
    });
    $(document).on("click", function (e) {
        if (!$(".start-menu").is(e.target) && $(".start-menu").has(e.target).length === 0) {
            $(".start-menu").css("bottom", "-700px");
            e.stopPropagation();
        }
    });

    // Quick settings toggle
    $(".tray-control-icons").on("click", function (e) {
        if ($(".quick-settings").css("right") == "-700px") {
            $(".quick-settings").css("right", "12px");
            $(".quick-settings").css("bottom", ($(".taskbar").height() + 12) + "px");
            e.stopPropagation();
        } else {
            $(".quick-settings").css("right", "-700px");
            e.stopPropagation();
        }
    });
    $(document).on("click", function (e) {
        if (!$(".quick-settings").is(e.target) && $(".quick-settings").has(e.target).length === 0) {
            $(".quick-settings").css("right", "-700px");
            e.stopPropagation();
        }
    });

    // Brightness slider function
    $(".brightness-slider").on("input", function () {
        // change brightness
        $(".brightness-overlay").css("opacity", 1 - ($(".brightness-slider").val()/100));
        // change icon
        var val = $(".brightness-slider").val();
        if (val >= 0 && val <= 33) {
            $(".brightness-icon").removeClass("brightness-mute-icon");
            $(".brightness-icon").addClass("brightness-min-icon");
            $(".brightness-icon").removeClass("brightness-mid-icon");
            $(".brightness-icon").removeClass("brightness-max-icon");
        } else if (val > 33 && val <= 66) {
            $(".brightness-icon").removeClass("brightness-mute-icon");
            $(".brightness-icon").removeClass("brightness-min-icon");
            $(".brightness-icon").addClass("brightness-mid-icon");
            $(".brightness-icon").removeClass("brightness-max-icon");
        } else if (val > 66 && val <= 100) {
            $(".brightness-icon").removeClass("brightness-mute-icon");
            $(".brightness-icon").removeClass("brightness-min-icon");
            $(".brightness-icon").removeClass("brightness-mid-icon");
            $(".brightness-icon").addClass("brightness-max-icon");
        }
    });

    // Sound slider function
    $(".sound-slider").on("input", function () {
        // change icon
        var val = $(".sound-slider").val();
        if (val == 0) {
            $(".sound-icon").addClass("sound-mute-icon");
            $(".sound-icon").removeClass("sound-min-icon");
            $(".sound-icon").removeClass("sound-mid-icon");
            $(".sound-icon").removeClass("sound-max-icon");
        } else if (val > 0 && val <= 33) {
            $(".sound-icon").removeClass("sound-mute-icon");
            $(".sound-icon").addClass("sound-min-icon");
            $(".sound-icon").removeClass("sound-mid-icon");
            $(".sound-icon").removeClass("sound-max-icon");
        } else if (val > 33 && val <= 66) {
            $(".sound-icon").removeClass("sound-mute-icon");
            $(".sound-icon").removeClass("sound-min-icon");
            $(".sound-icon").addClass("sound-mid-icon");
            $(".sound-icon").removeClass("sound-max-icon");
        } else if (val > 66 && val <= 100) {
            $(".sound-icon").removeClass("sound-mute-icon");
            $(".sound-icon").removeClass("sound-min-icon");
            $(".sound-icon").removeClass("sound-mid-icon");
            $(".sound-icon").addClass("sound-max-icon");
        }
    });
});