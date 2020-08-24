import React, { useState, useEffect, useRef } from "react";
import {
  Navbar,
  Nav,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { createUseStyles } from "react-jss";
import ResizeObserver from "resize-observer-polyfill";
import { Spring, Transition } from "react-spring/renderprops-universal";

import { connect } from "react-redux";
import { fetchData } from "../../store";
import { setSearchQuery } from "../../store/products/actions";

function NavBar(props) {
  const { products, search, fetchData } = props;
  const useStyles = createUseStyles({
    container: {
      position: "fixed",
      zIndex: "100",
      left: "0",
      right: "0",
    },
  });
  const classes = useStyles();
  const [transform, setTransform] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  const [ro] = useState(
    () =>
      new ResizeObserver(([entry]) => {
        console.log("entry.contentRect", entry.contentRect);
        setNavHeight(entry.contentRect.height);
      })
  );
  const ref = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (ref.current) ro.observe(ref.current);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navHeight]);
  const handleScroll = () => {
    setTransform(document.body.getBoundingClientRect().top < -navHeight);
    console.log(document.body.getBoundingClientRect().top, navHeight);
  };

  const handleSearch = (query) => {
    search(query);
    fetchData("http://localhost:3002/", "products");
  };
  return (
    <Spring
      from={{
        opacity: transform ? "0" : "1",
        transform: `translate3d(0,${transform ? -20 : 0}px, 0)`,
        background:
          "linear-gradient(135deg, rgb(185, 198, 109) 0%, rgb(34, 48, 17) 100%)",
      }}
      to={{
        opacity: "1",
        transform: `translate3d(0,0, 0)`,
        background:
          "linear-gradient(135deg, rgb(192, 199, 165) 0%, rgb(31, 44, 31) 100%)",
      }}
      reverse={!transform}
      reset={transform}
    >
      {(props) => (
        <div className={classes.container} style={{ ...props }} ref={ref}>
          <Navbar
            className={"d-flex justify-content-around"}
            style={{ padding: "1rem 0" }}
          >
            <Navbar.Brand as={Link} to={"/"}>
              Strive Amazon
            </Navbar.Brand>

            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={products.filter.name}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </Form>
            <MdAddShoppingCart style={{ color: "white", fontSize: "2rem" }} />
          </Navbar>
        </div>
      )}
    </Spring>
  );
}

export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    fetchData: (endpoint, param, id) => {
      dispatch(fetchData(endpoint, param, id));
    },
    search: (query) => {
      dispatch(setSearchQuery(query));
    },
  })
)(NavBar);
