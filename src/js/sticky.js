window.onscroll = function() {myFunction()};

const element = document.getElementById("sidebar");
const header = document.getElementById("myHeader");

let fixed = element.offsetTop;
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 50) {
    element.classList.add("fixed");
    header.classList.add("sticky");
  } else {
    element.classList.remove("fixed");
    header.classList.remove("sticky");
  }
}