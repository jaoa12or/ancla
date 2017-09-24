$(function(){
        $('.scrolldown').click
        (function(){
            $('html,body').animate({scrollTop:$('.container_pages').offset().top},500,'linear');
            
            return false;
            
            
            
            
        });
        
        
        
    });




$(document).ready(function(){
    

    
   var height = $(window).height();
    
    
    ajustesIniciales();
    
    
    
    function ajustesIniciales(){
        $("#container").css({"margin-top": height - 60 + "px"});
    }
    
    
    $(document).scroll(function(){
        
       var scrollTop = $(this).scrollTop();
        var pixels = scrollTop/100;
        
        if(scrollTop<=height){
            $("#bannerblock").css({
                
                "background-position": "center -" + pixels * 10 + "px"
                
            });
        }
        
        
        
        
        
    });
    
  
    
    
});






