import React from "react";
import { createUseStyles } from "react-jss";
import { Spring, config } from "react-spring/renderprops";
function Slide(props) {
  const useStyle = createUseStyles({
    slideContainer: {
      position: "absolute",
      height: "100%",
      width: "10%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      transformOrigin: " 50% 50%",
    },
    slideCard: {
      position: "relative",
      maxWidth: "100%",
      minWidth: "90%",
      height: "100%",
      background: "#f5ebe7",
      // fontSize: "35px",
      display: "flex",
      // alignItems: "center",
      paddingTop: "4rem",
      justifyContent: "center",
      transformOrigin: "50% 50%",
      boxShadow: "  rgba(194, 175, 169, 0.3) 5px 10px 15px 2px",
      borderRadius: "10px",
      backgroundColor: "white",
    },
  });
  const classes = useStyle();
  const { item, index, moveSlide, offsetRadius, down, delta } = props;
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));
  const translateXoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateX = -50;
  if (offsetRadius !== 0) {
    if (index === 0) {
      translateX = 0;
    } else if (index === totalPresentables - 1) {
      translateX = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateX += delta[1] / (offsetRadius + 1);
    if (translateX > -40) {
      moveSlide(-1);
    }
    if (translateX < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateX += translateXoffset;
  } else if (offsetFromMiddle < 0) {
    translateX -= translateXoffset;
  }
  React.useEffect(() => {
    console.log(translateX);
  });
  return (
    <Spring
      // from={{
      //   transform: `translateX(-${100}%) translateY(0%)  scale(1)`,
      //   left: "0%",
      //   opacity: 0,
      // }}
      to={{
        transform: `translateX(${translateX}%) translateY(0%)   `,
        left: `${
          offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
        }%`,
        // transform: `translateX(${75}%) translateY(0%) `,
        // left: "75%",
        opacity: distanceFactor * distanceFactor,
      }}
      config={{ tension: 120, friction: 14 }}
    >
      {(style) => (
        <div
          className={classes.slideContainer}
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2),
          }}
        >
          <div
            onClick={() => moveSlide(offsetFromMiddle, item.index)}
            className={classes.slideCard}
          >
            {item.index}
          </div>
        </div>
      )}
    </Spring>
  );
}

export default Slide;
