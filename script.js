
const filter = document.getElementById("newsFilter");
const sections = document.querySelectorAll("[data-category]");

filter.addEventListener("change", () => {
    const value = filter.value;

    sections.forEach(section => {
        if (value === "all" || section.dataset.category === value) {
            section.style.display = "flex";   // or "block" if not flex
        } else {
            section.style.display = "none";
        }
    });
});
