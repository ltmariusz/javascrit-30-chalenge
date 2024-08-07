document.addEventListener("keypress", (event) => {
  //   console.log(event.keya);

  switch (event.key) {
    case "a":
      playDrum("./audio/Bamboo.wav");
      //   document.querySelector(".key-a").style.color = "yellow";
      break;
    case "s":
      playDrum("./audio/Boom-Kick.wav");
      break;
    case "d":
      playDrum("./audio/Bottle.wav");
      break;
    case "f":
      playDrum("./audio/Clap-1.wav");
      break;
    case "g":
      playDrum("./audio/Claves.wav");
      break;
    case "h":
      playDrum("./audio/Cross-Sticks.wav");
      break;
    case "j":
      playDrum("./audio/Deep-Kick.wav");
      break;
    case "k":
      playDrum("./audio/Floor-Tom-1.wav");
      break;
    case "l":
      playDrum("./audio/Klank-1.wav");
      break;

    default:
      break;
  }
});

function playDrum(url) {
  var audio = new Audio(url);
  audio.play();
}
