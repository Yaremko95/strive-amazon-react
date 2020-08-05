import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProductsGallery from "./ProductsGallery";
import DataSource from "../data/DataSource";
import CartGallery from "./CartGallery";
import Filter from "./Filter";
import Measure from "react-measure";
import ProductContainer from "./ProductContainer";
import SliderContainer from "./slider/SliderContainer";
const queryString = require("query-string");
function HomeContainer(props) {
  const { searchQuery } = props;
  const [trigger, setTrigger] = React.useState(false);
  const [filter, setFilter] = React.useState({ category: [] });

  console.log(filter);
  return (
    <>
      <DataSource endpoint={"http://localhost:3002/products"}>
        <SliderContainer />
      </DataSource>
      {/*<SliderContainer />*/}
      <Row style={{ paddingTop: "19rem" }}>
        <Col className={"col-2 d-flex flex-column"}>
          <Filter toggleCheckBox={setFilter} filter={filter} />
        </Col>
        <Col className={"col-8"}>
          <DataSource
            endpoint={`http://localhost:3002/products?${queryString.stringify(
              filter,
              { arrayFormat: "bracket" }
            )}`}
            query={{ name: searchQuery }}
            trigger={trigger}
            setrigger={setTrigger}
          >
            <ProductsGallery {...props} />
          </DataSource>
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
