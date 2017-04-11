var Photo = require('./controllers/photo');

var photos = [
	{
		url: 'https://scontent.fsnc1-5.fna.fbcdn.net/v/t1.0-9/16998673_10154085629581503_4955607484333832290_n.jpg?oh=c3116166b2472675d902051ef9d55c97&oe=594EB162' ,
		filter: 'brooklyn',
		note: 'Tech ladies killin it'
	},
	{
		url: 'https://scontent.fsnc1-5.fna.fbcdn.net/v/t31.0-8/1167117_559167697480887_1302947023_o.jpg?oh=24dec18c0dbdfab351d1a0e05711d51a&oe=594D8702' ,
		filter: 'inkwell',
		note: 'Love my bestie'
	}
];

Photo.remove({}, function(err) {
	if (err) {console.log('Unable to empty the database', err);}

	Photo.create(photos, function(err, photos) {
		if (err) { console.log('Could not seed photos', err);}
		console.log('create', photos.length, 'photos');
		process.exit();
	})

})