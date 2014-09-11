/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var SlideshowView = require('views/SlideshowView');

    //Constructor function for empty view
    function AppView() {
        // Applies Views constructor function to AppView Class
        View.apply(this, arguments);

        var slideshowView = new SlideshowView({
            data: this.options.data
        });

        this.add(slideshowView);
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = {
        data: undefined
    };

    module.exports = AppView
});
