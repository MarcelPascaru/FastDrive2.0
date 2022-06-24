//variable for accordion
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
//variable for back-scroll button
const topBtn = document.querySelector("#scrollBtn");
//variables for offer tab
const tabsBtn   = document.querySelectorAll(".tabs-btn");
const tabsItems = document.querySelectorAll(".tabs-item");


//accordion start
accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
    });
});
//accordion end


//scrollBtn appeare after 30 scrollPosition start
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;

    if(scrollPos < 50){
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
//scrollbar end 



//popup start 
function togglePopup(popupId) {
    document.getElementById(popupId).classList.toggle("active");
}
//popup end


//tabs start
tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('working') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('working');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('working');
                console.log("1000");
            });
    
            currentBtn.classList.add('working');
            currentTab.classList.add('working');
        }
    });
}

document.querySelector('.tabs-btn').click();
//tabs end

