const content = document.getElementById("content");
const btn = document.getElementById("about-btn");

export function aboutBtn() {
    btn.addEventListener("click", renderAbout);
}

function renderAbout() {
    content.innerHTML = "";
    const div = document.createElement("div");
    div.textContent = "ABOUT PAGE";
    content.appendChild(div);
}