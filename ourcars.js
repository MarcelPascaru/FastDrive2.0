let products = {
    data:[{
        productName:"Tesla-Model-3",
        category:"Electric",
        price:"20",
        image:"/Media/ElectricCars/tesla-model-3-min.png",
    },
    {
        productName:"Tesla-Model-S",
        category:"Electric",
        price:"30",
        image:"/Media/ElectricCars/tesla-model-s-min.png",
    },
    {
        productName:"Tesla-Model-X",
        category:"Electric",
        price:"25",
        image:"/Media/ElectricCars/tesla-model-x-min.png",
    },
    {
        productName:"Toyota-Prius",
        category:"Electric",
        price:"10",
        image:"/Media/ElectricCars/toyota-prius-min.png",
    },
    {
        productName:"Porsche-Taycan",
        category:"Electric",
        price:"40",
        image:"/Media/ElectricCars/porsche-taycan-min.png",
    },
    {
        productName:"Audi-Q6",
        category:"Manual",
        price:"15",
        image:"/Media/ManualCars/audi-q6-min.png",
    },
    {
        productName:"Ford-Focus",
        category:"Manual",
        price:"10",
        image:"/Media/ManualCars/ford-focus-min.png",
    },
    {
        productName:"Range-Rover",
        category:"Manual",
        price:"15",
        image:"/Media/ManualCars/range-rover-min.png",
    },
    {
        productName:"Skoda-Octavia",
        category:"Manual",
        price:"12",
        image:"/Media/ManualCars/skoda-octavia-min.png",
    },
    {
        productName:"Volkswagen-Tiguan",
        category:"Manual",
        price:"20",
        image:"/Media/ManualCars/volkswagen-tiguan-min.png",
    },
    {
        productName:"Aston-Martin",
        category:"Sport",
        price:"45",
        image:"/Media/SportCars/aston-martin-min.png",
    },
    {
        productName:"Audi-Rs7",
        category:"Sport",
        price:"40",
        image:"/Media/SportCars/audi-rs7-min.png",
    },
    {
        productName:"Ferrari",
        category:"Sport",
        price:"80",
        image:"/Media/SportCars/ferrari-min.png",
    },
    {
        productName:"Mercedes-AMG",
        category:"Sport",
        price:"50",
        image:"/Media/SportCars/mercedes-amg-min.png",
    },
    {
        productName:"Nissan-GTR",
        category:"Sport",
        price:"65",
        image:"/Media/SportCars/nissan-gtr-min.png",
    },

],

};

for(let i of products.data){
    //Create Card
    let  card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //image tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    //button
    let rentButton = document.createElement("button");
    rentButton.innerText = "Rent" + i.rentButton;
    container.appendChild(rentButton);


    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value){
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach( button => {
        //check if value equals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on "all" button click
        if(value == "all"){
            element.classList.remove("hide");
        }else{
            //check if elements contains category class
            if(element.classList.contains(value)){
                //display element based on category
                element.classList.remove("hide");
            }else{
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener(
    "click", () => {
        //initializations
        let searchInput = document.getElementById("search-input").value;
        let elements = document.querySelectorAll(".product-name");
        let cards = document.querySelectorAll(".card");

        //loop through all elements
        elements.forEach((element,index) => {
            //check if text includes search value
            if(element.innerText.includes(searchInput.toUpperCase())){
                //display matching card
                cards[index].classList.remove("hide");
            }else{
                //hide others
                cards[index].classList.add("hide");
            }
        });

    }
);

//Initially display all products
window.onload = () => {
    filterProduct('all');
}