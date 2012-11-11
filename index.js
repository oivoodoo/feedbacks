module.exports = function() {
  var $ = require('component-zepto');

  var Feedbacks = function(options) {
    if (typeof options.api_key === 'undefined') return;
    this.api_key = options.api_key;

    this.parse(options)

    this.html();
    this.events();
  };

  Feedbacks.prototype.parse = function(options) {
    this.label = options.label || "Feedback";
  };

  Feedbacks.prototype.html = function() {
    var container = $("<div id='feedbacks'>");
    var button = $("<a href='#'>" + this.label + "</a>");

    container.append(button);
    $(document).append(container);
  };

  Feedbacks.prototype.events = function() {
  };

  return Feedbacks;
};

