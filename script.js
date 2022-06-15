const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
const topBtn = document.querySelector("#scrollBtn");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
    });
});



//scrollBtn appeare after 30 scrollPosition
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;

    if(scrollPos < 30){
        topBtn.classList.add("remove");
    }else{
        topBtn.classList.remove("remove");
    }
})

//on click you go on the top of page 
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function togglePopup(popupId) {
    document.getElementById(popupId).classList.toggle("active");
}