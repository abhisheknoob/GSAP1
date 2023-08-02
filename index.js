const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});

// Each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", () => {
    ScrollTrigger.update();
});

// Tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// Each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => {
    locoScroll.update();
});

// After everything is set up, refresh ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// GSAP ScrollTrigger animation





let crsr=document.querySelector('.cursor')
let mainn=document.querySelector('.main')
let vid =document.querySelector('.videoo')
mainn.addEventListener('mousemove',(dts)=>{
   crsr.style.left=dts.x+'px'
   crsr.style.top=dts.y+'px'
})
// vid.addEventListener('mouseenter',()=>{
//     crsr.innerHTML='sound on'
// })
// vid.addEventListener("click", change, false);
// vid.addEventListener("mouseout", normal, false);

gsap.to('.nav img',{
    y:20,
    // opacity:0,
    duration:1,
    delay:0.6,
    
})

 let tl=gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        markers: true,
        start: "top 25%",
        end: "top 0%",
        scrub: 2,
        
       
    }
})
tl.to('.page1 h1', {
    x: -100,
},'abhi');
tl.to('.page1 h3',{
    x:100
},'abhi');
tl.to('.page1 video',{
    width:'90%'
},'abhi')


let tl2=gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        markers: true,
        start: "top -110%",
        end: "top -115%",
        scrub: 2,
        
       
    }
})
tl2.to('.main',{
    backgroundColor:'white',
})
// gsap.to('.page3 h2',{
//     x:-40,
//     duration:1,
//     delay:2,
//     scrollTrigger:{
//         trigger:'page3 h2',
//         scroller:'main',
//         markers:true,
//         start:"top -210%",
//         end:'top -215%',
//         scrub:2
//     }

// })
let tl3=gsap.timeline({
    scrollTrigger: {
        trigger: ".page3 h2",
        scroller: ".main",
        markers: true,
        start: "top center",
        end: "bottom center",
        // start:"top -210%",
        //       end:'top -215%',
        scrub: 3,
        
       
    }
})
// gsap.to('.page3 h2', {
//     x:-40,
//     scale:1,
//     scrollTrigger: {
//         trigger: ".page3 h2",
//         scroller: ".main",
//         markers: true,
//         start: "top center",
//         end: "bottom center",
//         scrub: 2,
        
       
//     }
//   });
tl3.to('.page3 h2',{
  y:-40,
  duration:2,
  delay:0.5,

})
tl3.to('.page3_sec1 img',{
    x:100,
    delay:0.5,
    duration:3,
})
tl3.to('.page3_sec1 video',{
    x:-100,
    delay:0.5,
    duration:3,
})
tl3.to('.main',{
    backgroundColor:'black'
})
