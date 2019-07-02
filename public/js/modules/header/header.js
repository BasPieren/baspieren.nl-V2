import * as helper from "../helper.js"

function mobileNav() {
	const body = document.querySelector("body"),
		headerLogo = document.getElementsByClassName("header__logo"),
		headerButton = document.getElementsByClassName("header__button"),
		headerButtonIcon = document.querySelector(".header__button i"),
		mobileNav = document.getElementsByClassName("mobileNav")

	const arr = [
		{ element: body, class: "overflow--hidden" },
		{ element: headerLogo[0], class: "header__logo--white" },
		{ element: headerButtonIcon, class: "header__button__icon--white" },
		{ element: mobileNav[0], class: "mobileNav--show" }
	]

	helper.classToggleClick(headerButton[0], arr)
}

function backgroundScroll() {
	const scrollPos = 0,
		header = document.getElementsByClassName("header")

	window.addEventListener("scroll", () => {
		let windowYOffset = window.scrollY

		header[0].classList.remove("animation--topSlideIn")

		if (windowYOffset > scrollPos + 5) {
			header[0].classList.add("header--hide")
		} else if (windowYOffset === scrollPos) {
			header[0].classList.remove("header--hide")
		}
	})
}

export { mobileNav, backgroundScroll }
