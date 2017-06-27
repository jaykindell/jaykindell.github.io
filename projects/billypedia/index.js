/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // uncomment this to inspect all available data; delete when done //
        console.log(data);
        $('#section-bio').css('background-color', 'grey').css('border-radius', '4px');
        $('#section-quotes').prependTo('#sections');
        $('.heading-quotes').css('color', 'black').css('padding-left', '10px');
        
        $('#list-top-rated')
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


