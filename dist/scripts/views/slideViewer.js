define(['backbone', 'ractive', 'collections/slide.collection', 'collections/slideCategory', 'ractiveBackboneAdapter', 'rv!/templates/slideViewer.html'], 
	function (Backbone, Ractive, SlideCollection, slideCategory, backboneAdaptor, slideViewerTmpl) {
	'use strict';

	var Slider = Ractive.extend({

		template: slideViewerTmpl,
		sliderRouter: new Backbone.Router(),
		data: function () {
			return {
				slideItems: new SlideCollection(),
				slideTypes: slideCategory
			}
		},
		init: function() {
			this.set('currentSlide', this.currentSlide || 1);
			this.on('nextClicked', this.goToNextSlide);
			this.on('prevClicked', this.goToPrevSlide);
			this.observe('deckName', this.setCurrentDeck);
		},
		setCurrentDeck: function(currentDeck) {
			var slideCollection = this.get('slideItems');
			slideCollection.setCurrentDeck(currentDeck);
			this.setCurrentSlide(this.currentSlide);
		},
		setCurrentSlide: function(index) {
			var slideCollection = this.get('slideItems');
			this.set('currentSlide', index);
			slideCollection.loadSlide(index);
		},
		goToPrevSlide: function() {
			var deckName = this.get('deckName'),
				totalSlides = this.get('slideItems').getTotalSlides(),
				currentSlide = +this.get('currentSlide'),
				prev = (--currentSlide % (totalSlides + 1)) || totalSlides;

			this.sliderRouter.navigate('slide/' + deckName + '/' + prev);
			this.setCurrentSlide(prev);
		},
		goToNextSlide: function() {
			var deckName = this.get('deckName'),
				totalSlides = this.get('slideItems').getTotalSlides(),
				currentSlide = +this.get('currentSlide'),
				nextSlide = (++currentSlide % (totalSlides + 1)) || 1;

			this.sliderRouter.navigate('slide/' + deckName + '/' + nextSlide);
			this.setCurrentSlide(nextSlide);
		},
		adapt: [backboneAdaptor]

	});

	return Slider;
});