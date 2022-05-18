const hamburger = document.querySelector('.hamburger');
const nav_list = document.querySelector('.nav-list');

hamburger.addEventListener('click', function () {
  this.classList.toggle('is-active');
  nav_list.classList.toggle('is-active');
  console.log(nav_list.classList);
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}