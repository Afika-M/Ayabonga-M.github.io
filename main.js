const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    // Swap icon
    if (body.classList.contains("light-mode")) {
        toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
});
