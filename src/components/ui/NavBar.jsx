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

function NavBar(props) {
  const { searchQuery, handleSearch } = props;
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
        setNavHeight(-entry.contentRect.height);
      })
  );
  const ref = useRef();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (ref.current) ro.observe(ref.current);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
  };
  return (
    <div className={classes.container} ref={ref}>
      <Navbar
        bg="dark"
        variant="dark"
        className={"d-flex justify-content-around"}
      >
        <Navbar.Brand as={Link} to={"/"}>
          Strive Amazon
        </Navbar.Brand>

        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Form>
        <MdAddShoppingCart style={{ color: "white", fontSize: "2rem" }} />
      </Navbar>
    </div>
  );
}

export default NavBar;
