import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import ProductContainer from "./ProductContainer";
import {
  useSpring,
  animated,
  interpolate,
  useTransition,
  useTrail,
} from "react-spring";
import { Transition } from "react-spring/renderprops-universal";
import Measure from "react-measure";

function ProductsGallery(props) {
  const { data, children } = props;

  const fade = useSpring({
    from: { opacity: 0, xyz: [0, 100, 0] },
    opacity: 1,
    xyz: [0, 0, 0],
    reset: true,
  });
  const transitions = useTrail(data.length, {
    from: { transform: "translate3d(0, 40px,0)", opacity: 0 },
    to: { transform: "translate3d(0,0px,0)", opacity: 1 },
  });
  return (
    <Col>
      {/*<animated.div*/}
      {/*  style={{*/}
      {/*    ...fade,*/}
      {/*    transform: fade.xyz.interpolate(*/}
      {/*      (x, y, z) => `translate3d(${x}px,${y}px, 0)`*/}
      {/*    ),*/}
      {/*  }}*/}
      {/*>*/}
      <Row className={"row-cols-4"}>
        {transitions.map((item, index) => (
          <animated.div key={data[index]} style={{ ...item }}>
            <ProductContainer product={data[index]} />
          </animated.div>
        ))}
        {/*{data.map((product) => (*/}
        {/*  <ProductContainer product={product} />*/}
        {/*))}*/}
      </Row>

      {/*{data.map((product, i) => (*/}
      {/*  <Col*/}
      {/*    onClick={() => toggle(!active)}*/}
      {/*    className={*/}
      {/*      "d-flex flex-column text-center justify-content-center align-items-center mt-4"*/}
      {/*    }*/}
      {/*  >*/}
      {/*    <ProductContainer*/}
      {/*      key={product._id}*/}
      {/*      {...props}*/}
      {/*      product={product}*/}
      {/*    />*/}
      {/*  </Col>*/}
      {/*))}*/}
      {/*</animated.div>*/}
    </Col>
  );
}

export default ProductsGallery;
