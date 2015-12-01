define(function (require) {
    var app = require('durandal/app'),
	ko = require('knockout');

//    var setWidth = function() {
//	// http://stackoverflow.com/a/7965349
//	var maxFontSize = 96;
//	var ele = $("countNum")
//	var ourText = $("span", this),
//                parent = ourText.parent(),
//                maxHeight = parent.height(),
//                maxWidth = parent.width(),
//                fontSize = parseInt(ourText.css("fontSize"), 10),
//                multiplier = maxWidth/ourText.width(),
//                newSize = (fontSize*(multiplier-0.1));
//            ourText.css(
//                "fontSize", 
//                (maxFontSize > 0 && newSize > maxFontSize) ? 
//                    maxFontSize : 
//                    newSize
//            );
//        });
//    };

    var obj = {
	count: ko.observable(),
	afterkeydown: function() {
	    this.fixSize();
	},
	seeingResize: false,
	hookResize: function() {
	    if (! this.seeingResize) {
		this.seeingResize = true;
		$(window).on('resize', this.fixSize);
	    }
	},
	beNum: function() {
	    var num = parseInt(this.count(), 10);
	    if (num < 0 || !(num >= 0)) {
		num = 0;
	    }
	    this.count(num);
	    return num;
	},
	fixSize: function() { // based on http://stackoverflow.com/a/7965349
	    this.hookResize();
	    this.beNum();
	    var txt = $("section.counter #count"),
		box = $("section.counter #countBox"),
		ofs = parseInt(txt.css("fontSize"),10),
//		ph = window.innerHeight,
//		pw = window.innerWidth,
		ph = box.height(), pw = box.width(),
		th = txt.height(),
		tw = txt.width(),
		wfrac = 3.0 / txt.val().length;
	    var multw = (pw / tw) * wfrac,
		multh = (ph / th);
	    var mult = 1.0 * (multw > multh ? multh : multw);
	    $("#info")[0].innerHTML = "mult w="+multw + " h="+multh
		+ " <= box w="+pw + " h=" + ph
		+ ", txt w="+tw + " h=" + th
		+ " wfrac=" + wfrac
		+ ", fontsize old="+ofs + " new="+(ofs*mult);
	    txt.css("fontSize", ofs * mult);
	    $(".countBtn").css("fontSize", ofs * mult * 0.5);
	},
	countUp: function() {
	    var val = this.beNum();
	    if (val == undefined) { val = 0; }
	    val += 1;
	    this.fixSize();
	    this.count( val );
	},
	countDown: function() {
	    var val = this.beNum();
	    if (val == undefined) { val = 1; }
	    val -= 1;
	    if (val < 0) { val = 0; }
	    this.count( val );
	}
     };
     return obj;
});
