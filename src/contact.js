const content = document.getElementById("content");
const btn = document.getElementById("contact-btn");

import background from "./images/dayanara-peenee-HuIJUp6gTDI-unsplash.jpg";

export function contactBtn() {
    btn.addEventListener("click", renderContact);
}

function renderContact() {
    // Add background
    const header = document.getElementById("header");
    header.style.backgroundImage = `url(${background})`;

    // Clear page before rendering new html
    content.innerHTML = "";

    // Contact data
    const contacts = [
        { header: "General Enquiries", email: "hello@nobullburgers.com" },
        { header: "Press & PR", email: "press@nobullburgers.com" },
        { header: "Employment", email: "jobs@nobullburgers.com"  },
    ];

    // Helper function to create element with optional className and textContent
    const createElement = (tag, className = null, textContent = null) => {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (textContent) el.textContent = textContent;
        return el;
    };

    // Create main container
    const contactPageFullContainer = createElement("div", "contact-page-full-container");

    // Page header
    const contactPageContainerHeader = createElement("div", "contact-page-container");
    const contactsHeader = createElement("div", "contact-page-header");
    contactsHeader.append(createElement("h1", null, "Contact Us"));
    contactPageContainerHeader.append(contactsHeader);

    contactPageFullContainer.append(contactPageContainerHeader);

    const contactPageContainerBody = createElement("div", "contact-page-container");
    contactPageFullContainer.append(contactPageContainerBody);

    // Contact section
    contacts.forEach(({ header, email }) => {
        const contactPageContainer = createElement("div", "contact-container");

        const contactPageHeader = createElement("div", "contact-page-header");
        contactPageHeader.appendChild(createElement("h1", null, header));

        const contactPageContent = createElement("div", "contact-page-content");
        contactPageContent.appendChild(createElement("p", null, email));

        contactPageContainer.append(contactPageHeader, contactPageContent);
        contactPageContainerBody.append(contactPageContainer);
    });

    content.append(contactPageFullContainer);
}