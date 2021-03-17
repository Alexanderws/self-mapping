import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import VARIABLES from "../../function-variables";

import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import OkButton from "../../components/ok-button/ok-button.component";

const ALTERNATIVE_ANSWERS: string[] = [
  "Helt enig",
  "Litt enig",
  "Hverken enig eller uenig",
  "Litt uenig",
  "Helt uenig",
];

const MappingPage: React.FC<RouteComponentProps> = ({ history }) => {
  const [mappingIndex, setMappingIndex] = useState(0);

  const currentVariable = VARIABLES[mappingIndex]
    ? VARIABLES[mappingIndex]
    : { name: "ukjent", description: "ukjent" };

  const handleNextClick = () => {
    if (mappingIndex < VARIABLES.length - 1) {
      setMappingIndex((prevState) => prevState + 1);
    } else {
      history.push("result");
    }
  };

  const handlePreviousClick = () => {
    if (mappingIndex > 0) {
      setMappingIndex((prevState) => prevState - 1);
    } else {
      history.push("");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [mappingIndex]);

  return (
    <div>
      <Breadcrumbs />
      <div style={{ marginBottom: "16px" }}>
        <span style={{ fontWeight: 600 }}>{mappingIndex + 1}</span> av{" "}
        {VARIABLES.length}
      </div>
      <h1 className="osg-u-heading-3">{currentVariable.name}</h1>
      <p style={{ marginBottom: "16px" }}>
        {currentVariable.description}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "32px",
        }}
      >
        {ALTERNATIVE_ANSWERS.map((answer) => {
          return (
            <OkButton
              onClick={handleNextClick}
              style={{ marginBottom: "8px" }}
              type="alternative"
              key={answer}
            >
              {answer}
            </OkButton>
          );
        })}
        <div
          style={{
            margin: "8px auto 16px auto",
            width: "80%",
            height: "2px",
            backgroundColor: "#E5E5E5",
          }}
        />
        <OkButton
          onClick={handleNextClick}
          style={{ marginBottom: "8px" }}
          type="tertiary"
        >
          Hopp over dette spørsmålet
        </OkButton>
      </div>
      <OkButton onClick={handlePreviousClick} type="secondary">
        Forrige side
      </OkButton>
    </div>
  );
};

export default MappingPage;
