orion.dictionary.addDefinition('title', 'djs', {
    type: String,
    label: "Titulo",
    optional: true
});

orion.dictionary.addDefinition('subtitle', 'djs', {
    type: String,
    label: "Sub Titulo",
    optional: true
});

orion.dictionary.addDefinition('image', 'djs', orion.attribute('image', {
  label: 'Imagen'
}));
