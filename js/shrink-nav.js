window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 900 ||
    document.documentElement.scrollTop > 900
  ) {
    document.getElementById("header").style.height = "4rem";
    document.getElementById("logo").style.fontSize = "24px";
  } else {
    document.getElementById("header").style.height = "6rem";
    document.getElementById("logo").style.fontSize = "36px";
  }
}
