(() => {
    // Handle Loading
    const loadingContainer = document.querySelector(".loading-container");

    document.onreadystatechange = () => {
        if (document.readyState === "complete") {
            loadingContainer.classList.add("hide");
            document.body.classList.remove("noscroll");
            setTimeout(() => {
                loadingContainer.style.display = "none";
            }, 600);
        }
    };

    // Handle Theme
    const themeSwitch = document.querySelector(".checkbox");
    const displayModeText = document.querySelector(".display-mode-text");
    const htmlDocument = document.documentElement;

    const changeTheme = () => {
        if (themeSwitch.checked) {
            displayModeText.textContent = "Dark Mode";
            htmlDocument.classList.add("dark");
            htmlDocument.classList.remove("light");
        } else {
            displayModeText.textContent = "Light Mode";
            htmlDocument.classList.add("light");
            htmlDocument.classList.remove("dark");
        }
    };

    themeSwitch.addEventListener("change", changeTheme);

    // Handle Mobile Nav
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");

    const toggleMobileNav = () => {
        hamburger.classList.toggle("open");
        navList.classList.toggle("open");
    };

    hamburger.addEventListener("click", toggleMobileNav);
    navList.addEventListener("click", toggleMobileNav);
})();
