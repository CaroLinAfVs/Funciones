var ele = document.getElementById("element", );

let pintar = function (click, color = "yellow") {
  ele.style.backgroundColor = color;
};

ele.addEventListener("click", pintar);
pintar("click", "green")
