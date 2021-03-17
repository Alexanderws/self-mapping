import React from "react";

import "./main.styles.scss";

const MainContainer: React.FC = (props) => {
  return (
    <div className="vv-outer-container">
      <div className="vv-inner-container">{props.children}</div>
    </div>
  );
};

export default MainContainer;
