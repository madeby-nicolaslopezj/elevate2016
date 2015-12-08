orion.dictionary.addDefinition('title', 'barra', {
    type: String,
    label: "Titulo",
    optional: true
});

orion.dictionary.addDefinition('subtitle', 'barra', {
    type: String,
    label: "Sub Titulo",
    optional: true
});

orion.dictionary.addDefinition('image', 'barra', orion.attribute('image', {
  label: 'Imagen'
}));

orion.dictionary.addDefinition('link', 'barra', {
    type: String,
    label: "Link",
    optional: true
});

orion.dictionary.addDefinition('linkText', 'barra', {
    type: String,
    label: "Link Text",
    optional: true
});
