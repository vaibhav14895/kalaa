window.onscroll = function() {
  resizeFunction();
  scrollFunction();
};

window.onresize = function() {
  resizeFunction();
}

function resizeFunction() {
  if (screen.width <= 780) {
    document.getElementById("header").style.height = "4rem";
    document.getElementById("logo").style.fontSize = "24px";
  }
  else {
    document.getElementById("header").style.height = "6rem";
    document.getElementById("logo").style.fontSize = "2em";
  }
}

function scrollFunction() {
  if (
    document.body.scrollTop > 900 ||
    document.documentElement.scrollTop > 900 || screen.width <= 780
  ) {
    document.getElementById("header").style.height = "4rem";
    document.getElementById("logo").style.fontSize = "24px";
  } else {
    document.getElementById("header").style.height = "6rem";
    document.getElementById("logo").style.fontSize = "36px";
  }
}
