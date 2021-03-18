import React from "react";

import VARIABLES from "../../function-variables";

import OkButton from "../../components/ok-button/ok-button.component";

const ALTERNATIVE_ANSWERS: string[] = [
  "Helt enig",
  "Litt enig",
  "Hverken enig eller uenig",
  "Litt uenig",
  "Helt uenig",
];

const VariablesPage: React.FC<{
  mappingIndex: number;
  onNextClick: () => void;
  onPreviousClick: () => void;
}> = (props) => {
  const { mappingIndex, onNextClick, onPreviousClick } = props;

  const currentVariable = VARIABLES[mappingIndex]
    ? VARIABLES[mappingIndex]
    : { name: "ukjent", description: "ukjent" };

  /*   const handleNextClick = () => {
    if (mappingIndex < VARIABLES.length - 1) {
      setMappingIndex((prevState) => prevState + 1);
    } else {
      history.push("result");
    }
  }; */

  /*   const handlePreviousClick = () => {
    if (mappingIndex > 0) {
      setMappingIndex((prevState) => prevState - 1);
    } else {
      history.push("");
    }
  }; */

  /*   useEffect(() => {
    window.scrollTo(0, 0);
  }, [mappingIndex]);
 */
  return (
    <div>
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
              onClick={onNextClick}
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
          onClick={onNextClick}
          style={{ marginBottom: "8px" }}
          type="tertiary"
        >
          Hopp over dette spørsmålet
        </OkButton>
      </div>
      <OkButton onClick={onPreviousClick} type="secondary">
        Forrige side
      </OkButton>
    </div>
  );
};

export default VariablesPage;
