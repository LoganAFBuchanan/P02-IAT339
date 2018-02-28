//Enabling Strict Mode!!!
"use strict";

var menuToggle = document.querySelector(".menu-toggle");
var menuItems = document.querySelector(".mobile-menu-items");
var mainContent = document.querySelector(".content");

var menuIconSrc = "assets/images/menu-icon.svg";
var closeIconSrc = "assets/images/close-icon.svg";

hideMenu();



menuToggle.addEventListener("click", function(obj){

  if(menuItems.classList.contains("hide-right")){
    showMenu();
  }else{
    hideMenu();
  }

});


//Allows tapping elsewhere to close the menu
mainContent.addEventListener("click", function(obj){

  if(menuItems.classList.contains("hide-right") == false){
    hideMenu();
  }

})

console.log(menuToggle);

function hideMenu(){
  console.log("Hiding the Mobile Menu Items");
  menuItems.classList.add("hide-right");
  console.log("Mobile Menu items are hidden!");
  menuItems.setAttribute("aria-hidden", "true");

  menuToggle.setAttribute("src", menuIconSrc);
}

function showMenu(){
  console.log("Revealing the Mobile Menu Items");
  menuItems.classList.remove("hide-right");
  console.log("Mobile Menu items are Revealed!");
  menuItems.setAttribute("aria-hidden", "false");

  menuToggle.setAttribute("src", closeIconSrc);
}
