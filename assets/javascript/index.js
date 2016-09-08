//setting global variables
var topics = ['joy', 'sad', 'anger', 'fear', 'disgust'];
var key = 'dc6zaTOxFJmzC';
var limit = 10;

/**
This is a function which is rendering buttons on the page
*/

function renderButtons() {

    $('#buttons').empty();
    for (var i = 0; i < topics.length; i++) {

        var createButton = $('<button>');
        createButton.addClass('topicButton');
        createButton.text(topics[i]);
        createButton.attr('data-name', topics[i]);
        $('#buttons').append(createButton);
    }
};


/**
This function is used retrieve still images by making an API call 
to the gify server and displaying them on the page.
*/

function stillImages(event) {


    event.preventDefault();
    //to retrieve the data attribute make the search happen on that keyword
    var topic = $(this).data('name');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + '&api_key=' + key + '&limit=' + limit;


    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(response) {
        console.log(response);
        // response is the object that we have received back from the server when making an API call.
        var result = response.data;

        $('.leftContainer').empty();
        for (var r = 0; r < result.length; r++) {

            var imageURL = result[r].images.downsized_still.url;
            var topicImagesDiv = $('<div class="col-md-4">');
            var topicImages = $('<img>');
            topicImagesDiv.html(topicImages);
            topicImages.addClass('image');
            topicImages.attr('src', imageURL);
            topicImages.attr('alt', topic);
            topicImages.attr('data-animatedgif', result[r].images.downsized_medium.url);
            topicImages.attr('data-stillgif', imageURL);
            topicImages.attr('data-staticimage', true);
            // have created a left and right container to seperate images and make userSearch, user friendly
            $('.leftContainer').append(topicImagesDiv);
            //this is to display rating on the page
            topicImagesDiv.prepend($('<div class="rating">' + 'Rating: ' + result[r].rating + '</div>'));

        }

    });
};

/**
Through this function user can seperately select the images which needed to be seen as a gif.
This function enable play pause functionality on specific images.
*/

function animationOnClick() {

    if ($(this).data('staticimage') === true) {
        var animatedImage = $(this).data('animatedgif');
        $(this).attr('src', animatedImage);
        $(this).data('staticimage', false);

    } else {
        var stillImage = $(this).data('stillgif');
        $(this).attr('src', stillImage);
        $(this).data('staticimage', true);
    };

};

/**
This function enables user to select the topic for which they want to see the gify and 
can enter their own inputs which would render a seperate button on the page.
*/

function userInputButton() {

    var inputValue = $('#inputBox').val().trim();
    topics.push(inputValue);
    renderButtons();
    $('#inputBox').val('');
}




//All the functions are called here

$(document).on('click', '.topicButton', stillImages);
renderButtons();
$(document).on('click', '.image', animationOnClick);
$('.submitButton').on('click', userInputButton);