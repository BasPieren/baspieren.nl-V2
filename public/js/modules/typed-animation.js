function home() {
	const homeHeading = document.getElementsByClassName("section__heading")

	const options = {
		strings: [`Hello I'm <span class="copy--red">Bas</span> and I'm a ...`],
		typeSpeed: 50,
		startDelay: 500,
		showCursor: false
	}

	const typed = new Typed(homeHeading[0], options)
}

export { home }
