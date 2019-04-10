// initial array of Kardashians
var kardashians = ["Kim Kardashian", "Kourtney Kardashian", "Khloe Kardashian"];

// make button for text input
function makeButton(str) {
    return `<br><button class="kardashian">${str}</button><br>`
}


function renderButtons() {
    $("#buttons-view").html(kardashians.map(makeButton));
}

// when add button is clicked
$("#add-kardashian").on("click", function(event) {
    event.preventDefault();
    var kardashian = $("#kardashian-input").val()
    kardashians.push(kardashian);

// call function to render text input as button
    renderButtons();
})

// call function to display initial Kardashians array
renderButtons();

function makeGif(obj){
    return `
        <div>
            <img src="${obj.images.fixed_height_still.url}" data-still="${obj.images.fixed_height_still.url}" data-animate="${obj.images.fixed_height.url}" data-state="still" class="gif" />
            <p>Rating: ${obj.rating}</p>
            <br>
        </div>
    `
}

$(document).on("click", ".kardashian", function(){
    var kardashian = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    kardashian + "&limit=10&api_key=6QcGzIFfSkh7134EOYpVVkYBO6fd7ZZw";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    $("#kardashians").prepend(response.data.map(makeGif))
  });
});


$(document).on("click", ".gif", function() {
    var state = $(this).attr("data-state");
    console.log(state);
    if (state == "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});