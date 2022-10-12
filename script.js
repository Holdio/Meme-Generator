document.getElementById("Generator").addEventListener("click", function(event) {

    const url = "https://random-words-api.vercel.app/word/";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {

        });

    // const ameClient = require("amethyste-api")
    // const ameApi = new ameClient("token")

    // ameApi.image("wallpaper", {
    //     "nsfw": "false"
    // }).then(image => {
    //     console.log(image)
    // }).catch(err => {
    //     throw err;
    // });

    // // const url =
    // fetch(url)
    //     .then(function(response) {
    //         return response.json();
    //     }).then(function(json) {

    //     });

    const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

    deepai.setApiKey('3211ccf8-a7c2-4ad6-bc76-f81afe481c63');

    (async function() {
        var resp = await deepai.callStandardApi("text2img", {
            text: "YOUR_TEXT_HERE",
        });
        console.log(resp);
    })()

});
