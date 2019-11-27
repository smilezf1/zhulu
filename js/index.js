window.onload=function(){
  $(".h-nav div").mouseover(function(){
      $(this).children().css({top:"-18px"})
    });
    $(".h-nav div").mouseout(function(){
        $(this).children().css({top:""})
});
$(".h-nav div").click(function(){
 $(this).children().css({color:'#317242'})
})
$(".h-nav div").click(function(){
  $(this).children().css({color:'#317242'});
$(this).closest("li").siblings().find("span").css({color:''})
})
//轮播图
var mySwiper = new Swiper('.banner1', {
  loop:true,
  autoplay:true,
  effect : 'fade',
  speed:300,
  pagination: {
    el: '.swiper-pagination',
    clickable :true,
   },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});

var mySwiper = new Swiper('.banner2', {
  autoplay:false,
  loop:true,
slideActiveClass : 'active',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChangeTransitionStart: function(){
     if(this.realIndex==0){ 
      this.$el.find(".active .img1").addClass("animated bounceInLeft 2s ease 0.4s")
      this.$el.find(".active .img2").addClass("animated bounceInRight 2s ease 0.2s")
     }
     if(this.realIndex==1){
      this.$el.find(".active .img3").addClass("animated bounceInDown 1.2s ease 0.2s")
      this.$el.find(".active .img4").addClass("animated bounceInDown 2s ease 0.4s  ")
     }
     if(this.realIndex==2){
      this.$el.find(".active .img6 ").addClass("animated slideInRight 1.2s ease 0s")
      this.$el.find(".active .img7 ").addClass("animated slideInRight 1.2s ease 0s")
      this.$el.find(".active .img8 ").addClass("animated slideInRight 1.2s ease 0.3s both")
     this.$el.find(".active .img9 ").addClass("animated slideInRight 1.2s ease 0.3s both;")
      this.$el.find(".active .img10 ").addClass("animated slideInRight 1.2s ease 0.5s both")
      this.$el.find(".active .img11 ").addClass("animated slideInRight 1.2s ease 0.5s both")
      this.$el.find(".active .img12 ").addClass("animated slideInRight 1.2s ease 0.7s both")
      this.$el.find(".active .img13 ").addClass("animated slideInRight 1.2s ease 0.7s both") }
     if(this.realIndex==3){
      this.$el.find(".active .img14 ").addClass("animated slideInUp 1.2s ease 0.6s both;")
      this.$el.find(".active .img15 ").addClass("animated slideInUp 1.2s ease 0.3s both")
      this.$el.find(".active .img16 ").addClass("animated slideInUp 1.2s ease 0s both;")
      }
      if(this.realIndex==4){
        this.$el.find(".active .img19").addClass("animated slideInDown 1.2s ease 0.3s both");
        this.$el.find(".active .img20").addClass("animated slideInUp 1.2s ease 0.3s both");}
      if(this.realIndex==5){
        this.$el.find(".active .img21").addClass("animated zoomIn 1.2s ease 0s both");
        this.$el.find(".active .img22").addClass("animated slideInDown 1.2s ease 0.1s both");
        this.$el.find(".active .img23").addClass("animated slideInDown 1.6s ease 0.1s both");
}    
var li=$(".s1-content-main .right .list li")
  li.each(function(i,v){
  $(this).attr("index",i);
  })
  if($(li[this.realIndex]).attr("index")==this.realIndex){
   $(li[this.realIndex]).css({color:"#585555"}).siblings().css({color:""});
    $(li[this.realIndex]).find("span").css({background:"url(./img/index-s1-hm1dd2.png) no-repeat center center"})
  $(li[this.realIndex]).siblings().find("span").parent().find("span").css({background:""})
  }

},
},});



   $(".banner3 .swiper-wrapper").css({
     transform:"translate3d(-300px,0,0)",
     transition:"transform 1s",
   })
   var r=1;
    $(".s1 .btns-next").click(moveLeft);
    $(".s1 .btns-prev").click(moveRight);
    function moveLeft(){
      r++;
      console.log(r);
      if(r==8){
        r=1;
        $(".banner3 .swiper-wrapper").css({
          transition:"transfrom 0s"
        })
        setTimeout(function(){
          r++;
          $(".banner3 .swiper-wrapper").css({
            transform:"translate3d("+(-300)*r+"px,0,0)",
            transition:"transform 1s",
          })
        },10)
      
      }
    $(".banner3 .swiper-wrapper").css({
      transform:"translate3d("+(-300)*r+"px,0,0)",
     
    })
    }
    function moveRight(){
      r--
      if(r==-1){
        r=6
        $(".banner3 .swiper-wrapper").css({ transition:"none"})
        setTimeout(function(){
          r--;
          $(".banner3 .swiper-wrapper").css({
            transform:"translate3d("+(-300)*r+"px,0,0)",
            transition:"transform 1s",
          })
        },10)
      }
        $(".banner3 .swiper-wrapper").css({
          transform:"translate3d("+(-300)*r+"px,0,0)",
         
        })
      
    }






  $(".banner").css({height:""+document.documentElement.clientHeight+""})
  window.onresize=function(){
    $(".banner").css({height:""+document.documentElement.clientHeight+""})
  }
  
    
 // 右边固定导航
    $(".fixed li:nth-child(1)").mouseover(function(){
        $(".discv").css({visibility:"visible",width:"180px"})   
     })
     $(".fixed li:nth-child(1)").mouseout(function(){
         $(".discv").css({visibility:"hidden",width:""})   
      })
   
      //s1

