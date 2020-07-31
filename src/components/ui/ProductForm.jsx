import React from "react";
import { Button, Form } from "react-bootstrap";

function ProductForm(props) {
  const { onSubmit, setData, data, encodeImageFileAsURL } = props;
  let ref = React.createRef();
  const handleInputClick = () => {
    ref.current.click();
  };
  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Product Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter project title"
          value={data.name}
          onChange={(e) => setData({ name: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Project description</Form.Label>
        <Form.Control
          as={"textarea"}
          rows={"3"}
          type="text"
          placeholder="Enter description"
          value={data.description}
          onChange={(e) => setData({ description: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Student ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={data.brand}
          onChange={(e) => setData({ brand: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          value={data.imageUrl}
          onChange={(e) => setData({ imageUrl: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          value={data.price}
          onChange={(e) => setData({ price: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          value={data.category}
          onChange={(e) => setData({ category: e.target.value })}
        />
      </Form.Group>
      <input
        type={"file"}
        name={"file"}
        ref={ref}
        accept="image/*"
        hidden
        onChange={(e) => setData({ file: e.target.files[0] })}
      />
      <Button onClick={() => handleInputClick()}>Choose Image</Button>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ProductForm;
