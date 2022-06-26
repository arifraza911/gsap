
var tl=gsap.timeline();

tl.from("#part1",
{
    opacity:0,
    y:-50
})
``


tl.from("#nav-part2>h4",
{
    opacity:0,
    y:10,   
    stagger:0.1
})

tl.from("#part3",
{
    opacity:0,
    y:-10,

})

tl.from(".heading",
{
    opacity:0,
  y:20,
    

}, )



tl.from(".sec-child2",
{
    opacity:0,
    scale:1.2
},)


gsap.from(".section2",
{
    scrollTrigger:{
        trigger:".section2",
        // markers:true,
       scroller:"body",
      
    },
    opacity:0,
    // delay:2,
    duration:1,
    y:"50"
})