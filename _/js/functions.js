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

document.getElementById("preview").onclick = function() {
console.log(this);
    EXIF.getData(this, function() {
        var make = EXIF.getTag(this, "Make"),
            model = EXIF.getTag(this, "Model");
        console.log("I was taken by a " + make + " " + model);
        alert("I was taken by a " + make + " " + model);
    });
}
    //$(document).on('click', '#preview', function() {
        //console.log('click');
        //var img = this;
//console.log(img);
        //EXIF.getData(img, function() {
//console.log(img);
            //console.log(EXIF.pretty(img));
            //var make = EXIF.getTag(img, "Make"),
                //model = EXIF.getTag(img, "Model");
            //console.log("I was taken by a " + make + " " + model);
        //});
    //});
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
	reader.onprogress = handleReaderOnProgress;

	reader.readAsDataURL(file);
}

function handleReaderLoad(evt)
{
	var img = document.getElementById("preview");
	img.src = evt.target.result;
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

/* optional triggers

$(window).load(function() {

});

$(window).resize(function() {

});

*/


})(window.jQuery);
