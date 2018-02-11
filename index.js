let {Slide, SlideManager} = require('./slidemanager.js');


var slides = [];
for (var i = 0; i < 5; i++) {
	slides.push(new Slide());
}

var mgr = new SlideManager(slides, {lazyLoad: true});

mgr.open();
mgr.openNext();
mgr.openNext();
mgr.openPrevious();
mgr.openPrevious();
mgr.close();

var mgr2 = new SlideManager();
mgr2.open();
mgr2.close();