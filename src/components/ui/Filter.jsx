import React from "react";
import { Form } from "react-bootstrap";
function Filter(props) {
  const { toggleCheckBox, filter } = props;

  return (
    <>
      <Form.Check
        type="checkbox"
        id={`radio`}
        label={`smartphones`}
        onChange={() =>
          toggleCheckBox((state) => {
            const stateCopy = { ...state };
            if (stateCopy.category.includes("smartphones")) {
              stateCopy.category = stateCopy.category.filter(
                (item) => item !== "smartphones"
              );
            } else {
              stateCopy.category = [...stateCopy.category, "smartphones"];
            }
            return stateCopy;
          })
        }
      />
      <Form.Check
        type="checkbox"
        id={`radio`}
        label={`laptops`}
        onChange={() =>
          toggleCheckBox((state) => {
            const stateCopy = { ...state };
            if (stateCopy.category.includes("laptops")) {
              stateCopy.category = stateCopy.category.filter(
                (item) => item !== "laptops"
              );
            } else {
              stateCopy.category = [...stateCopy.category, "laptops"];
            }
            return stateCopy;
          })
        }
      />
      <Form.Check
        type="checkbox"
        id={`radio`}
        label={`food`}
        onChange={() =>
          toggleCheckBox((state) => {
            const stateCopy = { ...state };
            if (stateCopy.category.includes("food")) {
              stateCopy.category = stateCopy.category.filter(
                (item) => item !== "food"
              );
            } else {
              stateCopy.category = [...stateCopy.category, "food"];
            }
            return stateCopy;
          })
        }
      />
    </>
  );
}

export default Filter;
