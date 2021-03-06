var React = require('react');
var Signup = require('./users/Signup.react.js');
var Login = require('./sessions/Login.react.js');
var EditUser = require('./users/EditUser.react.js');
var Transactions = require('./transactions/Container.react.js')

module.exports = function() {
  var signup = document.querySelector('[data-js="newUser"]');
  var login = document.querySelector('[data-js="newLogin"]');
  var edit = document.querySelector('[data-js="editUser"]');
  var transactions = document.querySelector('[data-js="transactions"]');
  if (signup) {
    React.render(<Signup />, signup);
  } else if (login) {
    React.render(<Login />, login);
  } else if (transactions) {
    React.render(<Transactions />, transactions );
  }
};
