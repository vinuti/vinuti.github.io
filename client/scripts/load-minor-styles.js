var loadMinorStyles = function() {
  var link = document.createElement('link');

  link.addEventListener('load', link.removeAttribute.bind(link, 'media'));

  link.href = 'public/styles/minor.css';
  link.media = 'none';
  link.rel = 'stylesheet';

  document.head.appendChild(link);
};

module.exports = loadMinorStyles;
