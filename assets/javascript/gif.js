var kardashians = ["Kim Kardashian", "Kourtney Kardashian", "Khloe Kardashian"];


function makeButton(str) {
    return `<button class="kardashian">${str}</button>`
}

function renderButtons() {
    $("#buttons-view").html(kardashians.map(makeButton));
}

$("#add-kardashian").on("click", function(event) {
    event.preventDefault();
    var kardashian = $("#kardashian-input").val()
    kardashians.push(kardashian);

    renderButtons();
})

renderButtons();

function makeGif(obj){
    return `
        <div>
            <p>Rating: ${obj.rating}</p>
            <img src="${obj.images.fixed_height_still.url}" />
        </div>
    `
}

$(document).on("click", ".kardashian", function(){
    var kardashian = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    kardashian + "&api_key=6QcGzIFfSkh7134EOYpVVkYBO6fd7ZZw";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    $("#kardashians").prepend(response.data.map(makeGif))
  });
});