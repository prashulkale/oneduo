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

 main.addEventListener("mousemove" , (dts) =>{
  crsr.style.left = dts.x + "px"
  crsr.style.top = dts.y + "px"
 })