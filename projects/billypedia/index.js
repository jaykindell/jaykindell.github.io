/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // uncomment this to inspect all available data; delete when done //
        //console.log(data);
        $('nav').css('border-radius', '10px');
        $('main').css('border-radius', '10px');
        $('#section-bio').css('background-color', 'grey').css('border-radius', '10px');
        $('#section-quotes').prependTo('#sections');
        $('.heading-quotes').css('color', 'black');
        
        /*
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        */
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording){
            $('#list-top-rated').append($('<li>').css('list-style', 'none').text(recording.title).click(function(){
                $('#top-rated-image').attr('src', recording["art"]);
            }));
        });
        
        $('<section>').attr('id', 'section-recordings').append($('<h3>').text('Recordings')).appendTo($('#sidebar'));
        $('#section-recordings').append($('<ul>').attr('id', 'list-recordings'));
        
        var recordings = data.discography.recordings;
        _.map(recordings, function(recording){
            var $listItem = $('<li>').css('list-style', 'none').css('border-style', 'solid').css('border-width', 'thin').css('border-radius', '10px').addClass('recording').click(function(){
                $('#recordings-image').attr('src', recording["art"])});
            var $title = $('<div>').text(recording.title).addClass('title');
            var $artist = $('<div>').text(recording.artist).addClass('artist'); 
            var $release = $('<div>').text(recording.release).addClass('release');
            var $year =$('<div>').text(recording.year).addClass('year');
            
            $listItem.append($title, $artist, $release, $year);
            $('#list-recordings').append($listItem);
            
        });
        
        $('#section-top-rated').prepend($('<img>').attr('id', 'top-rated-image').attr('src', topRated[0].art));
        $('#section-recordings').prepend($('<img>').attr('id', 'recordings-image').attr('src', recordings[0].art));
        
        
        var billyImages = data.images.billy;
        $('#image-billy').click(function(){
            var billyPic = $('#image-billy').attr('src');
            var billyIndex = _.indexOf(billyImages, billyPic);
            //console.log(billyPic, billyIndex);
            if(billyIndex < billyImages.length - 1){
                billyPic = billyImages[billyIndex + 1];
            } else {
                billyPic = billyImages[0];
            }
            //console.log(billyPic, billyIndex);
            $('#image-billy').attr('src', billyPic);
        });
      
        
    
        var createTable = function(rider){
            var createRow = function(rideItem){
                var $row = $("<tr>");
                var $itemType = $("<td>").text(rideItem.type);
                var $itemDesc = $("<td>").text(rideItem.desc);
                $row.append($itemType);
                $row.append($itemDesc);
                return $row;
            };
            var $table = $("<table>");
            var $rows = _.map(rider, createRow);
           // console.log($rows);
            console.log(rider);
            $table.append($rows);
            //console.log($table);
            return $table;
        };
        let rider = data.rider;
        createTable(rider).appendTo('.content');
        
        
        
       
       
       
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


