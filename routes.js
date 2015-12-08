Router.map(function() {

	this.route('site', {
		path: '/',
		loadingTemplate: 'adminLoading',
		onAfterAction: function() {
			if (!Meteor.isClient) {
				return;
			}
			SEO.set({
				title: orion.dictionary.get('seoTitle'),
				link: {
					icon: orion.dictionary.get('seoFavIcon.link'),
				},
				meta: {
					'description': orion.dictionary.get('seoDescription')
				},
				og: {
					'title': orion.dictionary.get('seoTitle'),
					'description': orion.dictionary.get('seoDescription'),
					'image': orion.dictionary.get('seoImage.link')
				}
			});
		}
	});

});
