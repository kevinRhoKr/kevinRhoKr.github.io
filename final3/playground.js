let i = 0;
var userInput = "";
let allLetters = {};
let allID = {};
let level = 1;

let score = document.getElementById("score");
let levelTag = document.getElementById("lvl");
let lvlLine = document.getElementById("levelUp");

document.body.onload = function () {
  // if (localStorage.getItem("load") == null) {
  //   console.log("here");
  //   modal.style.display = "block";
  //   localStorage.setItem("load", 1);
  // }

  const pre_score = localStorage.getItem("score") == null ? 0 : localStorage.getItem("score");
  score.innerHTML = pre_score;
  level = localStorage.getItem("level");
  if (level == null) {
    level = 1;
  }
  levelTag.innerHTML = "Level " + level;
  lvlLine.innerHTML = "(Get to " + 20 * level + " to level up!)";
};

window.onclick = function (e) {
  if (e.target.className === "gameStart") {
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
          { duration: generateRandomInt(7000 / level, 9000 / level) } // options
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
    localStorage.removeItem("load");

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
          level++;
          // levelTag.innerHTML = "Level " + level;
          // lvlLine.innerHTML = "(Get to " + 20 * level + " to level up!)";
          localStorage.setItem("score", score.innerHTML);
          localStorage.setItem("level", level);
          location.reload();
          console.log("LEVEL UP!");
          alert("Level up!");
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

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);