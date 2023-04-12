const helloButton = document.querySelector("#addButton");
const message = document.querySelector("#message");
const body = document.querySelector("#content");

const content =
  "Today, after more than a century of electric technology, we have extended our central nervous system itself in a global embrace, abolishing both space and time as far as our planet is concerned.";

let title = "The Medium Is The Massage ";
const len = title.length;
let i = 0;
let left_pos = 0;
let currTop = 10;
let currLeft = 100;

helloButton.addEventListener("click", () => {
  const newMessageItem = document.createElement("p");
  newMessageItem.textContent = content;
  newMessageItem.style.fontSize = generateRandomInt(5, 30) + "px";
  newMessageItem.style.color = "#" + generateRandomColor();
  message.addEventListener("click", typeWriter);
  message.appendChild(newMessageItem);

  const newTitleWord = document.createElement("p");
  newTitleWord.textContent = title[i % len];
  newTitleWord.style.position = "absolute";
  newTitleWord.style.fontSize = "150px";
  newTitleWord.style.color = "white";

  if (title[i % len] == " " || title[i % len] == "") {
    currTop += 100;
    newTitleWord.style.left = currLeft + "px";
    left_pos = 0;
  } else {
    newTitleWord.style.left = getNewLeftPos() + "px";
  }
  newTitleWord.style.top = currTop + "px";
  body.appendChild(newTitleWord);
  i++;
});

const generateRandomInt = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

const generateRandomColor = () => {
  return (randomColor = Math.floor(Math.random() * 16777215).toString(16));
};

const getNewLeftPos = () => {
  const pos = currLeft + left_pos * 100;
  left_pos++;
  return pos;
};

j = 0;
speed = 50;

const typeWriter = () => {
  if (j < content.length) {
    document.getElementsByTagName("p").innerHTML += content.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
};
