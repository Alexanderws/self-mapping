import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import VARIABLES from "../../function-variables";

import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import OkButton from "../../components/ok-button/ok-button.component";
import VariablesPage from "./variables.component";
import CommentPage from "./comment.component";

const ALTERNATIVE_ANSWERS: string[] = [
  "Helt enig",
  "Litt enig",
  "Hverken enig eller uenig",
  "Litt uenig",
  "Helt uenig",
];

const MappingPage: React.FC<RouteComponentProps> = ({ history }) => {
  const [mappingIndex, setMappingIndex] = useState(0);
  const [isShowingComment, setIsShowingComment] = useState(false);

  const currentVariable = VARIABLES[mappingIndex]
    ? VARIABLES[mappingIndex]
    : { name: "ukjent", description: "ukjent" };

  const handleNextClick = () => {
    if (mappingIndex < VARIABLES.length - 1) {
      setMappingIndex((prevState) => prevState + 1);
    } else if (!isShowingComment) {
      setIsShowingComment(true);
    } else {
      history.push("result");
    }
  };

  const handlePreviousClick = () => {
    if (isShowingComment) {
      setIsShowingComment(false);
    } else if (mappingIndex > 0) {
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
      {isShowingComment ? (
        <CommentPage
          onNextClick={handleNextClick}
          onPreviousClick={handlePreviousClick}
        />
      ) : (
        <VariablesPage
          mappingIndex={mappingIndex}
          onNextClick={handleNextClick}
          onPreviousClick={handlePreviousClick}
        />
      )}
    </div>
  );
};

export default MappingPage;
