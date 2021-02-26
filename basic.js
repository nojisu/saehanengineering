$(function () {
	
	$(".go1 a").click( function() {
		  $("html,body").stop().animate({scrollTop:3100});
		  return false;
		});
	
	
	$(".go1 a").mouseover(function(){
		$(this).parent().css("border","1px solid #f40700")
	})
		$(".go1 a").mouseleave(function(){
		$(this).parent().css("border","1px solid #343434")
	})
	
	$(".go2 a").mouseover(function(){
		$(this).parent().css("border","1px solid #008836")
	})
		$(".go2 a").mouseleave(function(){
		$(this).parent().css("border","1px solid #343434")
	})
	
	
	    function moving() {
        $(".ticket img").animate({ top: -140 })
        $(".ticket img").animate({ top: -145 }, moving)
    }
    setInterval(moving);
    
    $(".horizon").horizon();
    
    $(".btn_submit").mouseover(function(){
    	$(this).stop().animate({color:"white", backgroundColor:"#5c5c5c"})
    })
        $(".btn_submit").mouseleave(function(){
    	$(this).stop().animate({color:"black", backgroundColor:"white"})
    })

    
    function opaciting() {
        $(".map .map_line").animate({opacity:1})
        $(".map .map_line").animate({opacity:0}, opaciting)
    }
    setInterval(opaciting);
    

	
})



