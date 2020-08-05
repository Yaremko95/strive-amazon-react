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
import { interpolate, useSpring, animated, config } from "react-spring";

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
  }, []);
  const handleScroll = () => {
    // setScrollPos(document.body.getBoundingClientRect().top);
    setTransform(document.body.getBoundingClientRect().top < -navHeight);
    // setScrollPos({
    //   pos: document.body.getBoundingClientRect().top,
    //   show: document.body.getBoundingClientRect().top < -navHeight,
    // });
  };
  // const { o, xyz } = useSpring({
  //   from: { o: transform ? 0 : 1, xyz: transform ? [0, -20, 0] : [0, 0, 0] },
  //   to: { o: 1, xyz: [0, 0, 0] },
  //   reset: transform,
  //   reverse: !transform,
  // });
  return (
    <Spring
      from={{
        opacity: transform ? "0" : "1",
        transform: `translate3d(0,${transform ? -20 : 0}px, 0)`,
      }}
      to={{ opacity: "1", transform: `translate3d(0,0, 0)` }}
      reverse={!transform}
      reset={transform}
    >
      {(props) => (
        <div className={classes.container} style={{ ...props }} ref={ref}>
          <Navbar
            className={"d-flex justify-content-around"}
            bg={"dark"}
            variant={"dark"}
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
      )}
    </Spring>
    // <animated.div
    //   className={classes.container}
    //   style={{
    //     opacity: o.interpolate([0.1, 0.2, 0.6, 1], [1, 0.1, 0.5, 1]),
    //     transform: xyz.interpolate(
    //       (x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`
    //     ),
    //   }}
    //   ref={ref}
    // >
    //   <Navbar
    //     className={"d-flex justify-content-around"}
    //     bg={"dark"}
    //     variant={"dark"}
    //   >
    //     <Navbar.Brand as={Link} to={"/"}>
    //       Strive Amazon
    //     </Navbar.Brand>
    //
    //     <Form inline>
    //       <FormControl
    //         type="text"
    //         placeholder="Search"
    //         className="mr-sm-2"
    //         value={searchQuery}
    //         onChange={(e) => handleSearch(e.target.value)}
    //       />
    //     </Form>
    //     <MdAddShoppingCart style={{ color: "white", fontSize: "2rem" }} />
    //   </Navbar>
    // </animated.div>

    // <Transition
    //   items={transform}
    //   enter={{ opacity: 1, height: navHeight }}
    //   from={{ opacity: 0, height: 0 }}
    //   leave={{ opacity: 0, height: 0 }}
    // >
    //   {(item) =>
    //     item &&
    //     ((props) => (
    //       <div className={classes.container} style={props} ref={ref}>
    //         <Navbar
    //           bg="dark"
    //           variant="dark"
    //           className={"d-flex justify-content-around"}
    //         >
    //           <Navbar.Brand as={Link} to={"/"}>
    //             Strive Amazon
    //           </Navbar.Brand>
    //
    //           <Form inline>
    //             <FormControl
    //               type="text"
    //               placeholder="Search"
    //               className="mr-sm-2"
    //               value={searchQuery}
    //               onChange={(e) => handleSearch(e.target.value)}
    //             />
    //           </Form>
    //           <MdAddShoppingCart style={{ color: "white", fontSize: "2rem" }} />
    //         </Navbar>
    //       </div>
    //     ))
    //   }
    // </Transition>
  );
}

export default NavBar;
