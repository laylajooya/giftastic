
var romcoms = ["The Notebook", "Crazy, Stupid, Love"];

function makeButton(str){
    return `<button class="romcom">${str}</button>`
}

function renderButtons(){
    $("#buttons-view").html(romcoms.map(makeButton));
}

$("#add-romcom").on("click", function(event){
    event.preventDefault();
    var romcom = $("#romcom-input").val()
    romcoms.push(romcom);

    renderButtons();
})



renderButtons();

$(document).on("click", ".romcom", function(){

    var romcom = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + romcom + "&api_key=6QcGzIFfSkh7134EOYpVVkYBO6fd7ZZw";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(romcom) {
        console.log(romcom);
        $("#romcom-view").html(`
        <img src="${romcom.url}"/>
        `);
    
    });

});

function makeGIF(obj){
    return `
        <div>
            <img src="${obj.images.fixed_height.url}" />
        </div>
    `
}

$(document).on("click", ".romcom", function(){
    var romcom = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + romcom + "&api_key=6QcGzIFfSkh7134EOYpVVkYBO6fd7ZZw";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(romcom) {
        console.log(romcom);
        $("#romcom-view").prepend(response.data.map(makeGIF))
    });
    
    });