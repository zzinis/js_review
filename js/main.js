$("#tab ul li a").on("click", function(e){
    e.preventDefault(); 

    let target = $(this).attr("href"); 

    $("#tab .group div").hide(); 
    $(target).show(); 
}); 