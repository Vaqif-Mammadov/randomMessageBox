const container = document.getElementById("container");
const Btn = document.getElementById("Btn");

Btn.addEventListener("click", () => {
    const nomre = Math.floor(Math.random() * 3) + 1;
    const div = document.createElement("div");
    div.classList.add("message", `message-${nomre}`);
    div.textContent = `Mesaj ${nomre}`;
    container.appendChild(div);

    setTimeout(() => {
        container.removeChild(div);
    }, 3000);
});
