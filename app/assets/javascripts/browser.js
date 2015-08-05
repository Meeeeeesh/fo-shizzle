var React = require('react');
var App = require('./App.react.js');

var browser = function() {
  var div = document.querySelector('[data-js="app"]');
  React.render(<App />, div);
};

module.exports = browser;
