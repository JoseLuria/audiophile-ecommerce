export const InputValues = {
  required: true,
};

export const InputZipValues = {
  required: true,
  minLength: 5,
  maxLength: 5,
  pattern: {
    value: /^(0|[1-9]\d*)(\.\d+)?$/,
    message: "Wrong format",
  },
};

export const InputEmailValues = {
  required: true,
  pattern: {
    value: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    message: "Wrong format",
  },
};

export const InputPhoneValue = {
  required: true,
  pattern: {
    value:
      /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
    message: "Wrong format",
  },
};
