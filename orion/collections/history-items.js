HistoryItems = new orion.collection('history_items', {
  singularName: 'item',
  pluralName: 'items',
  title: 'Historia',
  link: {
    title: 'Historia'
  },
  tabular: {
    columns: [
      { data: 'position', title: 'Posición' },
      orion.attributeColumn('image', 'image', 'Imagen'),
      { data: 'description', title: 'Description' }
    ]
  }
});

HistoryItems.attachSchema({
  position: {
    type: Number,
    label: 'Posición'
  },
  image: orion.attribute('image', {
    label: 'Imagen'
  }),
  description: {
    type: String,
    label: 'Descripción'
  },
  urlLabel: {
    type: String,
    label: 'Texto Url'
  },
  url: {
    type: String,
    label: 'Url',
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  }
});
