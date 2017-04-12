console.log('App.js Sanity Check');

$(document).ready(function(){
	var path = $("figure a").attr("href")
	var id = (function(){
		pathArr = path.split('/');
		return pathArr[pathArr.length - 1 ]
	})()

	$('#updatePhotoButton').click(function(event){
			event.preventDefault();
			data = {
				note: $('input[name="note"]').val()
			}

			$.ajax({
				method: 'PUT',
				url: '/api' + path,
				data: data,
				success: function(){
					$('input[name="note"]').val('')
					location.href = "http://localhost:3000/photos/"
				},
				error: function(err){
					console.log('Unable to save photo', err);
				}
			});
	});

	//Need to gracefully handle confirmation on delete
	$('#deletePhotoButton').click(function(event) {
		$.ajax({
			method: 'DELETE',
			url: '/api' + path,
			data: id,
			success: function(){
				// $('#photo-info').html(res);
					location.href = "http://localhost:3000/photos/"
			},
			error: function(err){
				console.log('Unable to delete', err);
			}
		})
	})

});