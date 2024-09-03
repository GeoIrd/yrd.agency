// src/components/LottieAnimation/LottieAnimation.js
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/animation.json";

const LottieAnimation = () => {
  return (
    <Lottie
      animationData={animationData}
      style={{ width: "150vw", height: "100%" }}
    />
  );
};

export default LottieAnimation;
