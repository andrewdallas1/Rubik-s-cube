
console.log("connected")

document.onkeydown = arrowKeyPress;

let xRotation = -15;
let yRotation = 45;
let zRotation = -15;
function arrowKeyPress(e) {
  switch(e.keyCode) {
    case(37) :
    console.log("left");
    yRotation += -90;
    break;
    case(38) :
    console.log("up");
    xRotation += 90;
    zRotation += 90;
    break;
    case(39) :
    console.log("right");
    yRotation += 90;
    break;
    case(40) :
    console.log("down");
    xRotation += -90;
    zRotation += -90;
    break;
  }
  $(".cube").css("transform", "rotateY("+yRotation+"deg)" + " rotateX("+xRotation+"deg)" + " rotateZ("+zRotation+"deg)");
  // $(".cube").css("transform", "rotate3d(0, 1, 0.5, 90deg)");
}
let cubeState = {
  "white": {
    "tl": "white",
    "tc": "white",
    "tr": "white",
    "l": "white",
    "c": "white",
    "r": "white",
    "bl": "white",
    "bc": "white",
    "br": "white"
  },

  "yellow": {
    "tl": "yellow",
    "tc": "yellow",
    "tr": "yellow",
    "l": "yellow",
    "c": "yellow",
    "r": "yellow",
    "bl": "yellow",
    "bc": "yellow",
    "br": "yellow"
  },

  "red": {
    "tl": "red",
    "tc": "red",
    "tr": "red",
    "l": "red",
    "c": "red",
    "r": "red",
    "bl": "red",
    "bc": "red",
    "br": "red"
  },

  "orange": {
    "tl": "orange",
    "tc": "orange",
    "tr": "orange",
    "l": "orange",
    "c": "orange",
    "r": "orange",
    "bl": "orange",
    "bc": "orange",
    "br": "orange"
  },

  "blue": {
    "tl": "blue",
    "tc": "blue",
    "tr": "blue",
    "l": "blue",
    "c": "blue",
    "r": "blue",
    "bl": "blue",
    "bc": "blue",
    "br": "blue"
  },

  "green": {
    "tl": "green",
    "tc": "green",
    "tr": "green",
    "l": "green",
    "c": "green",
    "r": "green",
    "bl": "green",
    "bc": "green",
    "br": "green"
  }
};


function rightTurn() {
  let white = Object.values(cubeState.white);
  let oragne = Object.values(cubeState.orange);
  let red = Object.values(cubeState.red);
  let yellow = Object.values(cubeState.yellow);
  let blue = Object.values(cubeState.blue);
  let green = Object.values(cubeState.green);
//  ["tl", "tc", "tr", "l", "c", "r", "bl", "bc", "br"]
  const tl = 0;
  const tc = 1;
  const tr = 2;
  const l = 3;
  const c = 4;
  const r = 5;
  const bl = 6;
  const bc = 7;
  const br = 8;
  // update front face
  cubeState.white.tr = green[tr];
  cubeState.white.r = green[r];
  cubeState.white.br = green[br];

  // update top face
  cubeState.blue.tr = white[tr];
  cubeState.blue.r = white[r];
  cubeState.blue.br = white[br];

  // update back face
  cubeState.yellow.tr = blue[tr];
  cubeState.yellow.r = blue[r];
  cubeState.yellow.br = blue[br];

  // update bottom face
  cubeState.green.tr = yellow[tr];
  cubeState.green.r = yellow[r];
  cubeState.green.br = yellow[br];

  // update right face
  cubeState.red.tl = red[bl];
  cubeState.red.tc = red[l];
  cubeState.red.tr = red[tl];
  cubeState.red.l = red[bc];
  cubeState.red.r = red[tc];
  cubeState.red.bl = red[br];
  cubeState.red.bc = red[r];
  cubeState.red.br = red[tr];

  updateColors();
};

function updateColors() {
  $.each(cubeState.white, function(key, value) {
      console.log(key + ": " + value);
      $("#white").find(".piece."+key).css("background-color", value);
  });
  $.each(cubeState.yellow, function(key, value) {
      console.log(key + ": " + value);
      $("#yellow").find(".piece."+key).css("background-color", value);
  });
  $.each(cubeState.orange, function(key, value) {
      console.log(key + ": " + value);
      $("#orange").find(".piece."+key).css("background-color", value);
  });
  $.each(cubeState.red, function(key, value) {
      console.log(key + ": " + value);
      $("#red").find(".piece."+key).css("background-color", value);
  });
  $.each(cubeState.blue, function(key, value) {
      console.log(key + ": " + value);
      $("#blue").find(".piece."+key).css("background-color", value);
  });
  $.each(cubeState.green, function(key, value) {
      console.log(key + ": " + value);
      $("#green").find(".piece."+key).css("background-color", value);
  });

};













