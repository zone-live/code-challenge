define(['backbone', 'collections/slideCategory', 'models/slide.model'], function (Backbone, SlideCategory, SlideModel) {
	'use strict';

	var SlideCollection = Backbone.Collection.extend({
		model: SlideModel,

		parse: function(response) {
			this.slidesTotal = response.slides;
			return response.slide.map(this.slideItem);
		},
		getTotalSlides: function() {
			return this.slidesTotal;
		},
		setCurrentDeck: function(name) {
			this.currentDeck = name;
		},
		slideItem: function(slide) {
			if (slide.image) {
				return {
					type: SlideCategory.IMAGE,
					value: slide.image
				}
			} else if (slide.para) {
				return {
					type: SlideCategory.PARAGRAPH,
					value: slide.para
				}
			} else if (slide.heading) {
				return {
					type: SlideCategory.HEADING,
					value: slide.heading
				}
			}
		},
		loadSlide: function(slideNum) {
			if (this.currentDeck) {
				this.fetch({
					url: '/api/decks/' + this.currentDeck + '/slide/' + slideNum
				});
			}
		}
	});

	return SlideCollection;
});