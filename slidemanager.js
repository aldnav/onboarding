
let defaultConfig = {
	arrows: true,
	dots: false,
	lazyLoad: false
};


class Slide {
	constructor() {
		this.template = "";
		this.hasRendered = false;
	}

	open() {
		console.log(`Opening ${ this.index !== undefined ? this.index : '' }`);
		if (!this.hasRendered) {
			this.render();
		}
		this.execute();
	}

	close() {
		console.log(`Closing ${ this.index !== undefined ? this.index : '' }`);
	}

	render() {
		console.log('rendering...');
		this.rendered = this.template;
		this.hasRendered = true;
		return this.rendered;
	}

	execute() {
		console.log('executing...');
	}
}


class SlideManager {
	constructor(slides, config) {
		this.slides = slides || [];
		this.config = Object.assign({}, defaultConfig, config);

		this.slides.forEach((slide, i) => {
			slide.index = i;
			if (!this.config.lazyLoad) {
				slide.render();
			}
		});
		this.currentIndex = 0;
	}

	addSlide(slide) {
		this.slides.push(slide);
		slide.index = this.slides.length - 1;
		if (!this.config.lazyLoad) {
			slide.render();
		}
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