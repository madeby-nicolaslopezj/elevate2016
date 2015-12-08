orion.dictionary.addDefinition('title', 'features', {
    type: String,
    label: "Titulo",
    optional: true
});

orion.dictionary.addDefinition('subtitle', 'features', {
    type: String,
    label: "Sub Titulo",
    optional: true
});

orion.dictionary.addDefinition('image', 'features', orion.attribute('image', {
  label: 'Imagen'
}));
