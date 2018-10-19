//This code executes when the document is "ready to be worked on"
$( document ).ready( function() {
    // Button function
    $( "button" ).button();

    // Example
    $( "#target" ).click(function() {
        alert( "Handler for .click() called." );
    });

    // Button
    $( "button" ).button.click( function() {
        $("<em>", {html: "no data yet..."}).appendTo("body");
    });
});

