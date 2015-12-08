orion.dictionary.addDefinition('title', 'tickets', {
  type: String,
  label: "Titulo",
  optional: true
});

orion.dictionary.addDefinition('subtitle', 'tickets', {
  type: String,
  label: "Sub Titulo",
  optional: true
});

orion.dictionary.addDefinition('image', 'tickets', orion.attribute('image', {
  label: 'Imagen'
}));

orion.dictionary.addDefinition('url', 'tickets', {
  type: String,
  label: "Url para comprar tickets",
  optional: true
});

orion.dictionary.addDefinition('quoteImage', 'tickets', orion.attribute('image', {
  label: 'Imagen de fondo'
}));

orion.dictionary.addDefinition('quote', 'tickets', {
  type: String,
  label: "Text sobre la foto",
  optional: true,
  autoform: {
    type: 'textarea'
  }
});

orion.dictionary.addDefinition('quoteButtonLink', 'tickets', {
  type: String,
  label: "Link del boton",
  optional: true,
});

orion.dictionary.addDefinition('quoteButtonText', 'tickets', {
  type: String,
  label: "Texto del boton",
  optional: true,
});
