import React from "react";

import VARIABLES from "../../function-variables";

import OkButton from "../../components/ok-button/ok-button.component";

const CommentPage: React.FC<{
  onNextClick: () => void;
  onPreviousClick: () => void;
}> = (props) => {
  const { onNextClick, onPreviousClick } = props;

  return (
    <div>
      <h1 className="osg-u-heading-3">
        Er det mer vi trenger å vite om deg?
      </h1>
      <label
        htmlFor="tekstFelt"
        style={{
          marginBottom: "16px",
          fontWeight: 300,
        }}
      >
        Her kan du legge til informasjon som du mener er relevant for
        fagpersonene i din bydel:
      </label>
      <textarea
        id="tekstFelt"
        placeholder="Skriv her..."
        style={{
          marginBottom: "32px",
          width: "100%",
          height: "200px",
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <OkButton onClick={onPreviousClick} type="secondary">
          Forrige side
        </OkButton>
        <OkButton
          onClick={onNextClick}
          style={{ marginBottom: "8px" }}
          type="tertiary"
        >
          Gå videre
        </OkButton>
      </div>
    </div>
  );
};

export default CommentPage;
