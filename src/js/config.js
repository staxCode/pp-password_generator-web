export const labelHTML = {
  range: {
    type: "range",
    // value: 15,
    min: 1,
    max: 50,
    autocomplete: "off",
    step: "1",
    class:
      "range range-accent range-md bg-gray-100 shadow-sm shadow-indigo-300/50",
  },
  radio: {
    type: "radio",
    class:
      "radio radio-md bg-gray-100 checked:bg-accent shadow-sm shadow-indigo-300/50",
    name: "radio-pass",
  },
  check: {
    type: "checkbox",
    class:
      "checkbox checkbox-accent shadow-sm bg-gray-100 shadow-indigo-300/50 border-none",
  },
  text: {
    type: "text",
    id: "pass-content",
    class:
      "block p-2 w-full h-full text-4xl font-semibold text-gray-800 bg-white",
    disabled: "",
    row: 1,
  },
  buttons: [
    {
      attributes: {
        id: "copy",
        "data-tip": "copy",
        class:
          "tooltip inline-flex justify-center p-2 text-indigo-500 cursor-pointer transition hover:bg-gray-100 hover:rounded-lg hover:text-indigo-700",
      },
      children: [
        {
          type: "i",
          attributes: {
            class: "ri-clipboard-line ri-2x",
          },
        },
        {
          type: "span",
          attributes: {
            class: "sr-only",
            value: "copy",
          },
        },
      ],
    },
    {
      attributes: {
        id: "refresh",
        "data-tip": "refresh",
        class:
          "tooltip inline-flex justify-center p-2 text-indigo-500 cursor-pointer transition hover:bg-gray-100 hover:rounded-lg hover:text-indigo-700",
      },
      children: [
        {
          type: "i",
          attributes: {
            class: "ri-refresh-line ri-2x",
          },
        },
        {
          type: "span",
          attributes: {
            class: "sr-only",
            value: "refresh",
          },
        },
      ],
    },
  ],
};

export const data = {
  char: {
    lowercase: false,
    uppercase: false,
    number: true,
    symbol: true,
  },
  length: 15,
};