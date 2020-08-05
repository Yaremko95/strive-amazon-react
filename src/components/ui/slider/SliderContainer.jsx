import React from "react";
import { createUseStyles } from "react-jss";
import Carousel from "./Carousel";
import { Spring } from "react-spring/renderprops";
const sample = [
  {
    index: 21,
    title: "1",
  },
  {
    index: 22,
    title: "2",
  },
  {
    index: 23,
    title: "3",
  },
  {
    index: 24,
    title: "4",
  },
  {
    index: 25,
    title: "5",
  },
  {
    index: 26,
    title: "6",
  },
  {
    index: 27,
    title: "7",
  },
  {
    index: 28,
    title: "8",
  },
  {
    index: 29,
    title: "6",
  },
  {
    index: 30,
    title: "7",
  },
  {
    index: 31,
    title: "8",
  },
  {
    index: 32,
    title: "8",
  },
  {
    index: 33,
    title: "9",
  },
];

function SliderContainer(props) {
  const [selected, setSelected] = React.useState(22);
  const useStyles = createUseStyles({
    container: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      height: "200px",
      left: "0",
      top: "100px",
      overflow: "hidden",

      // boxShadow: "rgba(194, 175, 169, 0.3) 5px 10px 15px 2px",
      width: "100vw",
      backgroundColor: "pink",
    },
  });
  const [data, setData] = React.useState(props.data);
  console.log(data);
  React.useEffect(() => {
    setData(props.data);
    console.log("...........................", data);
  });
  const classes = useStyles();
  return data ? (
    <div className={classes.container}>
      <Carousel
        selected={selected}
        setSelected={setSelected}
        sampleData={sample}
      />
    </div>
  ) : (
    <div>loading</div>
  );
}

export default SliderContainer;
