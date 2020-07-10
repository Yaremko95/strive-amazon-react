import React from "react";
import { Form } from "react-bootstrap";
function Filter(props) {
  const { toggleCheckBox, filter } = props;

  return (
    <>
      <Form.Check
        type="radio"
        id={`radio`}
        label={`phones`}
        onChange={() =>
          toggleCheckBox((state) => {
            const stateCopy = { ...state };
            stateCopy.category = [...stateCopy.category, "phones"];
            return stateCopy;
          })
        }
      />
      <Form.Check
        type="radio"
        id={`radio`}
        label={`laptops`}
        onChange={() =>
          toggleCheckBox((state) => {
            const stateCopy = { ...state };
            stateCopy.category = [...stateCopy.category, "laptops"];
            return stateCopy;
          })
        }
      />
      <Form.Check
        type="radio"
        id={`radio`}
        label={`food`}
        onChange={() =>
          toggleCheckBox((state) => {
            const stateCopy = { ...state };
            stateCopy.category = [...stateCopy.category, "food"];
            return stateCopy;
          })
        }
      />
    </>
  );
}

export default Filter;
