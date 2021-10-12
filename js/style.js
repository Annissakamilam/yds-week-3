const navhamburger = document.querySelector('#navhamburger');

navhamburger.addEventListener('click', mobileMenuToogle);

function mobileMenuToogle(){
    document.querySelector('.nav_box').classList.toggle('active');
}

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}