import React from "react";
import NavBar from "../components/ui/NavBar";
import { Container } from "react-bootstrap";
import Measure from "react-measure";

function MainLayout(props) {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <>
      <NavBar
        handleSearch={(query) => setSearchQuery(query)}
        searchQuery={searchQuery}
      />
      <Container fluid className={"mt-5"}>
        {React.cloneElement(props.children, { searchQuery: searchQuery })}
      </Container>
    </>
  );
}

export default MainLayout;
