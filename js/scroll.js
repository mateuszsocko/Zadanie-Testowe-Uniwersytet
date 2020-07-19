window.onscroll = function() {
  var header = document.getElementById('sticky-header');
  if (window.scrollY > 30) {
    header.classList.add('sticky-header-color');
  } else {
    header.classList.remove('sticky-header-color');
  }
}