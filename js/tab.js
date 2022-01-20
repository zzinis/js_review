const $tab = $("#tab"); 
const $btns = $tab.find("dt a"); 
const $boxs = $tab.find("dd"); 

$btns.on("click focusin", function(e){
    e.preventDefault(); 

    let isOn = $(this).hasClass("on"); 
    if(isOn) return; 
    var target = $(this).attr("href"); 
    console.log(target); 

    $boxs.hide();  
    $(target).show();
    
    $btns.removeClass("on");
    $(this).addClass("on"); 
});  