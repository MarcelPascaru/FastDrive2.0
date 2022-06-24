let card = document.getElementById("form");

function openRegister(){
    card.style.transform = "rotateY(-180deg)";
    card.style.transition = "transform 500ms ease-in-out"
}

function openLogin(){
    card.style.transform = "rotateY(0deg)";
    card.style.transition = "transform 500ms ease-in-out"
}


