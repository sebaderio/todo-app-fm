document
    .getElementById("theme-toggle-checkbox")
    .addEventListener("click", (e) => {
        const checked = e.target.checked;
        document.body.setAttribute("theme", checked ? "dark" : "light");
    });
