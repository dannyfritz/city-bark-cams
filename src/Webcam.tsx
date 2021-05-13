import React, { useRef, useState } from "react";
import { useWindowResize, useViewportSpy } from "beautiful-react-hooks"; 

import "./Webcam.scss";

export const createWebcamUrl = (cameraNum, width, height) =>
  `http://idogcamcloud5.dnsalias.com:9500/video?cameraNum=${cameraNum}&req_fps=0&width=${width}&height=${height}&auth=bG9kbzY0OmxvZG82NA==`;

export const Webcam = ({
  cameraNum,
}) => {
  const ref = useRef();
  const isVisible = useViewportSpy(ref);
  const [width, setWidth] = useState(window.innerWidth);
  useWindowResize(() => {
    setWidth(window.innerWidth);
  });
  const height = width * 9/16;
  const url = createWebcamUrl(cameraNum, width, height);
  console.log({cameraNum, isVisible});
  return (
    <iframe ref={ref} className="webcam" height={height} src={isVisible ? url : 'about:blank'} />
  );
};
