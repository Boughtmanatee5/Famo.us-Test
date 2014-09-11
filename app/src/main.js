/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Utility = require('famous/utilities/Utility');
    var AppView = require('views/AppView');

    var data = ["/content/lightbox/image01.jpg",
                "/content/lightbox/image02.jpg",
                "/content/lightbox/image03.jpg",
                "/content/lightbox/image04.png",
                "/content/lightbox/image05.png"]

    var mainCtx = Engine.createContext();
    mainCtx.setPerspective(1000);

    initApp(data);

    function initApp(data) {

        var appView = new AppView({ data : data });

        mainCtx.add(appView);
    }

});
