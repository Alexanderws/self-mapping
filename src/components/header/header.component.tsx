import React from "react";

import OsloLogo from "../../assets/oslo-logo.icon";
import "./header.styles.scss";

const Header: React.FC = () => {
  return (
    <div className="vv-header">
      <a href="/">
        <OsloLogo />
      </a>
    </div>
  );
};

export default Header;
