const content = document.getElementById("content");
const btn = document.getElementById("menu-btn");

import background from "./images/shawn-TQQE32Gz4jw-unsplash.jpg";

export function menuBtn() {
    btn.addEventListener("click", renderMenu);
}

function renderMenu() {
    // Add background
    const header = document.getElementById("header");
    header.style.backgroundImage = `url(${background})`;

    // Clear page before rendering new html
    content.innerHTML = "";
    
    // Burgers array
    const burgers = [
        { name: "No Bull Burger", price: "£9.99", desc: "1/4 pound patty, bacon, pickles, mayo & lettuce" },
        { name: "Spicy Nashville",  price: "£8.99", desc: "Hot sauce dipped fillet, pickles, mayo & lettuce" },
        { name: "Buffalo Chick'n",  price: "£8.99", desc: "Buffalo glazed fillet, pickles, mayo & coleslaw" },
        { name: "Grilled Chick'n",  price: "£8.99", desc: "Grilled chick'n, pickles, BBQ sauce & coleslaw" },
        { name: "BBQ Bacon",  price: "£9.99", desc: "1/4 pound patty, cheese, pickles, bacon, BBQ sauce & mayo" },
        { name: "No Bull Feast",  price: "£8.99", desc: "1/4 pound patty, cheese, pickles, lettuce, tomato, onion & mayo" },
        { name: "No Bull Deluxe",  price: "£9.99", desc: "1/4 pound patty, cheese, pickles, bacon, lettuce & burger sauce" },
        { name: "No Bull Cheese",  price: "£7.99", desc: "1/4 pound patty, cheese, onions, pickles, ketchup, & mustard" },
    ];

    // Shakes array
    const shakes = [
        { name: "Strawberry"},
        { name: "Chocolate"},
        { name: "Banana"},
        { name: "Peanut Butter"},
    ];

    const shakesPrices = [
        { size: "Regular", price: "£3.49" },
        { size: "Large", price: "£4.99" },
    ];

    // Helper function to create element with optional className and textContent
    const createElement = (tag, className = null, textContent = null) => {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (textContent) el.textContent = textContent;

        return el;
    };

    // Create main container
    const menuPageFullContainer = createElement("div", "menu-page-full-container");

    // Menu header section
    const menuPageContainer = createElement("div", "menu-page-container");
    const menuPageHeader = createElement("div", "menu-page-header");
    menuPageHeader.append(createElement("h1", null, "Menu"));
    
    const menuPageContent = createElement("div", "menu-page-content");
    menuPageContent.append(createElement("p", null, "Our menu is 100% vegan"));
    menuPageContainer.append(menuPageHeader, menuPageContent);
    menuPageFullContainer.append(menuPageContainer);

    // Menu body section
    const menuBody = createElement("div", "menu-page-container");
    menuPageFullContainer.append(menuBody);

    // Burgers section
    const burgersContainer = createElement("div", "menu-body-container");
    const burgersHeaderContainer = createElement("div", "menu-page-container");
    const burgersHeader = createElement("div", "menu-page-header");
    burgersHeader.append(createElement("h1", null, "Burgers"));

    const burgersContent = createElement("div", "menu-page-content");
    burgersContent.append(createElement("p", null, "All burgers are served with a side of fries"));
    burgersHeaderContainer.append(burgersHeader, burgersContent);
    burgersContainer.append(burgersHeaderContainer);

    const burgersMenuContainer = createElement("div", "menu-item-container");
    burgersContainer.append(burgersMenuContainer);

    burgers.forEach(({ name, price, desc }) => {
        const burgerItemContainer = createElement("div", "menu-item");

        const menuItemHeader = createElement("div", "menu-page-header");
        menuItemHeader.appendChild(createElement("h1", null, name));
        menuItemHeader.appendChild(createElement("h1", null, price));

        const menuItemDesc = createElement("div", "menu-page-content");
        menuItemDesc.append(createElement("p", null, desc));

        burgerItemContainer.append(menuItemHeader, menuItemDesc);
        burgersMenuContainer.append(burgerItemContainer);
    });

    menuBody.append(burgersContainer);

    // Shakes section
    const shakesContainer = createElement("div", "menu-body-container");
    const shakesHeaderContainer = createElement("div", "menu-page-container");
    const shakesHeader = createElement("div", "menu-page-header");
    shakesHeader.append(createElement("h1", null, "Shakes"));

    const shakesPricesContainer = createElement("div", "shakes-prices-container");


    shakesPrices.forEach(({ size, price }) => {
        const shakesPrices = createElement("div", "shakes-prices");
        shakesPrices.appendChild(createElement("h2", null, size));
        shakesPrices.appendChild(createElement("h1", null, price));

        shakesPricesContainer.append(shakesPrices);
    });

    shakesHeader.append(shakesPricesContainer);
    
    const shakesContent = createElement("div", "menu-page-content");
    shakesContent.append(createElement("p", null, "All shakes are made from an option of soya, oat, coconut or almond milk"));
    shakesHeaderContainer.append(shakesHeader, shakesContent);
    shakesContainer.append(shakesHeaderContainer);

    const shakesMenuContainer = createElement("div", "menu-item-container");
    shakesContainer.append(shakesMenuContainer);

    shakes.forEach(({ name }) => {
        const shakesItemContainer = createElement("div", "menu-item");

        const menuItemHeader = createElement("div", "menu-page-header");
        menuItemHeader.append(createElement("h1", null, name));
        
        shakesItemContainer.append(menuItemHeader);
        shakesMenuContainer.append(shakesItemContainer);
    });

    menuBody.append(shakesContainer);

    content.append(menuPageFullContainer);
}