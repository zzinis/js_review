let enableClick = true;  
let len = $(".list li").length; 
let timer;  

$(".list li").last().prependTo(".list"); 

$(".list").css({

    width: 100 * len +"%",
    height:"100%", 
    marginLeft:"-100%"
}); 

$(".list li").css({
    width: 100 / len +"%",
    height:"100%", 
    float:"left"
});


//next버튼 클릭시 이벤트 
$(".next").on("click", function(e){
    e.preventDefault(); 

    if(enableClick){
        enableClick = false; 
        console.log("1");
        $(".list").animate({marginLeft:"-200%" },1000, function(){
            $(".list").css({marginLeft : "-100%"}); 
            $(".list li").first().appendTo(".list");
            enableClick = true;  
            console.log("2"); 
        }); 
    }
}); 

$(".prev").on("click", function(e){
    e.preventDefault(); 

    if(enableClick){
        $(".list").animate({ marginLeft: "0%"},1000, function(){
            $(".list").css({marginLeft :"-100%"}); 
            $(".list li").last().prependTo(".list"); 
            enableClick = true; 
        });
        enableClick = false; 
    }    
});


$(".start").on("click", function(e){
    e.preventDefault(); 

    let isOn = $(this).hasClass("on"); 
    if(isOn) return; 

    timer = setInterval(function(){
        $(".list").animate({marginLeft:"-200%" },1000, function(){
            $(".list").css({marginLeft : "-100%"}); 
            $(".list li").first().appendTo(".list");          
        }); 
    },2000);  
    
    $(".start").addClass("on"); 
    $(".stop").removeClass("on"); 
});

$(".stop").on("click", function(e){
    e.preventDefault();
    
    let isOn = $(this).hasClass("on"); 
    if(isOn) return; 
    
    clearInterval(timer); 

    $(".stop").addClass("on"); 
    $(".start").removeClass("on"); 
}); 

