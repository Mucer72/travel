import { memo } from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loader_container">
      <div className="loader"></div>
    </div>
  );
};

export default memo(LoadingScreen);
