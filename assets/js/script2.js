var color = "";

const background = (e) => {
  document.getElementById(e.target.id).style.backgroundColor = color;
};

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "black";
  } else if (event.key === "s") {
    color = "pink";
  } else if (event.key === "d") {
    color = "blue";
  }
});

document.addEventListener("click", background);