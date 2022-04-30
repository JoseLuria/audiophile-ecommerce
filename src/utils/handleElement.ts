type setElement = React.Dispatch<React.SetStateAction<Boolean>>;

export const handleRemoveElement = (setValue: setElement): void => {
  document.body.classList.remove("no-scroll");
  setValue(false);
};

export const handleShowElement = (
  elementToShow: setElement,
  elementToRemove: setElement,
  valueToCheck: Boolean,
  valueToModify: Boolean,
) => {
  if (valueToCheck) {
    handleRemoveElement(elementToRemove);

    setTimeout(() => {
      document.body.classList.toggle("no-scroll");
      elementToShow(true);
    }, 450);
  } else {
    document.body.classList.toggle("no-scroll");
    elementToShow(!valueToModify);
  }
};
