
let defaultConfig = {
	arrows: true,
	dots: false,
	lazyLoad: false
};


class Slide {
	constructor() {
		this.template = "";
	}

	open() {
		console.log(`Opening ${ this.index !== undefined ? this.index : '' }`);
	}

	close() {
		console.log(`Closing ${ this.index !== undefined ? this.index : '' }`);
	}
}


class SlideManager {
	constructor(slides, config) {
		this.slides = slides || [];
		this.config = Object.assign({}, defaultConfig, config);

		this.slides.forEach((slide, i) => { slide.index = i; });
		this.currentIndex = 0;
	}

	addSlide(slide) {
		this.slides.push(slide);
		slide.index = this.slides.length - 1;
	}

	getNextSlide() {
		let nextSlide = this.slides[this.currentIndex + 1];
		if (!nextSlide) {
			return false;
		}
		return nextSlide;
	}

	getPreviousSlide() {
		let prevSlide = this.slides[this.currentIndex - 1];
		if (!prevSlide) {
			return false;
		}
		return prevSlide;
	}

	next() {
		let nextSlide = this.getNextSlide();
		if (!nextSlide) {
			return;
		}
		this.currentIndex = nextSlide.index;
		return nextSlide;
	}

	previous() {
		let prevSlide = this.getPreviousSlide();
		if (!prevSlide) {
			return;
		}
		this.currentIndex = prevSlide.index;
		return prevSlide;
	}

	openNext() {
		if (this.getNextSlide()) {
			this.slides[this.currentIndex].close();
			this.next().open();
		}
	}

	openPrevious() {
		if (this.getPreviousSlide()) {
			this.slides[this.currentIndex].close();
			this.previous().open();
		}
	}

}


module.exports = {
	Slide: Slide,
	SlideManager: SlideManager
}