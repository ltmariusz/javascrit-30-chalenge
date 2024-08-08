let whowIsClickedOnce = [
  { key: "a", flag: false },
  { key: "s", flag: false },
  { key: "d", flag: false },
  { key: "f", flag: false },
  { key: "g", flag: false },
  { key: "h", flag: false },
  { key: "j", flag: false },
  { key: "k", flag: false },
  { key: "l", flag: false },
];

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "a":
      playDrum(event.key, "./audio/Bamboo.wav", "key-a");

      break;
    case "s":
      playDrum(event.key, "./audio/Boom-Kick.wav", "key-s");
      break;
    case "d":
      playDrum(event.key, "./audio/Bottle.wav", "key-d");
      break;
    case "f":
      playDrum(event.key, "./audio/Clap-1.wav", "key-f");
      break;
    case "g":
      playDrum(event.key, "./audio/Claves.wav", "key-g");
      break;
    case "h":
      playDrum(event.key, "./audio/Cross-Sticks.wav", "key-h");
      break;
    case "j":
      playDrum(event.key, "./audio/Deep-Kick.wav", "key-j");
      break;
    case "k":
      playDrum(event.key, "./audio/Floor-Tom-1.wav", "key-k");
      break;
    case "l":
      playDrum(event.key, "./audio/Klank-1.wav", "key-l");
      break;

    default:
      break;
  }
});

document.addEventListener("keyup", (event) => {
  whowIsClickedOnce.find((element) => element.key === event.key).flag = false;
  console.log(`key-${event.key}`);
  shineClicked(`key-${event.key}`);
});

function playDrum(key, url, classE) {
  let tabElementFound = whowIsClickedOnce.find(
    (element) => element.key === key
  );

  if (tabElementFound.flag === true) {
    return;
  } else {
    shineClicked(classE);
    var audio = new Audio(url);
    audio.play();
    whowIsClickedOnce.find((element) => element.key === key).flag = true;
  }
}

function shineClicked(classE) {
  console.log(document.querySelector(`.${classE}`).classList);
  document.querySelector(`.${classE}`).classList.toggle("active");
}
