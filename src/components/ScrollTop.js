import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./Images/top.svg";

const ScrollTop = () => {
  return (
    <>
      <ScrollToTop smooth component={<MySVG />} />
    </>
  );
};

export default ScrollTop;
