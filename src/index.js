const contentDiv = document.getElementById("content");
contentDiv.style.backgroundColor = "antiquewhite";

// Add styles
const style = document.createElement("style");
style.textContent = `
    nav{
        display: flex;
        justify-content:center;
        gap: 15px;
    }
    nav button{
        width: 200px;
        font-size: larger;
        background-color: antiquewhite;
    }
    .Dish{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    button:hover{
        background-color: lightcoral;
    }
    .title{
        display: flex;
        justify-content: center;
    }
    img{
        height:250px;
        width: 350px;
    }
`;
document.head.appendChild(style);

// Title
const titleDiv = document.createElement("div");
titleDiv.className = "title";
const h1 = document.createElement("h1");
h1.textContent = "The Best Food In US";
titleDiv.appendChild(h1);
contentDiv.appendChild(titleDiv);

// Dish Container
const dishDiv = document.createElement("div");
dishDiv.className = "Dish";

// Menu Title
const menuTitle = document.createElement("h2");
menuTitle.textContent = "Menu";
dishDiv.appendChild(menuTitle);

// Helper to create a menu section
function createSection(title, items) {
    const sectionDiv = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = title;
    sectionDiv.appendChild(h3);

    items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.alt;
        const p = document.createElement("p");
        p.textContent = `Price: $${item.price}`;
        itemDiv.appendChild(img);
        itemDiv.appendChild(p);
        sectionDiv.appendChild(itemDiv);
    });

    return sectionDiv;
}

// Add Beverages
dishDiv.appendChild(createSection("Beverages", [
    { src: "img/cocacola.png", alt: "COCA-COLA", price: "1.99" },
    { src: "img/tea.jpg", alt: "Tea", price: "2.99" },
]));

// Add Sides
dishDiv.appendChild(createSection("Sides", [
    { src: "img/spare-ribs-575310_1280.png", alt: "Spare Rib", price: "15.99" },
    { src: "img/sushi-154590_1280.png", alt: "Fish Dish", price: "18.99" },
]));

// Add Main Dishes
dishDiv.appendChild(createSection("Main Dishes", [
    { src: "img/food.jpg", alt: "French Fries", price: "9.99" },
    { src: "img/cupcakes-1133146_1280.jpg", alt: "Cup Cakes", price: "6.99" },
    { src: "img/fig-3640553_1280.jpg", alt: "Cheese Bread", price: "19.99" },
]));

contentDiv.appendChild(dishDiv);





