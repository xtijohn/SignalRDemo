//This file is created by me, just to have my javascript organized.
//Immediately Invoked Function Expression (IIFE)
//we group everything under a function to specify the scope of each functionality.
(function () {
    var myHub = $.connection.myHub;
    $.connection.hub.start()
        .done(function () {
            writeToPage("IT WORKED!" + "<br/>");
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