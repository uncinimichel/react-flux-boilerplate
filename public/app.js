var React = require('react');

var ExampleApp = require('./components/Example.react');

React.render(
  React.createElement(ExampleApp, null),
  document.getElementById('exampleapp')
);