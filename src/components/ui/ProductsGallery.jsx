import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import ProductContainer from "./ProductContainer";
import { connect } from "react-redux";
import { fetchData } from "../../store";
import { useSpring, animated, useTrail } from "react-spring";

function ProductsGallery(props) {
  const { products, children, fetchData } = props;
  React.useEffect(() => {
    fetchData("http://localhost:3002/", "products");
  }, []);
  const fade = useSpring({
    from: { opacity: 0, xyz: [0, 100, 0] },
    opacity: 1,
    xyz: [0, 0, 0],
    reset: true,
  });
  const transitions = useTrail(products.products.length, {
    from: { transform: "translate3d(0, 40px,0)", opacity: 0 },
    to: { transform: "translate3d(0,0px,0)", opacity: 1 },
  });
  return (
    <Col>
      <Row className={"row-cols-4"}>
        {transitions.map((item, index) => (
          <animated.div key={products.products[index]} style={{ ...item }}>
            <ProductContainer product={products.products[index]} />
          </animated.div>
        ))}
      </Row>
    </Col>
  );
}

export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    fetchData: (endpoint, param, id) => {
      dispatch(fetchData(endpoint, param, id));
    },
  })
)(ProductsGallery);
