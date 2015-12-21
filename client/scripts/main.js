!function() {
  'use strict';

  var loadMinorStyles = require('./load-minor-styles');

  var main = function() {
    loadMinorStyles();

    try {
      Typekit.load({
        async: true
      });
    } catch (exception) {
      console.error('typekit', exception);
    }
  };

  document.addEventListener('DOMContentLoaded', main);
}();
