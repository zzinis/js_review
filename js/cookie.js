
var isCookie = document.cookie.indexOf("popup=done"); 
console.log(isCookie); 

if(isCookie == -1){
   $("#popup").show(); 
   console.log("쿠키없음"); 
}else{
   $("#popup").hide();
   console.log("쿠키있음");  
}

$(".del").on("click", function(){
   setCookie(0);
   alert("쿠키삭제완료");  
});

$(".view").on("click", function(){
   console.log(document.cookie); 
}); 

$("#popup .close").on("click", function(e){
   e.preventDefault(); 
   
   var isChecked = $("#popup").find("input[type=checkbox]").is(":checked"); 

   if(isChecked) setCookie(1); 
   $("#popup").hide(); 
}); 

function setCookie(time){
   var today = new Date(); 
   var date = today.getDate(); 
   
   today.setDate(date + time); 
   var duedate = today.toGMTString();


   document.cookie = "popup=done; expires="+duedate; 
}