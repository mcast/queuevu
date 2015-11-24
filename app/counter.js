define(function (require) {
    var app = require('durandal/app'),
	ko = require('knockout');

    return {
	count: ko.observable(),
	countUp: function() {
	    var val = this.count();
	    if (val == undefined) { val = 0; }
	    val += 1;
	    this.count( val );
	},
	countDown: function() {
	    var val = this.count();
	    if (val == undefined) { val = 1; }
	    val -= 1;
	    if (val < 0) { val = 0; }
	    this.count( val );
	}
     };
});
