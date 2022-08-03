window.onscroll = function () {
  scrollFunction();
};
console.log("hello");
function scrollFunction() {
  if (
    document.body.scrollTop > 900 ||
    document.documentElement.scrollTop > 900
  ) {
    document.getElementById("header").style.height = "4.5rem";
    document.getElementsByClassName("logo").style.fontSize = "26px";
    document.getElementsByClassName("logo").style.transition = "0.8s";
  } else {
    document.getElementById("header").style.height = "6rem";
    document.getElementsByClassName("logo").style.fontSize = "34px";
    document.getElementsByClassName("logo").style.transition = "0.6s";
  }
}
