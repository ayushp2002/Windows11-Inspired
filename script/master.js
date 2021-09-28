$(document).ready(function () {
    $(".start-button").on("click", function () {
        if ($(".start-menu").css("bottom") == "-700px") {
            $(".start-menu").css("bottom", ($(".taskbar").height() + 12) + "px");
        } else {
            console.log($(".start-menu").css("bottom"));
            $(".start-menu").css("bottom", "-700px");
        }
    });
});