type setElement = React.Dispatch<React.SetStateAction<Boolean>>;

// Remove a element on the NavBar
export const handleRemoveElement = (setValue: setElement): void => {
  document.body.classList.remove("no-scroll");
  setValue(false);
};

// Show a element on the NavBar
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

// Format the poduct price in USD
export const handleFormatPrice = (price: number): string => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

// Return the First element on the product Name
export const handleFormatProductName = (name: string) => {
  const nameArray = name.split(" ");

  return nameArray[0];
};
