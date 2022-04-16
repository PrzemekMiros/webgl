


gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: false }
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
      start: "+=10% top",
      end: "+=300%"
    }
  });

tl.from(".hero .flag", {scale: 0.4, y: "-60vh", rotationY: 55, rotation: 50, ease: "power2"})



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// Text loop

gsap.to('.text-loop', { xPercent: -50, ease: 'none', duration: 31, repeat: -1 })

gsap.from(".hero",{
  autoAlpha: 1,
  x: "100%",
  y: "-100%",
  duration: 3
})



