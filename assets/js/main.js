
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true }
});



locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});



// Scroll rotation

var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      scroller: ".smooth-scroll",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=300%"
    }
  });

tl.to(".hero .flag", {
    scale: 8.4,  
    y: '325%',
    ease: "power2"
})



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// Text loop

gsap.to('.text-loop', { 
  xPercent: -50, 
  ease: 'none', 
  duration: 75, 
  repeat: -1 
})

// Infinite carousel

/*
.cube {
  transform: scaleX(1.5) scaleY(2) scaleZ(1) rotateX(49deg) rotateY(-12deg) rotateZ(35deg) translateX(0px) translateY(0px) translateZ(0px) skewX(0deg) skewY(0deg);
}
.cube-wrap {
  perspective: 1004px;
  perspective-origin: 220% 50%;
}

*/