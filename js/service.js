window.onload=function(){
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
window.onscroll=function(){
var scrolltop=parseInt(document.documentElement.scrollTop);}
// $(".s1 .item .description").css({transition:"all 1s"})
$(".s1 .item .description2").css({position:"relative",transition:"top 1s"})

$(".s1 .item").mouseover(function(){
 $(this).find(".description").addClass("animated fadeOutDown 0.5s");
 $(this).find(".description").removeClass("slideInUp");
$(this).find(".description").addClass("animated fadeOutDown 0.5s")
$(this).find(".description2").css({
    fontSize:"21px",
    top:"-80px",
    color:"white"
})
})
$(".s1 .item").mouseout(function(){
    $(this).find(".description").removeClass("fadeOutDown");
     $(this).find(".description").addClass("fadeInUp");
    $(this).find(".description2").css({
        fontSize:"",
        top:"0px",
        color:""
    })
})
$(".s2 .item .description2").css({position:"relative",transition:"top 1s"})
$(".s2 .item").mouseover(function(){
    $(this).find(".description").addClass("animated fadeOutDown 0.5s");
    $(this).find(".description").removeClass("slideInUp");
   $(this).find(".description").addClass("animated fadeOutDown 0.5s")
   $(this).find(".description2").css({
       fontSize:"21px",
       top:"-80px",
       color:"white"
   })
   
})
$(".s2 .item").mouseout(function(){
    $(this).find(".description").removeClass("fadeOutDown");
     $(this).find(".description").addClass("fadeInUp");
    $(this).find(".description2").css({
        fontSize:"",
        top:"0px",
        color:""
    })
})

$(".s3 .item .description2").css({position:"relative",transition:"top 1s"})

$(".s3 .item").mouseover(function(){
    $(this).find(".description").addClass("animated fadeOutDown 0.5s");
    $(this).find(".description").removeClass("slideInUp");
   $(this).find(".description").addClass("animated fadeOutDown 0.5s")
   $(this).find(".description2").css({
       fontSize:"21px",
       top:"-80px",
       color:"white"
   })
   
})
$(".s3 .item").mouseout(function(){
    $(this).find(".description").removeClass("fadeOutDown");
     $(this).find(".description").addClass("fadeInUp");
    $(this).find(".description2").css({
        fontSize:"",
        top:"0px",
        color:""
    })
})

$(".s4 .item .description2").css({position:"relative",transition:"top 1s"})
$(".s4 .item").mouseover(function(){
    $(this).find(".description").addClass("animated fadeOutDown 0.5s");
    $(this).find(".description").removeClass("slideInUp");
   $(this).find(".description").addClass("animated fadeOutDown 0.5s")
   $(this).find(".description2").css({
       fontSize:"21px",
       top:"-80px",
       color:"white"
   })
})
$(".s4 .item").mouseout(function(){
    $(this).find(".description").removeClass("fadeOutDown");
     $(this).find(".description").addClass("fadeInUp");
    $(this).find(".description2").css({
        fontSize:"",
        top:"0px",
        color:""
    })
})

$(".s5 .item .description2").css({position:"relative",transition:"top 1s"})
$(".s5 .item").mouseover(function(){
    $(this).find(".description").addClass("animated fadeOutDown 0.5s");
    $(this).find(".description").removeClass("slideInUp");
   $(this).find(".description").addClass("animated fadeOutDown 0.5s")
   $(this).find(".description2").css({
       fontSize:"21px",
       top:"-80px",
       color:"white"
   })
})
$(".s5 .item").mouseout(function(){
    $(this).find(".description").removeClass("fadeOutDown");
    $(this).find(".description").addClass("fadeInUp");
   $(this).find(".description2").css({
       fontSize:"",
       top:"0px",
       color:""
   })
})
$(".s6 .item .description2").css({position:"relative",transition:"top 1s"})
$(".s6 .item").mouseover(function(){
    $(this).find(".description").addClass("animated fadeOutDown 0.5s");
    $(this).find(".description").removeClass("slideInUp");
   $(this).find(".description").addClass("animated fadeOutDown 0.5s")
   $(this).find(".description2").css({
       fontSize:"21px",
       top:"-80px",
       color:"white"
   })
})
$(".s6 .item").mouseout(function(){
    $(this).find(".description").removeClass("fadeOutDown");
    $(this).find(".description").addClass("fadeInUp");
   $(this).find(".description2").css({
       fontSize:"",
       top:"0px",
       color:""
   })
})
// s7
$(".s7-content .left").find("h2,p").css({position:"relative",top:"0",transition:"all 0.5s"});
$(".s7-content .right").find("h2,p").css({position:"relative",top:"0",transition:"all 0.5s"});
$(".s7-content>div").mouseover(function(){
$(this).find("h2").css({top:"-30px"})
$(this).find("p").css({top:"-10px"})


  $(this).find(".btn1").css({
    color:"#206231",
  }).children().css({
    borderColor:"#206231"
  })
   })
   $(".s7-content>div").mouseout(function(){
    $(this).find("h2").css({top:"0px"})
    $(this).find("p").css({top:"0px"})
     
   })
}

