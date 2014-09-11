/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var Lightbox = require('famous/views/Lightbox');
    var Easing = require('famous/transitions/Easing');
    var SlideView = require('views/SlideView');

    //Constructor function for empty view
    function SlideshowView() {
        // Applies Views constructor function to SlideshowView Class
        View.apply(this, arguments);

        this.rootModifier = new StateModifier({
            size: this.options.size,
            origin: [0.5, 0],
            align: [0.5, 0]
        });

        this.mainNode = this.add(this.rootModifier)

        _createLightbox.call(this);
        _createSlides.call(this);
    }

    SlideshowView.prototype = Object.create(View.prototype);
    SlideshowView.prototype.constructor = SlideshowView;
    SlideshowView.prototype.showCurrentSlide = function() {
        var slide = this.slides[this.currentIndex];
        this.lightbox.show(slide);
    }
    SlideshowView.prototype.showNextSlide = function() {
        this.currentIndex++;
        if (this.currentIndex === this.slides.length) this.currentIndex = 0;
        this.showCurrentSlide();
    }

    SlideshowView.DEFAULT_OPTIONS = {
        size: [450, 500],
        data: undefined,
        lightboxOpts: {
            inTransform: Transform.translate(300, 0, 0),
            outTransform: Transform.translate(-500, 0, 0),
            inTransition: {duration: 500, curve: Easing.outBack},
            outTransition: {duration: 350, curve: Easing.inQuad}
        }
    };

    function _createLightbox() {
        this.lightbox = new Lightbox(this.options.lightboxOpts);
        this.mainNode.add(this.lightbox);
    }

    function _createSlides() {
        this.slides = [];
        this.currentIndex = 0;

        for (var i = 0; i < this.options.data.length; i++) {
            var slide = new SlideView({
                size: this.options.size,
                photoUrl: this.options.data[i]
            });

            this.slides.push(slide);
            slide.on('click', this.showNextSlide.bind(this));
        }

        this.showCurrentSlide();
    }

    module.exports = SlideshowView
});
