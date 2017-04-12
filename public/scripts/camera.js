$(document).ready(function(){

	var $video = $('video');
	var video = $video[0]
	var $canvas = $('canvas');
	var canvas = $canvas[0];
	var $snapButton = $('#snapshot');
	var $photo = $('.photo')

		//Video Stream, Source: https://webrtc.github.io/samples/src/content/getusermedia/filter/
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

	//To maintain aspect ratio of video element
	canvas.width = 480;
	canvas.height = 360;

	//Take a picture
	$snapButton.click(function () {
		canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
		imgUrl = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
		
		$photo.attr('src', imgUrl);

		$('.output').css('display', 'flex');
	});

	//Preview and save selected photo
	$photo.click(function(){
		$('.camera').hide();
		 $img = $(this);
		 $figure = $img.parent();
		 $('#selected-pic').empty();
		 $figure.clone().prependTo('#selected-pic');
		 $('.preview').show();

		 $('#reopen-camera').click(function(){
		 	$('.preview').hide();
		 	$('.camera').show();
		 })

		 $('#savePhotoButton').click(function(event){
		 		event.preventDefault();
		 		data = {
		 			url: $img.attr('src'),
		 			filter: $figure.attr('class'),
		 			note: $('input[name="note"]').val()
		 		}

		 		$.ajax({
		 			method: 'POST',
		 			url: '/api/photos',
		 			data: data,
		 			success: function(){
		 				$('.preview, .output').hide();
		 				$('.camera').show();
		 				$('input[name="note"]').val('')
		 			},
		 			error: function(err){
		 				console.log('Unable to save photo', err);
		 			}
		 		});
		 });


	});


});