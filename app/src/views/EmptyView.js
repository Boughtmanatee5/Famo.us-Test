/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    //Constructor function for empty view
    function EmptyView() {
        // Applies Views constructor function to EmptyView Class
        View.apply(this, arguments);
    }

    EmptyView.prototype = Object.create(View.prototype);
    EmptyView.prototype.constructor = EmptyView;

    EmptyView.DEFAULT_OPTIONS = {};

    module.exports = EmptyView
});
