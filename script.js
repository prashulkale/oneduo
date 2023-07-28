function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();
// 

var tl = gsap.timeline({

    scrollTrigger :  {
        trigger : ".page1 h1",
        scroller : ".main",
        // markers : true,
        start : " 0% 30%",
        end : "60% 0",
        scrub : 4
       
    }
})

// $('.heading').textillate({ in: { effect: 'rollIn' } });

 gsap.from(".heading" ,{
   y : 90
   

 })

tl.to(" .page1 h1",{
    x : -100,
  
},"an")

tl.to(" .page1 h2",{
    x : 100,
  
},"an")

tl.to(".page1 video" , {
    width : "90%"
},"an")


var tl2 = gsap.timeline({

    scrollTrigger :  {
        trigger : ".page1 h1",
        scroller : ".main",
        // markers : true,
        start : "top -120%",
        end : "top 130",
        scrub : 3
       
    }
})

tl2.to(".main",{
    backgroundColor : "#fff"

})
var crsr = document.querySelector(".curser");
var main = document.querySelector("body")
var hoverImgTextDiv = document.querySelector(".page4 .elem   .text-d ")
var hoverImgText = document.querySelector(".page4 .elem   .text-d h1")
var hoverImg = document.querySelectorAll(".page4 .elem   img")

//  main.addEventListener("mousemove" , (dts) =>{
//   crsr.style.left = dts.clientX + "px"
//   crsr.style.top = dts.clientY + "px"
//  })

 window.onmousemove = function(e){
  crsr.style.top = e.clientY + 'px';
  crsr.style.left = e.clientX + 'px';


} 


function page4(){
  var imgArr  = [
    "https://plus.unsplash.com/premium_photo-1690164161383-f5ff30a790bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60", 
    "https://images.unsplash.com/photo-1690441426989-0cf9f866a6f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1552391744-77952f0cd6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1576289412237-698ae5427f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
  
  ]
var yeardsc = document.querySelectorAll(".yeardsc")
var crsr = document.querySelector(".curser");

yeardsc.forEach((event ,i) =>{
  event.onmousemove = function(e){
 
  crsr.style.width = "25vw";
  crsr.style.height = "30vh";
  crsr.style.borderRadius = "0"
  crsr.style.backgroundImage = `url(${imgArr[i]})`;
  crsr.classList.add("mixblend") 
  
  



    
  
  }
  event.onmouseleave = function(e){
 
    crsr.style.width = "2vw";
    crsr.style.height = "2vw";
    // crsr.style.borderRadius = "0"
    crsr.style.borderRadius = "50%"
    // crsr.style.background = `none`;
  crsr.style.backgroundImage = `url()`;

    crsr.classList.remove("mixblend") 
    }
 
})


}
page4()
