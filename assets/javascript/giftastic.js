  
$(document).ready(function(){

    $('button').on('click', function() {
        var cartoon = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoon + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
                console.log(response)
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var cartoonDiv = $('<div/>');
                    var p =$('<p/>');
                    p.text(results[i].rating);
                    var cartoonImage = $('<img/>');
                    cartoonImage.addClass('anImg')
                    cartoonImage.attr('src', results[i].images.fixed_height.url);
                    cartoonImage.attr('data-still', results[i].images.fixed_height_still.url)
                    cartoonImage.attr('data-animate', results[i].images.fixed_height.url)
                    .attr('data-state', 'still');
                    cartoonDiv.append(p);
                    cartoonDiv.append(cartoonImage);
                    cartoonDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
                    var state = $(this).attr('data-state'); 
                    console.log(this);
                    if (state == 'still') {
                    $(this).attr('src', $(this).data('animate'));
                    $(this).attr('data-state', 'animate');
                    } else {   
                    $(this).attr('src', $(this).data('still'));
                    $(this).attr('data-state', 'still');
                    }      
                });

            });

    });

    var cartoonNew = [''];
       // adding a cartoon button when hitting submit button
        $('#add-cartoon').on('click', function(event) {
            event.preventDefault()
            var cartoon = $("#cartoon-input").val().trim();
            cartoons.push(cartoon);
            renderButtons();
            var newButton = $("<button/>").addClass( "btn btn-info cartoon").attr('data-name',cartoonButton).html(cartoonButton).css({'margin': '5px'});
            $("#cartoonbuttons").append(newButton);
                console.log("Work");
            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoonButton + "&api_key=dc6zaTOxFJmzC&limit=10";
                console.log(cartoonButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            }).then(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var cartoonDiv = $('<div/>');
                    var p =$('<p/>');
                    p.text(results[i].rating);
                    var cartoonImage = $('<img/>');
                    cartoonImage.addClass('anImg')
                    cartoonImage.attr('src', results[i].images.fixed_height_still.url);
                    cartoonImage.attr('data-still', results[i].images.fixed_height_still.url)
                    cartoonImage.attr('data-animate', results[i].images.fixed_height.url)
                    .attr('data-state', 'still');
                    cartoonDiv.append(p);
                    cartoonDiv.append(cartoonImage);
                    cartoonDiv.prependTo($('#gifs'));
                }

                });

            });

            $("#gif-input").val("").trim();
            return false;
        });
  
// });