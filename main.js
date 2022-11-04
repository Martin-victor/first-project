const accordionitemheader = document.querySelectorAll(".accordion-item-header")
accordionitemheader.forEach(accordionitemheader =>{
    accordionitemheader.addEventListener("click",Event=>{
    const currentlyactiveaccordionitemheader = document.querySelector(".accordion-item-header.active");
    if(currentlyactiveaccordionitemheader&&currentlyactiveaccordionitemheader!==accordionitemheader){
        currentlyactiveaccordionitemheader.classList.toggle("active")
        
    }    
     accordionitemheader.classList.toggle("active");
    });
});