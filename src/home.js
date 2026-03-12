const content = document.getElementById("content");
const btn = document.getElementById("home-btn");

export function homeBtn() {
    btn.addEventListener("click", renderHome);
}

function renderHome() {
    content.innerHTML = "";
    const div = document.createElement("div");
    div.textContent = "HOME PAGE";
    content.appendChild(div);
}