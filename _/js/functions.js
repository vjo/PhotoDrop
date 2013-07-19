// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function($){


/* trigger when page is ready */
$(document).ready(function (){

	// your functions go here
var dropzone = document.getElementById("dropzone");
dropzone.addEventListener("dragenter", noopHandler, false);
dropzone.addEventListener("dragexit", noopHandler, false);
dropzone.addEventListener("dragover", noopHandler, false);
dropzone.addEventListener("drop", drop, false);

function noopHandler(evt) {
  evt.stopPropagation();
  evt.preventDefault();
}

function drop(ev)
{
	ev.stopPropagation();
	ev.preventDefault();
	var files = ev.dataTransfer.files;
	var count = files.length;
	if(count &gt; 0)
		
}


});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/


})(window.jQuery);