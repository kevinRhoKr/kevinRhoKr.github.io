const phrases = [
  "apple",
  "book",
  "desk",
  "pen",
  "cat",
  "dog",
  "tree",
  "house",
  "car",
  "phone",
  "computer",
  "laptop",
  "keyboard",
  "mouse",
  "chair",
  "table",
  "door",
  "window",
  "wall",
  "floor",
];

let i = 0;
var userInput = "";
let allLetters = {};
let allID = {};

window.onclick = function (e) {
  var arr;

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
        console.log(allLetters);

        const animation = element.animate(
          { left: ["0px", "100%"] }, // keyframes
          { duration: generateRandomInt(5000, 8000) } // options
        );

        animation.addEventListener("finish", () => {
          console.log("id: ", id, " done"); // logs the final position of the element
          if (allID[id].style.color === "black") {
            console.log("yes!");
          } else {
            location.reload();

          }
        });

        loop(++i);
      }, generateRandomInt(0, 500));
    }

    loop(0);
  }
};

const generateRandomInt = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

const typedText = document.getElementById('typed-text');

document.addEventListener(
  "keydown",
  (event) => {
    // console.log(event);
    var name = event.key;
    var code = event.code;
    event.preventDefault();

    console.log(code[0], code.length)

    if (code === "Enter") {
      console.log("user input:, ", userInput, allLetters[userInput]);

      if (allLetters[userInput] !== undefined) {
        console.log(allLetters[userInput]);
        allLetters[userInput].style.color = "black";
      }

      userInput = "";
    } else if (code === "Backspace") {
      userInput = userInput.slice(0, userInput.length - 1);
    } else if (code[0] !== 'K' && code[0] !== 'S') {
      
    } else {
      userInput += name;
    }

    typedText.style.color = "black";
    typedText.style.fontSize = "40px";
    typedText.innerHTML = userInput;

    // Alert the key name and key code on keydown
  },
  false
);

// document.addEventListener('keypress', event => {
//   // Get the character that was pressed
//   const char = String.fromCharCode(event.keyCode);

//   // Append the character to the typed text
//   typedText.innerHTML += char;
// });