document.getElementById("Generator").addEventListener("click", function(event) {
    event.preventDefault()

    const url = "https://api.imgflip.com/get_memes";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let results = "";
            let num = Math.floor(Math.random() * json.data.memes.length);
            results += "<img src=" + json.data.memes[num].url + ">";
            document.getElementById("image").innerHTML = results;
        });
   
   const url2 = "https://api.quotable.io/random";
    fetch(url2)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let results = "";
            results += json.content;
            document.getElementById("quote").innerHTML = results;
        });
   
});
