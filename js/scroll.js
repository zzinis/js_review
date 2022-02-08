
let pos0 = $("#header").offset().top; 
let pos1 = $("#news").offset().top; 
let pos2 = $("#brand").offset().top; 
let pos3 = $("#crew").offset().top; 


$(window).on("scroll", function(){
    let scroll = $(this).scrollTop(); 
    $("#navi li a").removeClass("on"); 

    if(scroll>=pos0 && scroll < pos1){
        $("#navi li").eq(0).children("a").addClass("on"); 
    }
    if(scroll>=pos1 && scroll < pos2){
        $("#navi li").eq(1).children("a").addClass("on"); 
    }
    if(scroll>=pos2 && scroll < pos3){
        $("#navi li").eq(2).children("a").addClass("on"); 
    }
    if(scroll>=pos3 ){
        $("#navi li").eq(3).children("a").addClass("on"); 
    }
});

$("#navi li a").on("click", function(e){
    e.preventDefault(); 

    let target = $(this).attr("href"); 
    console.log(target); 

    let targetPos = $(target).offset().top; 
    console.log(targetPos); 

    $("html, body").animate({
        scrollTop : targetPos
    },1000);
});


let posArr = []; 
const $btns = $("#navi li"); 
let $boxs = $(".myScroll"); 
let len = $btns.length; 


for(let i=0; i<len; i++){
    posArr.push($boxs.eq(i).offset().top);     
}

// $(window).on("scroll", function(){
//     var scroll = $(this).scrollTop(); 

//     for(let i =0; i<len; i++){
//         if(scroll >= posArr[i]){
//             $btns.children("a").removeClass("on"); 
//             $btns.eq(i).children("a").addClass("on"); 
//         }
//     }
// }); 

$(window).on("scroll", function(){
    var scroll = $(this).scrollTop(); 
    for(let i =0; i<len; i++){
        if(scroll >= posArr[i] + baseLine){
            $btns.children("a").removeClass("on"); 
            $btns.eq(i).children("a").addClass("on"); 

            $boxs.removeClass("on");
            $boxs.eq(i).addClass("on"); 
        }
    }
}); 

