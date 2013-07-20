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

    // Init drag and drop events
    var dropzone = document.getElementById("dropzone");
    dropzone.addEventListener("dragenter", noopHandler, false);
    dropzone.addEventListener("dragexit", noopHandler, false);
    dropzone.addEventListener("dragover", noopHandler, false);
    dropzone.addEventListener("drop", drop, false);

    $(document).on('click', '#preview', function() {
        var img = this;
        EXIF.getData(img, function() {
            console.log(EXIF.pretty(this));
            var make = EXIF.getTag(this, "Make"),
                model = EXIF.getTag(this, "Model");
            console.log("I was taken by a " + make + " " + model);
        });
    });
    
	initMap();
});

function noopHandler(evt)
{
  evt.stopPropagation();
  evt.preventDefault();
}

function drop(ev)
{
	ev.stopPropagation();
	ev.preventDefault();
	var files = ev.dataTransfer.files;
	var count = files.length;
	if(count > 0)
		handleFiles(files);
}

function handleFiles(files)
{
	var file = files[0];

	var reader = new FileReader();
	reader.onloadend = handleReaderLoad;
	// reader.onprogress = handleReaderOnProgress;

	reader.readAsDataURL(file);
}

function handleReaderLoad(evt)
{
	var img = document.getElementById("preview");
	img.src = evt.target.result;
	var container = document.getElementById("dropzone");
	container.hidden = true;
	var divmap = document.getElementById("map");
	divmap.hidden = false;
}

function handleReaderOnProgress(evt)
{
	if(evt.lengthComputable)
	{
		var percentComplete = (evt.loaded / evt.total) * 100;
		var progressBar = document.getElementById("progressbar");
		progressBar.value = percentComplete;
	}
}

function initMap()
{
	var map = L.map('map').setView([48.853, 2.35], 13);

	L.tileLayer('http://{s}.tile.cloudmade.com/18130e5d2a24477dbdc6c1b915cb3e8e/997/256/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
	    maxZoom: 18
	}).addTo(map);
}

/* optional triggers

$(window).load(function() {

});

$(window).resize(function() {

});

*/


})(window.jQuery);
