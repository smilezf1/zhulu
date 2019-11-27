window.onload=function(){
    $(".h-nav div").mouseover(function(){
        $(this).children().css({top:"-18px"})
      });
      $(".h-nav div").mouseout(function(){
          $(this).children().css({top:""})
        });
        $(".h-nav div").click(function(){
          $(this).children().css({color:'#317242'});
        $(this).closest("li").siblings().find("span").css({color:''})
        })
   $(".s3-content>div").mouseover(function(){
   $(this).find("h2,p").css({
    visibility:"visible",
animationName:"slideInUp",
animationDuration:"1.5s",
animationDelay:"0.2S",
   });
 $(this).find(".btn").css({
   color:"#206231",
 }).children().css({
   borderColor:"#206231"
 })
  })
  $(".s3-content>div").mouseout(function(){
    $(this).find("h2,p").css({
      visibility:"visible",
  animationName:"slideInDown",
  animationDuration:"1.5s",
  animationDelay:"0.2S",
     });
     $(this).find(".btn").css({
      color:"",
    }).children().css({
      borderColor:""
    })
  })
  window.onscroll=function(){
   var h=parseInt(document.documentElement.clientHeight+document.documentElement.scrollTop);
   var s3C=$(".s3-content")[0].offsetTop;
   console.log(s3C,h);
   if(s3C-h<110){
     $(".s3-content").css({
      visibility:"visible",
      animationDuration:"1.5s",
        animationName:"slideInUp",
        animationDelay:"0.2s"
     })
   }
  }
}

