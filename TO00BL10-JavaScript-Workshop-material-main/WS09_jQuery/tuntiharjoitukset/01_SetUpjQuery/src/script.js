// Your jQuery code goes here
$(document).ready(function () {
    $("a").click(function (event) {
        alert("The link will no longer take you to laurea.com");
        event.preventDefault();
    });

    $("a").addClass("test");

    //$("a").removeClass("test");

    $("a").click(function (event) {

        event.preventDefault();

        $(this).hide("slow");

    });

    $("p").click(function () {
        $(this).fadeOut("slow");
    });

    $("button").click(function () {
        $("h1").fadeOut("slow");
    });

});