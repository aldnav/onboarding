let {Slide, SlideManager} = require('./slidemanager.js');


var slides = [];
for (var i = 0; i < 5; i++) {
	slides.push(new Slide());
}

var mgr = new SlideManager(slides);

mgr.openNext();
mgr.openNext();
mgr.openPrevious();
mgr.openPrevious();