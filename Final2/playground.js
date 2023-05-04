let i = 0;
var userInput = "";
let allLetters = {};
let allID = {};
let level = 1;

let score = document.getElementById("score");
let levelTag = document.getElementById("lvl");
let lvlLine = document.getElementById("levelUp");

document.body.onload = function () {
  const pre_score = localStorage.getItem("score");
  score.innerHTML = pre_score;
  level = localStorage.getItem("level");
  if (level == null) {
    level = 1;
  }
  levelTag.innerHTML = "Level " + level;
  lvlLine.innerHTML = "(Get to " + 20 * level + " to level up!)";
};

window.onclick = function (e) {
  if (e.target.nodeName === "BUTTON") {
    function loop(i) {
      if (i == 15) {
        return;
      }

      setTimeout(() => {
        let id = String.fromCharCode(97 + i);
        var element;

        element = document.getElementById(id);
        element.style.color = "white";
        // element.style.height = generateRandomInt(0, 100) + "px";
        allLetters[element.textContent] = element;
        allID[id] = element;
        // console.log(allLetters);

        const animation = element.animate(
          { left: ["0px", "100%"] }, // keyframes
          { duration: generateRandomInt(5000 / level, 8000 / level) } // options
        );

        animation.addEventListener("finish", () => {
          // console.log("id: ", id, " done"); // logs the final position of the element
          if (allID[id].style.color === "black") {
            // console.log("yes!");
          } else {
            localStorage.setItem("score", score.innerHTML);
            localStorage.setItem("level", level);
            location.reload();
          }
        });

        loop(++i);
      }, generateRandomInt(0, 500));
    }

    loop(0);
  } else if (e.target.nodeName === "A") {
    localStorage.setItem("score", 0);
    localStorage.setItem("level", 1);
    location.reload();
  }
};

const generateRandomInt = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

const typedText = document.getElementById("typed-text");

document.addEventListener(
  "keydown",
  (event) => {
    // console.log(event);
    var name = event.key;
    var code = event.code;
    event.preventDefault();

    // console.log(code[0], code.length);

    if (code === "Enter") {
      // console.log("user input:, ", userInput, allLetters[userInput]);

      if (allLetters[userInput] !== undefined) {
        // console.log(allLetters[userInput]);
        allLetters[userInput].style.color = "black";
        score.innerHTML = parseInt(score.innerHTML) + 1;

        if (parseInt(score.innerHTML) >= 20 * level) {
          console.log("LEVEL UP!");
          level++;
          // levelTag.innerHTML = "Level " + level;
          // lvlLine.innerHTML = "(Get to " + 20 * level + " to level up!)";
          localStorage.setItem("score", score.innerHTML);
          localStorage.setItem("level", level);
          location.reload();
        }
      }

      userInput = "";
    } else if (code === "Backspace") {
      userInput = userInput.slice(0, userInput.length - 1);
    } else if (code[0] !== "K" && code[0] !== "S") {
    } else {
      userInput += name;
    }

    typedText.style.color = "black";
    typedText.style.fontSize = "40px";
    typedText.innerHTML = userInput;
  },
  false
);

// let theCanvas;

// function setup() {
//   theCanvas = createCanvas(windowWidth, windowHeight);
//   theCanvas.canvas.style.zIndex = -1;
//   theCanvas.canvas.style.position = "absolute";
// }

// function draw() {
//   //background with transparancy
//   background(0, 0, 35, 25);

//   //blinking stars
//   var galaxy = {
//     locationX: random(width),
//     locationY: random(height),
//     size: random(1, 6),
//   };
//   ellipse(mouseX, mouseY, galaxy.size, galaxy.size);
//   ellipse(galaxy.locationX, galaxy.locationY, galaxy.size, galaxy.size);
//   theCanvas.canvas.style.zIndex = -1;
//   theCanvas.canvas.style.position = "absolute";
// }
