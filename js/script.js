const menuBtn = document.querySelector('.ham');
const navButtons = document.querySelector(".navBtn")
let menuOpen = false;
if ('ontouchstart' in window) {
  menuBtn.addEventListener('touchstart', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open');
      navButtons.classList.add('op');
      menuOpen = true;
      
    } else {
      menuBtn.classList.remove('open');
      navButtons.classList.remove('op');
      menuOpen = false;
    }
  });
}
else {
  menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open');
      navButtons.classList.add('op');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      navButtons.classList.remove('op');
      menuOpen = false;
    }
  });
}


$(document).ready(function() {
  $("#navLeft").click(function() {
    $(".home-wrapper").css("display", "grid");
    $(".art-wrapper").css("display", "none");
    $(".write-wrapper").css("display", "none");
    $(".proj-wrapper").css("display", "none");
    $("#projectBtn").removeClass("active");
    $("#artBtn").removeClass("active");
    $("#blogBtn").removeClass("active");
    menuBtn.classList.remove('open');
    navButtons.classList.remove('op');
    menuOpen = false;
    $("#logo").css({'transform' : 'rotateY('+ 90 +'deg)'});
    $("#logo").delay(350).queue(function (next) { 
      $(this).css({'transform' : 'rotateY('+ 0 +'deg)'}); 
      next();
    });
    $("#logo").css("background-color", "#fff");
  });

  $("#projectBtn").click(function() {
    $(".home-wrapper").css("display", "none");
    $(".art-wrapper").css("display", "none");
    $(".write-wrapper").css("display", "none");
    $(".proj-wrapper").css("display", "grid");
    $("#projectBtn").addClass("active");
    $("#artBtn").removeClass("active");
    $("#blogBtn").removeClass("active");
    menuBtn.classList.remove('open');
    navButtons.classList.remove('op');
    menuOpen = false;
    $("#logo").css({'transform' : 'rotateY('+ 90 +'deg)'});
    $("#logo").delay(350).queue(function (next) { 
      $(this).css({'transform' : 'rotateY('+ 0 +'deg)'}); 
      next(); 
    });
    $("#logo").css("background-color", "rgb(59, 51, 172)");
  });
  
  $("#artBtn").click(function() {
    $(".home-wrapper").css("display", "none");
    $(".art-wrapper").css("display", "grid");
    $(".write-wrapper").css("display", "none");
    $(".proj-wrapper").css("display", "none");
    $("#artBtn").addClass("active");
    $("#projectBtn").removeClass("active");
    $("#blogBtn").removeClass("active");
    menuBtn.classList.remove('open');
    navButtons.classList.remove('op');
    menuOpen = false;
    $("#logo").css({'transform' : 'rotateY('+ 90 +'deg)'});
    $("#logo").delay(350).queue(function (next) { 
      $(this).css({'transform' : 'rotateY('+ 0 +'deg)'}); 
      next(); 
    });
    $("#logo").css("background-color", "rgb(121, 40, 155)");

  });
  
  $("#blogBtn").click(function() {
    $(".home-wrapper").css("display", "none");
    $(".art-wrapper").css("display", "none");
    $(".write-wrapper").css("display", "grid");
    $(".proj-wrapper").css("display", "none");
    $("#blogBtn").addClass("active");
    $("#artBtn").removeClass("active");
    $("#projectBtn").removeClass("active");
    menuBtn.classList.remove('open');
    navButtons.classList.remove('op');
    menuOpen = false;
    $("#logo").css({'transform' : 'rotateY('+ 90 +'deg)'});
    $("#logo").delay(350).queue(function (next) { 
      $(this).css({'transform' : 'rotateY('+ 0 +'deg)'}); 
      next(); 
    });
    $("#logo").css("background-color", "rgb(170, 50, 19)");
  });

});

// MODAL FUNCTIONS
var modal = document.getElementsByClassName("modal");
var btn = document.getElementsByClassName("project-image");

