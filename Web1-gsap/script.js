const timeline = gsap.timeline();
timeline.from(".logo img , nav h2 , .account h3 , .account button",{
    y:-100,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.2
})
timeline.from(".content h1",{
    y: 100,
    opacity:0,
    stagger:0.5,
})
timeline.from(".left-img img , .right-img img , .centre-left-img img ,.centre-right-img img",{
    opacity:0,
    stagger:0.2,
    scale:0
})
timeline.from(".bottom-text,.media-icon,.scroll-btn",{
    opacity:0,
    stagger:0.3,
})
timeline.from(".scroll-btn",{
    y:-20,
    yoyo:true,
    repeat:-1,
    stagger:0.3,
})