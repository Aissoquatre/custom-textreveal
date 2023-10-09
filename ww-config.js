export default {
  editor: {
    label: {
      en: "Text Reveal",
    },
  },
  properties: {
    textColor: {
      label: {
        en: "Text color",
      },
      type: "Color",
      defaultValue: "#FFF",
    },
    source: {
      label: {
          en: 'Text Reveal',
      },
      type: 'Text',
      options: {
          expandable: true,
      },
      bindable: true,
      defaultValue: '',
    },
  },
};