$(".s1-content-main .left .btns-prev").mouseover(function(){
 $(this).css({background:"#317242"}).siblings().css({background:""});
 $(this).find("img").eq(1).css({opacity:1});
 });
 $(".s1-content-main .left .btns-prev").mouseout(function(){
   $(this).css({background:""});
   $(this).find("img").eq(1).css({opacity:0});
 })
 $(".s1-content-main .left .btns-next").mouseover(function(){
  $(this).css({background:"#317242"}).siblings().css({background:""});
  $(this).find("img").eq(1).css({opacity:1});
  });
  $(".s1-content-main .left .btns-next").mouseout(function(){
    $(this).css({background:""});
    $(this).find("img").eq(1).css({opacity:0});
  })
      //section2
    $(".s2-content-main li").mouseover(function(e){
   $(this).find(".img img").css({
     transform:"scale(1.1)",
     transition:"all 0.5s"
   })
    $(this).find(".pardiscv").css({
        opacity:1,
        transition:"all 1s"
    });
    $(this).find(".discv").removeClass("animated zoomOut").addClass("animated  zoomIn");
    e.stopPropagation();
    $(this).find(".bottom .imgBox").find(".img1").css({display:"none"})
    $(this).find(".bottom .imgBox").find(".img2").css({display:"block"}).addClass("animated fadeInLeft 1s infinite")})
