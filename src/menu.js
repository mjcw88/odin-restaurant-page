const content = document.getElementById("content");
const btn = document.getElementById("menu-btn");

export function menuBtn() {
    btn.addEventListener("click", renderMenu);
}

function renderMenu() {
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

    const shakes = [
        { name: "Strawberry"},
        { name: "Chocolate"},
        { name: "Banana"},
        { name: "Peanut Butter"},
        { name: "Coffee"}
    ];

    function createBurgerItem({ name, price, desc }) {
        const item = document.createElement("div");

        const itemContainer = document.createElement("div");
        itemContainer.className = "menu-item";

        const nameEl = document.createElement("h2");
        nameEl.textContent = name;

        const priceEl = document.createElement("h2");
        priceEl.textContent = price;

        const descEl = document.createElement("div");
        descEl.textContent = desc;

        itemContainer.append(nameEl, priceEl);
        item.append(itemContainer, descEl);
        return item;
    }

    function createShakesItem({ name }) {
        const item = document.createElement("div");

        const itemContainer = document.createElement("div");
        itemContainer.className = "menu-item";

        const nameEl = document.createElement("h2");
        nameEl.textContent = name;

        itemContainer.append(nameEl);
        item.append(itemContainer);
        return item;
    }

    content.innerHTML = "";

    // Menu Header
    const menuHeader = document.createElement("div");
    menuHeader.className = "menu-container-header";

    const header = document.createElement("h1");
    header.textContent = "Menu";

    const menuFooter = document.createElement("p");
    menuFooter.textContent = "Our menu is 100% vegan";

    menuHeader.append(header, menuFooter)

    // Burgers
    const burgerMenuHeader = document.createElement("div");
    burgerMenuHeader.className = "menu-container-header";

    const burgerHeader = document.createElement("h1");
    burgerHeader.textContent = "Burgers";

    const burgerFooter = document.createElement("p");
    burgerFooter.textContent = "All burgers are served with a side of fries";

    burgerMenuHeader.append(burgerHeader, burgerFooter);

    const burgerMenu = document.createElement("div");
    burgerMenu.className = "menu-container";
    burgerMenu.append(...burgers.map(createBurgerItem));

    // Shakes
    const shakesMenuHeader = document.createElement("div");
    shakesMenuHeader.className = "menu-container-header";

    const shakesHeader = document.createElement("h1");
    shakesHeader.textContent = "Shakes";

    const shakespriceContainer = document.createElement("div");
    shakespriceContainer.className = "shakes-prices-container";

    const regCon = document.createElement("div");
    const reg = document.createElement("div");
    reg.textContent = "Regular";

    const regPrice = document.createElement("h2");
    regPrice.textContent = "£3.49";

    const lrgCon = document.createElement("div");
    const lrg = document.createElement("div");
    lrg.textContent = "Large";

    const lrgPrice = document.createElement("h2");
    lrgPrice.textContent = "£4.99";

    const shakesFooter = document.createElement("p");
    shakesFooter.textContent = "All shakes are made from an option of soya, oat, coconut or almond milk";

    regCon.append(reg, regPrice);
    lrgCon.append(lrg, lrgPrice);
    shakespriceContainer.append(regCon, lrgCon);
    shakesMenuHeader.append(shakesHeader, shakespriceContainer, shakesFooter);

    const shakesMenu = document.createElement("div");
    shakesMenu.className = "menu-container";
    shakesMenu.append(...shakes.map(createShakesItem))

    content.append(menuHeader, burgerMenuHeader, burgerMenu, shakesMenuHeader, shakesMenu);
}