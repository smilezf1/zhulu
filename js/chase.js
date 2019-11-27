window.onload=function(){
    //头部
    $(".h-nav div").mouseover(function(){
        $(this).children().css({top:"-18px"});
       
      });
      $(".h-nav div").mouseout(function(){
          $(this).children().css({top:""})
  });
  $(".h-nav div").click(function(){
    $(this).children().css({color:'#317242'});
  $(this).closest("li").siblings().find("span").css({color:''})
  })
   //s2
    $(".s2 .content ul li").eq(15).nextAll().css({borderBottom:"none"})
 $(" .s2 .content ul li img").mouseover(function(){
     $(this).css({filter:"grayscale(0%)"});
   
 })
 $(" .s2 .content ul li img").mouseout(function(){
    $(this).css({filter:"grayscale(100%)"})
})
//s3
$(".s3 .container p").css({
    animationName:'slideInUp',
    animationDuration:"1.5s",
    animationDelat:"0.3s"
})

//s4

  //s5
  $(".swiper-slide .pardiscv").mouseover(function(e){
      $(this).css({background:"rgba(32,98,49,.85)",transition:"all 1s"})
      $(this).find(".discv").css({
        opacity:1
    });
    $(this).find(".discv").removeClass("animated zoomOut").addClass("animated  zoomIn");
    e.stopPropagation();
     
})
$(".swiper-slide .pardiscv").mouseout(function(e){
  $(this).css({background:"",transition:"all 1s"});
  $(this).find(".discv").css({opacity:0,})
  $(this).find(".discv").removeClass("animated zoomIn").addClass(" animated zoomOut");
  e.stopPropagation();
})
var p=1;
$(".s5-content .swiper-wrapper").css({
  transition:"left 1s",
  position:"relative",
  left:"-1515px"
})
setInterval(function(){
  p++;
  console.log(p);
  if(p==16){
    p=1
    $(".s5-content .swiper-wrapper").css({transition:""})
    setTimeout(function(){
      p++;
      $(".s5-content .swiper-wrapper").css({
        left:""+((-1515)+(-303*p))+"px",
        transition:"left 1s"
      })
    },10)
  }
  $(".s5-content .swiper-wrapper").css({
    position:"relative",
    left:""+((-1515)+(-303*p))+"px",
  })
},1000)



//s6
$(".s6-content .left").find("h2,p").css({position:"relative",top:"0",transition:"all 0.5s"});
$(".s6-content .right").find("h2,p").css({position:"relative",top:"0",transition:"all 0.5s"});
$(".s6-content>div").mouseover(function(){
$(this).find("h2").css({top:"-30px"})
$(this).find("p").css({top:"-10px"})


  $(this).find(".btn1").css({
    color:"#206231",
  }).children().css({
    borderColor:"#206231"
  })
   })
   $(".s6-content>div").mouseout(function(){
    $(this).find("h2").css({top:"0px"})
    $(this).find("p").css({top:"0px"})
     
   })
  
}

