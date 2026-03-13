const content = document.getElementById("content");
const btn = document.getElementById("home-btn");

export function homeBtn() {
    btn.addEventListener("click", renderHome);
}

function renderHome() {
    function createSection(className, headerText, ...children) {
        const section = document.createElement("div");
        section.className = className;

        const headerDiv = document.createElement("div");
        const header = document.createElement("h2");
        header.textContent = headerText;
        headerDiv.appendChild(header);
        section.appendChild(headerDiv);

        children.forEach(({ tag = "div", text }) => {
            const el = document.createElement(tag);
            el.textContent = text;
            section.appendChild(el);
        });

        return section;
    }

    content.innerHTML = "";

    const homeContainer = document.createElement("div");
    homeContainer.className = "home-container";

    const about = createSection("home-about-container", "About",
        { tag: "p", text: "Serving the best vegan burgers since 2026, here at No Bull Burgers we believe that great food shouldn't come at the expense of an animal's life." },
        { tag: "br", text: "" },
        { tag: "p", text: "Living life with more compassion one burger at a time..." }
    );

    const openingHours = createSection("home-opening-hours-containers", "Dine in & delivery",
        { text: "11:00 - 23:00" },
        { text: "Daily" }
    );

    const location = createSection("home-location-container", "Location",
        { text: "123 Road Lane, City, AB1 2CD" }
    );

    homeContainer.append(about, openingHours, location)
    content.append(homeContainer);
}
