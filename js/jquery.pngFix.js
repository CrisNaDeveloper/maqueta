/**
 * jQuery (PNG Fix) v1.2
 * Microsoft Internet Explorer 24bit PNG Fix
 *
 * The MIT License
 * 
 * Copyright (c) 2007 Paul Campbell (pauljamescampbell.co.uk)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 */
(function($) {	
	$.fn.pngfix = function(options) {
		var elements 	= this;
		var settings 	= $.extend({
			imageFixSrc: 	false,
			sizingMethod: 	false 
		}, options);
		if(!$.browser.msie || ($.browser.msie &&  $.browser.version >= 7)) {
			return(elements);
		}
		function setFilter(el, path, mode) {
			var fs = el.attr("filters");
			var alpha = "DXImageTransform.Microsoft.AlphaImageLoader";
			if (fs[alpha]) {
				fs[alpha].enabled = true;
				fs[alpha].src = path; 
				fs[alpha].sizingMethod = mode;
			} else {
				el.css("filter", 'progid:' + alpha + '(enabled="true", sizingMethod="' + mode + '", src="' + path + '")');			
			}
		}
		function setDOMElementWidth(el) {
			if(el.css("width") == "auto" & el.css("height") == "auto") {
				el.css("width", el.attr("offsetWidth") + "px");
			}
		}
		return(
			elements.each(function() {
				var el = $(this);
				if(el.attr("tagName").toUpperCase() == "IMG" && (/\.png/i).test(el.attr("src"))) {
					if(!settings.imageFixSrc) {
						el.wrap("<span></span>");
						var par = el.parent();
						par.css({
							height: 	el.height(),
							width: 		el.width(),
							display: 	"inline-block"
						});
						setFilter(par, el.attr("src"), "scale");
						el.remove();
					} else if((/\.gif/i).test(settings.imageFixSrc)) {
						setDOMElementWidth(el);
						setFilter(el, el.attr("src"), "image");
						el.attr("src", settings.imageFixSrc);
					}
				} else {
					var bg = new String(el.css("backgroundImage"));
					var matches = bg.match(/^url\("(.*)"\)$/);
					if(matches && matches.length) {
						setDOMElementWidth(el);
						el.css("backgroundImage", "none");
						var sc = "crop";
						if(settings.sizingMethod) {
							sc = settings.sizingMethod;
						} 
						setFilter(el, matches[1], sc);
						el.find("a").each(function() {
							$(this).css("position", "relative");
						});
					}
				}
			})
		);
	}
})(jQuery)
if ($.browser.msie && $.browser.version <= 6 ) { 
jQuery(function($) {
    $('.botonera_home span, .botonera_home span a').pngfix(); /*img[@src$=png], */
});
}
	