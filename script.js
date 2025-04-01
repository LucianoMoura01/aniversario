const surpriseButton = document.getElementById("surpriseButton");
const surpriseDiv = document.getElementById("surprise");

surpriseButton.addEventListener("click", () => {
    surpriseDiv.classList.toggle("hidden");
    surpriseButton.textContent = surpriseDiv.classList.contains("hidden")
        ? "Clique para uma surpresa 🎁"
        : "Ocultar surpresa 🎁";
});
