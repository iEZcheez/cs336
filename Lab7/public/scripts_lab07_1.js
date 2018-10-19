//This code executes when the document is "ready to be worked on"
$( document ).ready( function() {
    // apply style to all links
    $( "a" ).addClass( "test" );
    // remove style
    // $( "a" ).removeClass( "test" );

    //clicking a link causes this function
    $( "a" ).click( function (){
        alert("welcome");
        //prevent hyperlink from changing pages
        event.preventDefault()
        // special effect (slow)
        $( this ).hide( "slow" );
    });
});