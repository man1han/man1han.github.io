const menuBtn = document.querySelector('.ham');
const navButtons = document.querySelector(".navBtn")
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navButtons.classList.add('op');
    // $(".navBtn").height("50px");
    // $(".navBtn").css("opacity","1");

    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navButtons.classList.remove('op');
    // $(".navBtn").css("opacity","0");
    // $(".navBtn").height("0px");
    menuOpen = false;
  }
});

$(document).ready(function(){
    $(".navLeft").click(function(){
        $(".home-wrapper").css("display", "grid");
        $(".art-wrapper").css("display", "none");
        $(".write-wrapper").css("display", "none");
        $(".proj-wrapper").css("display", "none");
        $(".btn1").removeClass("active");
        $(".btn2").removeClass("active");
        $(".btn3").removeClass("active");

    });

    $("#projB").click(function(){
      $(".home-wrapper").css("display", "none");
      $(".art-wrapper").css("display", "none");
      $(".write-wrapper").css("display", "none");
      $(".proj-wrapper").css("display", "grid");
      $(".btn1").addClass("active");
      $(".btn2").removeClass("active");
      $(".btn3").removeClass("active");
    });

    $("#artB").click(function(){
        $(".home-wrapper").css("display", "none");
        $(".art-wrapper").css("display", "grid");
        $(".write-wrapper").css("display", "none");
        $(".proj-wrapper").css("display", "none");
        $(".btn2").addClass("active");
        $(".btn1").removeClass("active");
        $(".btn3").removeClass("active");
    });

    $("#blogB").click(function(){
        $(".home-wrapper").css("display", "none");
        $(".art-wrapper").css("display", "none");
        $(".write-wrapper").css("display", "grid");
        $(".proj-wrapper").css("display", "none");
        $(".btn3").addClass("active");
        $(".btn2").removeClass("active");
        $(".btn1").removeClass("active");
    });
  });

  var modal = document.getElementsByClassName("modal");

  // Get the button that opens the modal
  var btn = document.getElementsByClassName("project-image");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn[0].onclick = function() {
    // modal[0].style.display = "block";
    modal[0].style.opacity = "1";
    modal[0].style.visibility = "visible";

}
btn[1].onclick = function() {
    // modal[1].style.display = "block";
    modal[1].style.opacity = "1";
    modal[1].style.visibility = "visible";
}
  // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//     modal.style.display = "none";
//   }
  
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var i;
    for(i=0; i<=modal.length;i++){
        if (event.target == modal[i]) {
            // modal[i].style.display = "none";
            modal[i].style.opacity = "0";
            modal[i].style.visibility = "hidden";
        }
    }
}

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