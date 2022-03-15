var tl = gsap.timeline()

tl
    // .from("#left", {
    //     width: 0,
    //     duration:2,
    //     ease:Power4.easeInOut,
    // })
    // .from("#right", {
    //     width: 0,
    //     duration: 1,
    //     ease:Expo.easeInOut,
    // }, "-=1")
    .from(".single-item", {
        opacity: 0,
        x: 15,
        duration: 1,
    })
    .from("#line", {
        width: 0,
        duration:1,
    },"-=1")
    .from("#nav", {
        
        duration:2,
        y:10,
        stagger:0.3,
        opacity:0,
    },"-=1")
    .from("#left img", {
        x:-650,
        ease: Expo.easeInOut,
        duration: 2,
    },"-=2")
    .from("#right img", {
        x: -1450,
        ease: Expo.easeInOut,
        duration: 2,
        
    }, "-=2")
    .from("#naam", {
        opacity:0
    })



// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.left = e.pagey + 'px';
// })    

var circle =document.querySelector(".cursor")
const onMouseMove = function (dets) {
  circle.style.left = dets.pageX + 'px';
  circle.style.top = dets.pageY + 'px';
  
  
  
}
document.addEventListener('mousemove', onMouseMove);


