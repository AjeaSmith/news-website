const navigation = document.querySelector("#menu");
const navToggle = document.querySelector(".mobile-nav-toggle");
const overlay = document.querySelector(".overlay");

navToggle.addEventListener("click", () => {
	const visibility = navigation.getAttribute("data-visible");

	if (visibility === "false") {
	    overlay.style.display = "block";
		navigation.setAttribute("data-visible", true);
		navToggle.setAttribute("aria-expanded", true);
	} else if (visibility === "true") {
		overlay.style.display = "none";
		navigation.setAttribute("data-visible", false);
		navToggle.setAttribute("aria-expanded", false);
	}
});