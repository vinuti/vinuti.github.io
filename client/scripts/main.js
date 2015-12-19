!function() {
  'use strict';

  var loadMinorStyles = require('./load-minor-styles');

  var main = function() {
    loadMinorStyles();
  };

  document.addEventListener('DOMContentLoaded', main);
}();
