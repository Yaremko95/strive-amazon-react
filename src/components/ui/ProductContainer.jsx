import React from "react";
import { Col, Image, Button } from "react-bootstrap";
import { MdEdit } from "react-icons/all";
import ModalCustom from "./ModalCustom";
import UpdateData from "../data/UpdateData";
import ProductForm from "./ProductForm";
import { connect } from "react-redux";
import { fetchData, updateData } from "../../store";
import { addToCart } from "../../store/cart/actions";

function ProductContainer(props) {
  const { product, fetchData, addToCart, updateData } = props;
  const handleCart = (product) => {
    updateData("http://localhost:3002/", "cart", "POST", product._id);
    addToCart(product);
  };
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
      <Button onClick={() => handleCart(product)} variant="primary">
        Add to cart
      </Button>
    </div>
  );
}

export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    updateData: (endpoint, param, method, id) => {
      dispatch(updateData(endpoint, param, method, id));
    },
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
  })
)(ProductContainer);
