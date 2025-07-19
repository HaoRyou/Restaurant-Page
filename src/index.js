const nav = document.createElement('nav');
const Home = document.createElement('button');
Home.id = 'button-1';
Home.textContent = 'Home';
nav.appendChild(Home);

const menu = document.createElement('button');
menu.id = 'button-2';
menu.textContent = 'Menu';
nav.appendChild(menu);

const contact = document.createElement('button');
contact.id = 'button-3';
contact.textContent = 'Contact';
nav.appendChild(contact);



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



// First page, Create Home container
const homeDiv = document.createElement("div");
homeDiv.className = "Home";
homeDiv.id = 'home-section';

// Heading
const heading = document.createElement("h2");
heading.textContent = "Welcome to Jin's store";
homeDiv.appendChild(heading);

// Note section
const noteDiv = document.createElement("div");
noteDiv.className = "Note";

const notePara = document.createElement("p");
notePara.textContent = "The Jin's store goal is to give all customer the best and fresh food we have to our customer.";
noteDiv.appendChild(notePara);

const haoDiv = document.createElement("div");
const haoHeading = document.createElement("h4");
haoHeading.textContent = "Hao";
haoDiv.appendChild(haoHeading);
noteDiv.appendChild(haoDiv);

homeDiv.appendChild(noteDiv);

// Hours section
const hourDiv = document.createElement("div");
hourDiv.className = "Hour";

const hoursHeading = document.createElement("h3");
hoursHeading.textContent = "Hours";
hourDiv.appendChild(hoursHeading);

const ul = document.createElement("ul");
const hours = [
  "Sunday: 8am - 8PM",
  "Monday: 6am - 6PM",
  "Tuesday: 6am - 6pm",
  "Wednesday: 6am - 6pm",
  "Thursday: 6am - 6pm",
  "Friday: 6am - 6pm",
  "Saturday: Date off"
];

hours.forEach(time => {
  const li = document.createElement("li");
  li.textContent = time;
  ul.appendChild(li);
});

hourDiv.appendChild(ul);
homeDiv.appendChild(hourDiv);

// Location section
const locationDiv = document.createElement("div");
locationDiv.className = "Location";

const locationHeading = document.createElement("h3");
locationHeading.textContent = "Location";
locationDiv.appendChild(locationHeading);

const locationPara = document.createElement("p");
locationPara.textContent = "Flushing, New York";
locationDiv.appendChild(locationPara);

homeDiv.appendChild(locationDiv);

// Finally, add to the body (or any other parent)
contentDiv.appendChild(homeDiv);


// Dish Container
const dishDiv = document.createElement("div");
dishDiv.className = "Dish";
dishDiv.id = "menu-section";
dishDiv.style.display = "none";

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


    // Create main Contact container
const contactDiv3 = document.createElement("div");
contactDiv3.className = "Contact";
contactDiv3.id = 'contact-section';
contactDiv3.style.display = "none";

// Add heading
const contactHeading = document.createElement("h2");
contactHeading.textContent = "Contact";
contactDiv3.appendChild(contactHeading);

// Helper function to create each contact block
function createContact(name, role, phone, email) {
    const personDiv = document.createElement("div");

    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;
    personDiv.appendChild(nameHeading);

    const infoDiv = document.createElement("div");

    const roleP = document.createElement("p");
    roleP.textContent = role;

    const phoneP = document.createElement("p");
    phoneP.textContent = phone;

    const emailP = document.createElement("p");
    emailP.textContent = email;

    infoDiv.appendChild(roleP);
    infoDiv.appendChild(phoneP);
    infoDiv.appendChild(emailP);

    personDiv.appendChild(infoDiv);

    return personDiv;
}

// Add each contact
contactDiv3.appendChild(createContact("Jin", "Chef", "222-333-4444", "HelloWorld@World.com"));
contactDiv3.appendChild(createContact("Kevin", "Manager", "555-666-7777", "SaveTheWorld@World.com"));
contactDiv3.appendChild(createContact("Lee", "Waiter", "888-999-0000", "ByWorld@World.com"));

// Finally, append to the body (or another parent)
contentDiv3.appendChild(contactDiv);


    const sections = {
        "button-1": "home-section",
        "button-2": "contact-section",
        "button-3": "menu-section"
    };

    // Attach listeners to all buttons
    Object.keys(sections).forEach(buttonId => {
    document.getElementById(buttonId).addEventListener("click", () => {
        // Loop through all sections and show only the one clicked
        Object.values(sections).forEach(sectionId => {
        document.getElementById(sectionId).style.display = (sections[buttonId] === sectionId) ? "block" : "none";
        });
    });
    });
