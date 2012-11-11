var $      = require('zepto-component'),
    dialog = require('dialog'),
    form   = require('./form');

var Feedbacks = function(options) {
  if (typeof options.api_key === 'undefined') return;
  this.api_key = options.api_key;

  this.parse(options)

  this.form();
  this.html();
  this.events();
};

Feedbacks.prototype.form = function() {
  this.form = $(form);
};

Feedbacks.prototype.parse = function(options) {
  this.label = options.label || "Feedback";
  this.class = options.class || "button1";
};

Feedbacks.prototype.html = function() {
  this.container = $("<div id='feedbacks' class='" + this.class + "'>");
  this.button = $("<span>" + this.label + "</span>");

  this.container.append(this.button);
  $('body').append(this.container);
};

Feedbacks.prototype.events = function() {
  var context = this;

  $(this.button).click(function(event) {
    event.preventDefault();

    dialog(context.label, context.form)
      .closable()
      .modal()
      .effect('slide')
      .show();
  });
};

module.exports = Feedbacks;

