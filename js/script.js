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

const writeWrap = document.getElementById('mySidenav');
const closer = document.getElementById('closebtn');
const filterArrow = document.querySelector(".filter-expand")
let filterOpen = false;
if ('ontouchstart' in window) {
  filterArrow.addEventListener('touchstart', () => {
    if(!filterOpen) {
      // filterArrow.classList.add('expanded');
      writeWrap.style.width = "250px";
      filterOpen = true;
    }
  });
  closer.addEventListener('touchstart', () => {
    {
      writeWrap.style.width = "0px";
      filterOpen = false;
    }
  });
}
else {
  filterArrow.addEventListener('click', () => {
    if(!filterOpen) {
      // filterArrow.classList.add('expanded');
      writeWrap.style.width = "250px";
      filterOpen = true;
      
    }
  });
  closer.addEventListener('click', () => {
    {
      writeWrap.style.width = "0px";
      filterOpen = false;
    }
  });
}



$(document).ready(function() {
  $(".overlay-start").css("opacity","0")
  $(".overlay-start").delay(2500).queue(function (hid) {
    $(this).hide(); 
    hid();
  });

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
    $("#blogBtn").css("color", "#fff");
    $("#artBtn").css("color", "#fff");
    $("#projectBtn").css("color", "#fff");
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
    $("#logo").css("background-color", "#9dd7db");
    $("#projectBtn").css("color", "#9dd7db");
    $("#artBtn").css("color", "#fff");
    $("#blogBtn").css("color", "#fff");
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
    $("#logo").css("background-color", "#db9dd3");
    $("#artBtn").css("color", "#db9dd3");
    $("#projectBtn").css("color", "#fff");
    $("#blogBtn").css("color", "#fff");
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
    $("#logo").css("background-color", "#dbda9d");
    $("#blogBtn").css("color", "#dbda9d");
    $("#artBtn").css("color", "#fff");
    $("#projectBtn").css("color", "#fff");
  });

});

// MODAL FUNCTIONS
var modal = document.getElementsByClassName("modal");
var modalBox = document.getElementsByClassName("modal-box")
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
var imModalBox = document.getElementsByClassName("image-modal-box");
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
  $("#mySidenav").width(0);
  filterOpen = false;
  $("#all").css("background-color", "#a89c2d");
  $("#tech").css("background-color", "#131313");
  $("#nonTech").css("background-color", "#131313");
});

$("#tech").click(function(){
  $(".nonTechnical").css("display", "none");
  $(".technical").css("display", "block");
  $("#mySidenav").width(0);
  filterOpen = false;
  $("#tech").css("background-color", "#a89c2d");
  $("#all").css("background-color", "#131313");
  $("#nonTech").css("background-color", "#131313");
});
$("#nonTech").click(function(){
  $(".technical").css("display", "none");
  $(".nonTechnical").css("display", "block");
  $("#mySidenav").width(0);
  filterOpen = false;
  $("#nonTech").css("background-color", "#a89c2d");
  $("#tech").css("background-color", "#131313");
  $("#all").css("background-color", "#131313");
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
          $(modalBox[i]).fadeIn(100);
        }

        if (event.target == imBtn[i]) {
          imModal[i].style.opacity = "1";
          imModal[i].style.visibility = "visible";
          $(imModalBox[i]).fadeIn(100);
        }

        if (event.target == modal[i]) {
          modal[i].style.opacity = "0";
          modal[i].style.visibility = "hidden";
          $(modalBox[i]).fadeOut(100);
        }
        if (event.target == imModal[i]) {
          imModal[i].style.opacity = "0";
          imModal[i].style.visibility = "hidden";
          $(imModalBox[i]).fadeOut(100);
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
          $(modalBox[i]).fadeIn(100);
        }
        if (event.target == imBtn[i]) {
          imModal[i].style.opacity = "1";
          imModal[i].style.visibility = "visible";
          $(imModalBox[i]).fadeIn(100);
        }
        if (event.target == modal[i]) {
          modal[i].style.opacity = "0";
          modal[i].style.visibility = "hidden";
          $(modalBox[i]).fadeOut(100);
        }
        if (event.target == imModal[i]) {
          imModal[i].style.opacity = "0";
          imModal[i].style.visibility = "hidden";
          $(imModalBox[i]).fadeOut(100);
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



let requestURL = '/project.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL); 
request.responseType = 'json';
request.send();

request.onload = function() {
  const tit = request.response;
  populateModal(tit);
}

function isEmptyObj(object) {
  for (var key in object) {
      if (object.hasOwnProperty(key)) {
          return false;
      }
  }
}

function populateModal(jsonObj) {
  const projects = jsonObj['projects'];
  for (let i = 0; i < projects.length; i++) {
    const projectName = document.querySelectorAll('#project-name');
    projectName[i].textContent = projects[i].name;

    const box = document.getElementsByClassName('modal-box');

    // inside MODAL
    // Project Title
    const title = document.createElement('h2');
    title.textContent = projects[i].name;
    box[i].appendChild(title);
    // Project Type
    const type = document.createElement('h5');
    type.textContent = projects[i].type;
    box[i].appendChild(type);
    // Chip tags
    const tags = projects[i].tags;
    const tagFrame = document.createElement('div');
    const used = document.createElement('p');
    used.textContent = 'Tags: ';
    tagFrame.appendChild(used);
    for ( let j = 0 ; j < tags.length; j++) {
      const chips = document.createElement('div');
      chips.classList.add('chip');
      chips.textContent = tags[j];
      tagFrame.appendChild(chips);
    }
    box[i].appendChild(tagFrame);

    const inspHeader = document.createElement('h3');
    inspHeader.textContent = "Inspirtation:";

    const conceptHeader = document.createElement('h3');
    conceptHeader.textContent = "Concept:";

    const chalHeader = document.createElement('h3');
    chalHeader.textContent = "Challenges Faced:";

    const learntHeader = document.createElement('h3');
    learntHeader.textContent = "What I learnt:";

    const nextHeader = document.createElement('h3');
    nextHeader.textContent = "What's Next:";

    const inspiration = document.createElement('p');
    inspiration.textContent = projects[i].inspiration;
    const concept = document.createElement('p');
    concept.textContent = projects[i].concept;
    const challenges = document.createElement('p');
    challenges.textContent = projects[i].challenges;
    const learnt = document.createElement('p');
    learnt.textContent = projects[i].learnt;
    const next = document.createElement('pre');
    next.textContent = projects[i].next;

    if (inspiration.innerHTML !== "") {
      box[i].appendChild(inspHeader);
      box[i].appendChild(inspiration);
    }

    if (concept.innerHTML !== "") {
      box[i].appendChild(conceptHeader);
      box[i].appendChild(concept);
    }
    
    if (challenges.innerHTML !== "") {
      box[i].appendChild(chalHeader);
      box[i].appendChild(challenges);
    }

    if (learnt.innerHTML !== "") {
      box[i].appendChild(learntHeader);
      box[i].appendChild(learnt);
    }

    if (next.innerHTML !== "") {
      box[i].appendChild(nextHeader);
      box[i].appendChild(next);
    }
    }
}