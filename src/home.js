const content = document.getElementById("content");
const btn = document.getElementById("home-btn");

import background from "./images/spencer-davis-R_J6KjC68E4-unsplash.jpg";

export function homeBtn() {
    btn.addEventListener("click", renderHome);
}

function renderHome() {
    // Add background
    const header = document.getElementById("header");
    header.style.backgroundImage = `url(${background})`;

    // Clear page before rendering new html
    content.innerHTML = "";

    // Create main container
    const homePageFullContainer = document.createElement("div");
    homePageFullContainer.className = "home-page-full-container";

    // Section data
    const sections = [
    {
        header: "About",
        content: [
        "Serving the best vegan burgers since 2026, here at No Bull Burgers we believe that great food shouldn't come at the expense of an animal's life.",
        "Living life with more compassion one burger at a time…"
        ],
        addBreak: true
    },
    {
        header: "Dine In & Delivery",
        content: ["11:00 - 23:00", "Daily"]
    },
    {
        header: "Location",
        content: ["123 Road Lane, City, AB1 2CD"]
    }
    ];

    // Build each section
    sections.forEach(({ header, content, addBreak }) => {
        const container = document.createElement("div");
        container.className = "home-page-container";

        const headerDiv = document.createElement("div");
        headerDiv.className = "home-page-header";
        const h1 = document.createElement("h1");
        h1.textContent = header;
        headerDiv.appendChild(h1);

        const contentDiv = document.createElement("div");
        contentDiv.className = "home-page-content";

        content.forEach((text, index) => {
            const p = document.createElement("p");
            p.textContent = text;
            contentDiv.appendChild(p);

            if (addBreak && index === 0) {
            contentDiv.appendChild(document.createElement("br"));
            }
        });
        
        container.append(headerDiv, contentDiv);
        homePageFullContainer.append(container);
    });

    content.append(homePageFullContainer);
}