$(".s2-content-main li").mouseout(function(e){
  $(this).find(".img img").css({
    transform:"scale(1.0)",
    transition:"all 0.5s"
  })
    $(this).find(".pardiscv").css({
        opacity:0,
        transition:"all 1s"
    });
    $(this).find(".discv").removeClass("animated zoomIn").addClass(" animated zoomOut");
    e.stopPropagation();
    $(this).find(".bottom .imgBox").children(".img1").css({display:"block"}).siblings().css({display:"none"})
})

    var x=null;
  window.onscroll=function(){
    var h=parseInt(document.documentElement.clientHeight+document.documentElement.scrollTop);
   var s1h=$(" .s1-content-head")[0].offsetTop-document.documentElement.scrollTop;
   var s1m=$(".s1-content-main")[0].offsetTop-document.documentElement.scrollTop;
   if(h-s1h>50){
     $(".s1-content-head").css({
      visibility:"visible",
      animationDuration:"1.5s",
        animationName:"slideInUp",
        animationDelay:"0.2s"
     })
 }
 if(h-s1m>10){
  $(".s1-content-main").css({
    visibility:"visible",
    animationDuration:"1.5s",
      animationName:"slideInUp",
   });
 }

  $(".s2-content-main li").each(function(i,v){
    x=v.offsetTop;
    if(h-x>100){
        $('.s2-content-main li').css({
            visibility:"visible",
            animationDuration:"3s",
              animationName:"slideInUp",
              animationDelay:"0.2s" 
            }) }
});
var s2T=$(".s2-content-top")[0].offsetTop;
if(s2T-h>100){
  $(".s2-content-top").css({
    visibility:"visible",
     animationDuration:"3s",
       animationName:"slideInUp",
       animationDelay:"0.2s"
 }) }
 //s3
var s3T=$(".s3-content-main")[0].offsetTop;
var s3F=$(".s3-content-foot")[0].offsetTop;
if(s3T-h<3583){
  $(".s3-content-main").css({
    visibility:"visible",
    animationDuration:"3s",
      animationName:"slideInUp",
      animationDelay:"0.2s"
  })
}
if(s3F-h<3583){
  $(".s3-content-foot").css({
    visibility:"visible",
    animationDuration:"3s",
      animationName:"slideInUp",
      animationDelay:"0.2s"
  })
}
var s4T=$(".s4-content-top")[0].offsetTop;
var s4M=$('.s4-content-main')[0].offsetTop;
var s4F=$(".s4-content-main")[0].offsetTop;
if(s4T-h<200){
  $(".s4-content-top").css({
    visibility:"visible",
    animationDuration:"3s",
      animationName:"slideInUp",
      animationDelay:"0.2s"
  })
  }
  if(s4M-h<200){
    $(".s4-content-main").css({
      visibility:"visible",
      animationDuration:"3s",
        animationName:"slideInUp",
        animationDelay:"0.2s"
    })
  }
if(s4F-h<200){
$(".s4-content-foot").css({
      visibility:"visible",
      animationDuration:"3s",
        animationName:"slideInUp",
        animationDelay:"0.2s"
    })
}
var s5T=$(".s5-content-top")[0].offsetTop;
var s5M=$(".s5-content-main")[0].offsetTop;
if(s5T-h<400){
  $(".s5-content-top").css({
    visibility:"visible",
    animationDuration:"3s",
      animationName:"slideInUp",
      animationDelay:"0.2s"
  })
}
if(s5M-h<400){
  $(".s5-content-main").css({
    visibility:"visible",
    animationDuration:"3s",
      animationName:"slideInUp",
      animationDelay:"0.2s"
  })
}
var s6C=$(".s6-content")[0].offsetTop;
if(s6C-h<80){
  $(".s6-content").css({
    visibility:"visible",
    animationDuration:"3s",
      animationName:"slideInUp",
      animationDelay:"0.2s"
  })
}
}
// s4
 $(".s4-content-main li").eq(15).nextAll().css({borderBottom:"none"})
 $(" .s4-content-main li img").mouseover(function(){
     $(this).css({filter:"grayscale(0%)"});})
 $(" .s4-content-main li img").mouseout(function(){
    $(this).css({filter:"grayscale(100%)"})
})
$(".s4-content-top-right .more,.s5-content-top-right .more").mouseover(function(){
  $(this).find("span").css({color:"#317242"});
  
  $(this).find("small img").addClass("animated fadeInLeft 1s infinite")
})
$(".s4-content-top-right .more,.s5-content-top-right .more").mouseout(function(){
  $(this).find("span").css({color:""});
  
  $(this).find("small img").removeClass("animated fadeInLeft 1s infinite")
})
 // s5

 var mySwiper = new Swiper('.s5-content-main-left',{
  loop : true,
  pagination: {
    el: '.swiper-pagination',
  },
})
$(".s5-content-main li").mouseover(function(){
   $(this).css({background:"#17523A"});
   $(this).find("span").css({color:"white"});
   $(this).find("small").css({color:"white"});
   $(this).find("i img").eq(0).css({opacity:"0"});
   $(this).find(".right").addClass("animated pulse 1s ").css({background:"#317242",color:"white"});
   
   
})
$(".s5-content-main li").mouseout(function(){
    $(this).css({background:""});
    $(this).find("span").css({color:""});
    $(this).find("small").css({color:""});
    $(this).find("i img").eq(0).css({opacity:""});
    $(this).find(".right").css({background:"",color:""}).removeClass("animted pulse ");
   
 })

// s6
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
   
   //广告
  $(".zhuluAd-content .button .sh").click(function(){
   $(this).closest(".zhuluAd").css({
     display:"none"
   })
  })


 
} 





