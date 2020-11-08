$(function(){
 // $(".name").on("click",function(){
 //    $(this).css("opacity",0.5);
 // })

 $("#hamburger-btn")
 .on("click",function(){
 	$(this).toggleClass("on");
 })
.on("click",function(){
 	 $(".target").toggleClass("hide");
 });
})