let iteration = 0;
let secondCase = 0;
let thirdCase = 0;

const sizes = ["20px", "40px", "100px"];

let message = document.querySelector("h1");
const myButton = document.querySelector("button");

myButton.addEventListener("click", myFunc);

let container = document.getElementsByClassName("content");

function myFunc() {
  if (iteration < 5) {
    message.textContent = message.textContent + "!";
    iteration++;
  } else if (secondCase < sizes.length) {
    message.style.fontSize = sizes[secondCase];
    message.textContent = "I told you NOT to press it!";
    secondCase++;
  } else if (thirdCase < sizes.length) {
    myButton.style.fontSize = sizes[thirdCase - 1];
    message.style.fontSize = sizes[sizes.length - 2 - thirdCase];
    thirdCase++;
    console.log("here");
  } else {
    message.textContent = "I bet you CANNOT find it!";
    myButton.style.backgroundColor = "white";
    myButton.style.fontSize = "20px";
    myButton.style.top = "80%";
    myButton.style.left = "5%";
  }
}

var speed = 10, boxElement = document.getElementById("content");

console.log(boxElement);
if (boxElement) {
  var direction = Math.floor(Math.random() * 10) + 1; // 1 = move right; -1 = move left

  boxElement.addEventListener("mouseover", function () {
    // Calculate and store some of the box coordinates:
    var boxLeftPos = boxElement.offsetLeft,
      boxRightPos = boxLeftPos + boxElement.offsetWidth;
    // When right side of the box goes too far - change direction:
    if (boxRightPos > document.body.offsetWidth) {
      direction = -(Math.floor(Math.random() * 10) + 1);
    }
    // When left side of the box goes too far - change direction:
    if (boxLeftPos < 0) {
      direction = Math.floor(Math.random() * 10) + 1;
    }
    boxElement.style.left = boxLeftPos + speed * direction + "px";
  });
}
