const btnEl = document.getElementById("btn");
const emojiName = document.getElementById("emoji-name");

const link = "https://emoji-api.com/emojis?access_key=16b0b11f68481f243c176c9ae3d0f11e7d833373";

btnEl.addEventListener("click", () => {
  fetch(link)
    .then(response => response.json())
    .then(json => {

      let numero = Math.floor(Math.random() * (json.length - 0 + 1)) + 0;

      btnEl.innerText = json[numero].character;
      emojiName.innerText = json[numero].unicodeName;
    })
    .catch(error => console.error(error));
});


  



