// // gsap.from("h1", {
// //     opacity:0,
// //     color:"red",
// //     y:20,
// //     duration:2,
// //     delay:1,
// //     stagger:0.3

// // })

// gsap.to("#box1", {
//     x:1200,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })

// gsap.to("#box2", {
//     x:1200,
//     backgroundColor: "pink",
//     duration:1.5,
//     delay:2.5

// })

// gsap.to("#box3", {
//     x:1200,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4
// })

var tl = gsap.timeline()

tl.to("#box1", {
    x:1200,
    rotate: 360,
    duration:1.5,
    delay:1
})
tl.to("#box2", {
    x:1200,
    rotate:360,
    duration:1.5,
    
})
tl.to("#box3", {
    x:1200,
    rotate:360,
    duration:1.5,

})

var t2 = gsap.timeline()

t2.from("h2", {
    y:-20,
    opacity: 0,
    duration:1,
    delay:0.5
})
t2.from("h4", {
    y:-20,
    opacity: 0,
    duration:1,
    // delay:0.5
    stagger: 0.3
})

t2.from("h1", {
    y:20, 
    opacity:0,
    duration: 0.5,
    scale: 0.2
})

