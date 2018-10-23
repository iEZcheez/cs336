// according to a YouTube video: "hijack the form submit from the form"
$( 'form' ).submit(function( event ) {
    event.preventDefault();

    // set the form variable using the id of the form
    var form = $('#people_form');

    // configuration on how to send the data
    $.ajax({
        url: '/people',
        data: form.serialize(),
        dataType: 'json',
        success: function( resp ) {
            console.log( resp );
        }
    });
})