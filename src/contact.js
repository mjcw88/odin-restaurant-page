const content = document.getElementById("content");
const btn = document.getElementById("contact-btn");

export function contactBtn() {
    btn.addEventListener("click", renderContact);
}

function renderContact() {
    const contacts = [
        { name: "General Enquiries", email: "hello@nobullburgers.com" },
        { name: "Press & PR",  email: "press@nobullburgers.com" },
        { name: "Employment",  email: "jobs@nobullburgers.com" },
    ];

    function createItem({ name, email }) {
        const item = document.createElement("div");

        const itemContainer = document.createElement("div");
        itemContainer.className = "menu-item";

        const nameEl = document.createElement("h2");
        nameEl.textContent = name;

        const emailEl = document.createElement("div");
        emailEl.textContent = email;

        itemContainer.append(nameEl);
        item.append(itemContainer, emailEl);
        return item;
    }

    content.innerHTML = "";

    const containerHeader = document.createElement("div");
    containerHeader.className = "contact-container-header";

    const header = document.createElement("h1");
    header.textContent = "Contact Us";

    containerHeader.append(header);

    const contact = document.createElement("div");
    contact.className = "contact-container";
    contact.append(...contacts.map(createItem));

    content.append(containerHeader, contact);
}