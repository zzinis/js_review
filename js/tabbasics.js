
const $tab = $("#tabbasics"); 
const $btns = $tab.find("dt a"); 
const $boxs = $tab.find("dd"); 


$btns.on("click", function(e){
    e.preventDefault(); 

    let isOn = $(this).hasClass("on"); 
    if(isOn) return; 

    let target = $(this).attr("href"); 

    $boxs.hide(); 
    $btns.removeClass("on"); 

    $(this).addClass("on");
    $(target).show(); 
});

 