Template.header.helpers({
	getImage: function () {
		var images = orion.dictionary.get('header.backgroundImages', []);
		if (images.length == 1) {
			return images[0].url;
		} else if (images.length > 1) {
			return images[Math.floor((Math.random() * images.length))].url;
		}
		return '';
	}
});
