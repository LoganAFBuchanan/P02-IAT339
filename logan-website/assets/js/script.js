// https://stackoverflow.com/questions/36125391/vanilla-js-delay-click-event-to-add-animation
window.onload = function(){

  var content = document.getElementById("content");
  var links = document.getElementsByTagName("a");

  for( var i=0; i < links.length; i ++ ){
    //Avoid links that open in a new tab and blank links
    if(links[i].target != "_blank"){
      links[i].onclick = clickHandler;
    }
  }

  function clickHandler(event) {

    event.preventDefault();
    var travelTo = this.getAttribute("href");
    content.style.animation = "fadeout 0.3s forwards";

    // Delay page out until the animation finishes
    setTimeout(function() {
      window.location.href = travelTo;
    }, 400);
  };
};
