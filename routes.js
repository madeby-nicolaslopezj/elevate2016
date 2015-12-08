Router.map(function() {

  this.route('site', {
    path: '/',
    onAfterAction: function() {
      if (!Meteor.isClient) {
        return;
      }
      SEO.set({
        title: orion.dictionary.get('seo.title'),
        link: {
          icon: orion.dictionary.get('seo.favIcon.url'),
        },
        meta: {
          'description': orion.dictionary.get('seo.description')
        },
        og: {
          'title': orion.dictionary.get('seo.title'),
          'description': orion.dictionary.get('seo.description'),
          'image': orion.dictionary.get('seo.image.url')
        }
      });
    }
  });

});
