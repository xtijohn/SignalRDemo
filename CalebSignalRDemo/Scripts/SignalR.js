//This file is created by me, just to have my javascript organized.
//Immediately Invoked Function Expression (IIFE)
//we group everything under a function to specify the scope of each functionality.
(function () {
    $("#click-me").on("click", function () {
        myHub.server.getServerDateTime()
            .done(function (data) { writeToPage(data); })
            .fail(function (e) { writeToPage(e); });
    });

    var myHub = $.connection.myHub;
    $.connection.hub.start()
        .done(function () {
            $.connection.hub.logging = true;
            writeToPage("IT WORKED!" + "<br/>");
            $.connection.hub.log("Connected");
            myHub.server.announce("Connected!!");
        })
        .fail(function () {
            writeToPage("ERROR connecting to SignalR!");
        });

    //client side announce function!
    myHub.client.announce = function (message) {
        writeToPage(message);
    }

    var writeToPage = function (message) {
        $("#welcome-messages").append( message + "<br/>");
    }
})()