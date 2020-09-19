$(document).ready(function(){

  var banner = $(".animate");
  
  for (var i=0; i<999; i++) {
  
    banner.css("opacity", "1");
    banner.animate({left: 400}, 1000);
    
    for (var k=0; k<5; k++) {
      banner.animate({opacity: 0}, 600);
      banner.animate({opacity: 1}, 600);   
    }
    
    banner.delay(2000).animate({left: 1200}, 1000);
    banner.animate({left: -400}, 0); 
    
  }
 
}); 