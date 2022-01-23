
const $tab = $("#tabbasic"); 
const $btns = $tab.find("#btns li a"); 
const $boxs = $tab.find(".boxs div"); 
let speed = 500; 
let isDone = true; 

$btns.on("click", function(e){
    e.preventDefault(); 

    let isOn = $(this).hasClass("on"); 
    if(isOn) return; 

    if(isDone){
        isDone =false; 

        let i = $(this).parent("li").index(); 
        let ht = $boxs.eq(i).height(); 
        console.log(i); 

        activation(i, ht); 
    }
    
});
 
function activation(index, height ){

    $btns.removeClass("on"); 
    $btns.parent("li").eq(index).children("a").addClass("on"); 
    
    $boxs.fadeOut(speed); 
    $boxs.eq(index).fadeIn(speed); 

    $tab.animate({ height : height, marginTop:-height/2},speed, function(){
        isDone = true; 
    });
}

