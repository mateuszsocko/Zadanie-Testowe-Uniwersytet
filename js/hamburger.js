function myFunction() {
  var x = document.getElementById("menu-header-menu");
  if (x.className === "menu-header") {
    x.className += " mobile";
  } else {
    x.className = "menu-header";
  }
} 
