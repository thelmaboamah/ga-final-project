console.log("Sanity Check")

$(document).ready(function(){

	var $video = $('video');
	var video = $video[0]
	var $canvas = $('canvas');
	var canvas = $canvas[0];
	var $snapButton = $('#snapshot');
	var $photo = $('.photo')

		//Video Stream
	var constraints = {
		audio: false,
		video: true
	};

	function photoCaptureSuccess(stream){
		video.srcObject = stream;
	}

	function photoCaptureError(error){
		console.log('navigator.getUserMedia error: ', error);
	}

	navigator.mediaDevices.getUserMedia(constraints).
	    then(photoCaptureSuccess).catch(photoCaptureError);

	//To maintain aspect ratio with video element
	canvas.width = 480;
	canvas.height = 360;

	//Give photo data attribute that corresponds with their filter style.
	// $photo.each(function() {
	// 	filter = $(this).parent('figure').attr('class');
	// 	$(this).data('filter', filter);
	// });

	//Take a picture
	$snapButton.click(function () {

		canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
		canvas.toBlob(function(blob){
			url = URL.createObjectURL(blob);
			$photo.attr('src', url);
		}, 'image/jpeg', 1);
		
		$('.output').show();

	});

	


});