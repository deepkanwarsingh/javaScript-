
// console.log("hello")
window.addEventListener("mousemove", function(details){
    gsap.to("#center" ,{
        left : details.clientX+"px",
        // ease: power2,
       
    })
})