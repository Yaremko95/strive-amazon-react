import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProductsGallery from "./ProductsGallery";
import DataSource from "../data/DataSource";

import Filter from "./Filter";

import SliderContainer from "./slider/SliderContainer";

function HomeContainer(props) {
  return (
    <>
      <DataSource endpoint={"http://localhost:3002/products"}>
        <SliderContainer />
      </DataSource>
      {/*<SliderContainer />*/}
      <Row style={{ paddingTop: "19rem" }}>
        <Col className={"col-2 d-flex flex-column"}>
          <Filter />
        </Col>
        <Col className={"col-8"}>
          <ProductsGallery {...props} />
        </Col>
        <Col className={"col-2"}>
          {/*<DataSource*/}
          {/*  endpoint={"http://localhost:3002/cart"}*/}
          {/*  trigger={trigger}*/}
          {/*  setrigger={setTrigger}*/}
          {/*>*/}
          {/*  <CartGallery />*/}
          {/*</DataSource>*/}
        </Col>
      </Row>
    </>
  );
}

export default HomeContainer;
