$(document).ready(function(){
    $(".navLeft").click(function(){
        $(".home-wrapper").css("display", "grid");
        $(".art-wrapper").css("display", "none");
        $(".write-wrapper").css("display", "none");
        $(".proj-wrapper").css("display", "none");
    });

    $("#projB").click(function(){
      $(".home-wrapper").css("display", "none");
      $(".art-wrapper").css("display", "none");
      $(".write-wrapper").css("display", "none");
      $(".proj-wrapper").css("display", "grid");
    });

    $("#artB").click(function(){
        $(".home-wrapper").css("display", "none");
        $(".art-wrapper").css("display", "grid");
        $(".write-wrapper").css("display", "none");
        $(".proj-wrapper").css("display", "none");
    });

    $("#blogB").click(function(){
        $(".home-wrapper").css("display", "none");
        $(".art-wrapper").css("display", "none");
        $(".write-wrapper").css("display", "grid");
        $(".proj-wrapper").css("display", "none");
    });
  });