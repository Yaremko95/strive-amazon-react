import React from "react";
import { Col, Image, Button } from "react-bootstrap";
import { MdEdit } from "react-icons/all";
import ModalCustom from "./ModalCustom";
import UpdateData from "../data/UpdateData";
import ProductForm from "./ProductForm";

function ProductContainer(props) {
  const { product, addToCart, fetchData } = props;

  return (
    <div>
      <ModalCustom trigger={<MdEdit className={"align-self-end"} />}>
        <UpdateData
          {...props}
          fetchData={fetchData}
          data={product}
          method={"PUT"}
          endpoint={`http://localhost:3002/products/${product._id}`}
        >
          <ProductForm />
        </UpdateData>
      </ModalCustom>
      {/*<MdEdit className={'align-self-end'} />*/}
      <Image src={product.imageUrl} fluid />
      <span>{product.name}</span>
      <span>{product.description}</span>
      <span>{product.price}</span>
      <Button onClick={() => addToCart(product._id)} variant="primary">
        Add to cart
      </Button>
    </div>
  );
}

export default ProductContainer;
