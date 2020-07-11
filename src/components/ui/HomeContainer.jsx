import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductsGallery from "./ProductsGallery";
import DataSource from "../data/DataSource";
import CartGallery from "./CartGallery";
import Filter from "./Filter";
const queryString = require("query-string");
function HomeContainer(props) {
  const { searchQuery } = props;
  const [trigger, setTrigger] = React.useState(false);
  const [filter, setFilter] = React.useState({ category: [] });
  console.log(filter);
  return (
    <Row>
      <Col className={"col-3"}>
        <Filter toggleCheckBox={setFilter} filter={filter} />
      </Col>
      <Col className={"col-6"}>
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
      <Col className={"col-3"}>
        <DataSource
          endpoint={"http://localhost:3002/cart"}
          trigger={trigger}
          setrigger={setTrigger}
        >
          <CartGallery />
        </DataSource>
      </Col>
    </Row>
  );
}

export default HomeContainer;
