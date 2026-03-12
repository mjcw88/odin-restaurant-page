const content = document.getElementById("content");
const btn = document.getElementById("menu-btn");

export function menuBtn() {
    btn.addEventListener("click", renderMenu);
}

function renderMenu() {
    content.innerHTML = "";
    const div = document.createElement("div");
    div.textContent = "MENU PAGE";
    content.appendChild(div);
}