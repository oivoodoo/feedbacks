var $ = require('zepto-component');

var Feedbacks = function(options) {
  if (typeof options.api_key === 'undefined') return;
  this.api_key = options.api_key;

  this.parse(options)

  this.html();
  this.events();
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
  $(this.button).click(function(event) {
    event.preventDefault();

    console.log('test');
  });
};

module.exports = Feedbacks;

