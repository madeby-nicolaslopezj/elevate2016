HistoryItems = new orion.collection('history_items', {
  singularName: 'item',
  pluralName: 'items',
  title: 'Historia',
  link: {
    title: 'Historia'
  },
  tabular: {
    columns: [
      orion.attributeColumn('image', 'image', 'Imagen'),
      { data: 'description', title: 'Description' },
      { data: 'url', title: 'Url' }
    ]
  }
});

HistoryItems.attachSchema({
  image: orion.attribute('image', {
    label: 'Imagen'
  }),
  description: {
    type: String,
    label: 'Descripción'
  },
  url: {
    type: String,
    label: 'Url',
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  }
});
