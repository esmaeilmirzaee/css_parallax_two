scroll = window.pageYOffset;
var figureOne = document.getElementById('fig__one');
document.addEventListener('scroll', (event) => {
  var offset = window.pageYOffset;
  scroll = offset;
  figureOne.style.left = -(scroll/8) + '%';
  figureOne.style.top = scroll/10 + '%';
});

var figureTwo = document.getElementById('fig__two');

document.addEventListener('scroll', (event) => {
  var offset = window.pageYOffset;
  scroll = offset;
  figureTwo.style.left = (scroll/8) + '%';
  figureTwo.style.top = (scroll / 10) + '%';
});

var figureThree = document.getElementById('fig__three');

document.addEventListener('scroll', (event) => {
  var offset = window.pageYOffset;
  scroll = offset;
  figureThree.style.top = - (scroll / 5) + '%';
});