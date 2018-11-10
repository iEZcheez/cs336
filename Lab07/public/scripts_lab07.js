//This code executes when the document is "ready to be worked on"
$( document ).ready( function() {
    // Create jQuery style button
    $("button").button()

    // Button function
    // if <button id="button"> or if jQuery button has $("button")
    $("button").click(function () {
        //AJAX
        // Using the core $.ajax() method
        $.ajax({
            // The URL for the request
            url: "hello",
            // The data to send (will be converted to a query string)
            data: {
                message: "Hello, Lab7!"
            },
            // Whether this is a POST or GET request
            type: "GET",
            // The type of data we expect back
            dataType: "json",
        })
        // Code to run if the request succeeds (is done);
        // The response is passed to the function
            .done(function (json) {
                //Success message
                alert("The request is complete!");
                //Append text if request works
                $("<em>", {html: "Hello, Lab 7!"}).appendTo("body");
            })
            // Code to run if the request fails; the raw request and
            // status codes are passed to the function
            .fail(function (xhr, status, errorThrown) {
                //Fail message
                alert("Sorry, there was a problem! " + "Error: " + errorThrown + " Status: " + status + xhr);
            })
    })
})