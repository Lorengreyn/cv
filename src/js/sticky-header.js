window.onscroll = function() {myFunction()};

const header = document.getElementById("myHeader");

let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 80) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}