// var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// MODAL INVISIBLE
// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   console.log("modal was clicked")
//     var i;
//     for(i=0; i<=modal.length;i++){
//         if (event.target == modal[i]) {
//             modal[i].style.opacity = "0";
//             modal[i].style.visibility = "hidden";
//         }
//     }
// }

//MODAL VISIBLE
// for (var i = 0, len = btn.length; i < len; i++)
// {
//   (function(index){
//     btn[i].onclick = function(){
//       modal[index].style.opacity = "1";
//       modal[index].style.visibility = "visible";
//     }    
//   })(i);
// }



//IMAGE MODAL FUNCTIONS
var imModal = document.getElementsByClassName("image-modal");
var imBtn = document.getElementsByClassName("im");

//MODAL VISIBLE
// for (var i = 0, len = imBtn.length; i < len; i++)
// {
//   (function(index){
//     imBtn[i].onclick = function(){
//       imModal[index].style.opacity = "1";
//       imModal[index].style.visibility = "visible";
//     }    
//   })(i);
// }

//CORRECT CLOSER
// window.onclick = function(event) {
//   for(var i=0; i<=modal.length || i<imModal.length ;i++){
//     if (event.target == modal[i]) {
//       modal[i].style.opacity = "0";
//       modal[i].style.visibility = "hidden";
//     }
//     if (event.target == imModal[i]) {
//       imModal[i].style.opacity = "0";
//       imModal[i].style.visibility = "hidden";
//     }
//   }
// }

$("#all").click(function(){
  $(".technical, .nonTechnical").css("display", "block");
});

$("#tech").click(function(){
  $(".nonTechnical").css("display", "none");
  $(".technical").css("display", "block");
});
$("#nonTech").click(function(){
  $(".technical").css("display", "none");
  $(".nonTechnical").css("display", "block");
});

// var touchEvent;

// First we check if you support touch, otherwise it's click:
// touchEvent = 'ontouchstart' in window ? 'ontouchstart' : 'onclick';
let touchmoved = true;
window.addEventListener('touchmove', (e) => {
  touchmoved = true;})
window.addEventListener('touchstart', (e) => {
  touchmoved = false;})
if ('ontouchstart' in window) {
  window.ontouchend = function(event) {
    if(touchmoved != true)
      for(var i=0; i<=modal.length || i<imModal.length ;i++){
        if (event.target == btn[i]) {
          modal[i].style.opacity = "1";
          modal[i].style.visibility = "visible";
        }

        if (event.target == imBtn[i]) {
          imModal[i].style.opacity = "1";
          imModal[i].style.visibility = "visible";
        }

        if (event.target == modal[i]) {
          modal[i].style.opacity = "0";
          modal[i].style.visibility = "hidden";
        }
        if (event.target == imModal[i]) {
          imModal[i].style.opacity = "0";
          imModal[i].style.visibility = "hidden";
        }
      }
    }
}
else {
  window.onclick = function(event) {
      for(var i=0; i<=modal.length || i<imModal.length ;i++){
        if (event.target == btn[i]) {
          modal[i].style.opacity = "1";
          modal[i].style.visibility = "visible";
        }
        if (event.target == imBtn[i]) {
          imModal[i].style.opacity = "1";
          imModal[i].style.visibility = "visible";
        }
        if (event.target == modal[i]) {
          modal[i].style.opacity = "0";
          modal[i].style.visibility = "hidden";
        }
        if (event.target == imModal[i]) {
          imModal[i].style.opacity = "0";
          imModal[i].style.visibility = "hidden";
        }
      }
    }
}

// Then we bind via thát event. This way we only bind one event, instead of the two as below
// window.addEventListener(touchEvent, () => {
//   for(var i=0; i<=modal.length || i<imModal.length ;i++){
//     if (touchEvent.target == modal[i]) {
//       modal[i].style.opacity = "0";
//       modal[i].style.visibility = "hidden";
//     }
//     if (touchEvent.target == imModal[i]) {
//       imModal[i].style.opacity = "0";
//       imModal[i].style.visibility = "hidden";
//     }
//   }
// });