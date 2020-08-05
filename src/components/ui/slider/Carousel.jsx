import React from "react";
import { createUseStyles } from "react-jss";
import Slide from "./Slide";
function Carousel(props) {
  const useStyles = createUseStyles({
    container: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      width: "100%",
      height: "90%",
      padding: "1rem 0",
    },
  });
  const classes = useStyles();
  const [offsetRadius, setOffsetRadius] = React.useState(5);
  const [index, setIndex] = React.useState(0);
  const { sampleData } = props;

  React.useEffect(() => {
    const i = sampleData.findIndex(
      (item) => item.index === parseInt(props.selected)
    );
    setIndex(i);
    console.log(i, "////////////////");
  });

  const mod = (a, b) => {
    // console.log("mod", ((a % b) + b) % b);
    console.log("<<<<", ((a % b) + b) % b);
    return ((a % b) + b) % b;
  };
  const modBySlidesLength = (index) => {
    return mod(index, sampleData.length);
  };
  const moveSlide = (direction, id) => {
    setIndex(modBySlidesLength(index + direction));
    props.setSelected(id);
  };

  const clampOffsetRadius = (offsetRadius) => {
    const upperBound = Math.floor((sampleData.length - 1) / 2);
    console.log("upperBound", upperBound);
    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }
    return offsetRadius;
  };
  const getSlidesToDisplay = () => {
    const offsetR = clampOffsetRadius(offsetRadius);
    const slidesArr = new Array();
    for (let i = -offsetR; i < 1 + offsetR; i++) {
      slidesArr.push(sampleData[modBySlidesLength(index + i)]);
    }
    console.log(slidesArr);
    return slidesArr;
  };

  return (
    <div className={classes.container}>
      {getSlidesToDisplay().map((slide, i) => (
        <Slide
          item={slide}
          key={slide.index}
          offsetRadius={clampOffsetRadius(offsetRadius)}
          index={i}
          moveSlide={moveSlide}
        />
      ))}
    </div>
  );
}

export default Carousel;
