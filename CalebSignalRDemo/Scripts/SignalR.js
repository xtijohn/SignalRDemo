//This file is created by me, just to have my javascript organized.
//Immediately Invoked Function Expression (IIFE)
//we group everything under a function to specify the scope of each functionality.
(function () {
    $.connection.hub.start()
        .done(function () {
            console.log("IT WORKED!");
            $.connection.myHub.server.announce("Connected!!");
        })
        .fail(function () {
            alert("ERROR!!!");
        });

    //client side announce function!
    $.connection.myHub.client.announce = function (message) {
        $("#welcome-messages").append(message + "<br/>");
    }
})()