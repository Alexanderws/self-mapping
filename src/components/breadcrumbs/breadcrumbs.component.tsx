import React from "react";

import Chevron from "../../assets/chevron.icon";

import "./breadcrumbs.styles.scss";

const Breadcrumbs: React.FC = () => {
  return (
    <a
      className="osg-u-text-7 vv-breadcrumbs"
      href="/"
      style={{
        display: "flex",
        marginBottom: "32px",
      }}
    >
      <Chevron direction="left" size={12} />
      <span style={{ marginLeft: "8px" }}>
        Kontaktpunkt for helse- og omsorgstjenester
      </span>
    </a>
  );
};

export default Breadcrumbs;
