$( ".buttonmenu" ).click(function() {
  if(parseInt($(".testmenu").css("left")) == -300)  
  $(".testmenu").stop().animate({left: "+=300px"}, 500);  
  if(parseInt($(".testmenu").css("left")) >= 0)  
  $(".testmenu").stop().animate({left: "-=300px"}, 500);
});