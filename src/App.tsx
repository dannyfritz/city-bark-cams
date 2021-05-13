import React from "react";
import { Webcam } from "./Webcam";

import "./App.scss";

export const App = () => {
  return (
    <main>
      <Webcam cameraNum={155} />
      <Webcam cameraNum={160} />
      <Webcam cameraNum={159} />
      <Webcam cameraNum={158} />
      <Webcam cameraNum={157} />
      <Webcam cameraNum={156} />
      <Webcam cameraNum={153} />
    </main>
  );
}
