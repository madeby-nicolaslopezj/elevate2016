orion.dictionary.addDefinition('title', 'seo', {
  type: String,
  label: "Title of the page",
  optional: true,
});

orion.dictionary.addDefinition('description', 'seo', {
  type: String,
  label: "Description",
  optional: true,
  autoform: {
    type: 'textarea',
  }
});

orion.dictionary.addDefinition('image', 'seo', orion.attribute('image', {
	label: 'Image'
}));

orion.dictionary.addDefinition('favIcon', 'seo', orion.attribute('image', {
	label: 'Image'
}));
