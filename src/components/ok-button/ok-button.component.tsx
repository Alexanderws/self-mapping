import React from "react";

import "./ok-button.styles.scss";

type ButtonType = "primary" | "secondary" | "tertiary" | "alternative";

const OkButton: React.FC<{
  style?: React.CSSProperties;
  type?: ButtonType;
  onClick?: () => void;
}> = (props) => {
  const { children, type, onClick, ...otherProps } = props;

  const extraClass = `vv-button-${type}`;

  return (
    <button {...otherProps} className={extraClass} onClick={onClick}>
      {children}
    </button>
  );
};

OkButton.defaultProps = {
  type: "secondary",
};

export default OkButton;
