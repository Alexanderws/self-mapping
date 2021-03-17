import React from "react";
import { RouteComponentProps } from "react-router-dom";

import OkButton from "../../components/ok-button/ok-button.component";
import Chevron from "../../assets/chevron.icon";

const ResultPage: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <div>
      <h1 className="osg-u-heading-1">Ferdig</h1>
      <p>
        Du har svart på samtlige 20 påstander. Basert på svarene dine
        anbefaler vi at du ser gjennom hvilke forebyggende tilbud som
        finnes.
      </p>
      <p style={{ marginBottom: "32px" }}>
        Du kan også velge å sende inn svarene dine til din bydel.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <OkButton
          type="tertiary"
          style={{ marginBottom: "16px" }}
          onClick={() => history.push("mapping")}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              Se forslag til forebyggende tilbud som kan passe for deg
            </span>
            <Chevron />
          </div>
        </OkButton>
        <OkButton type="tertiary" onClick={() => history.push("mapping")}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              Send en henvendelse til din bydel for å bli kontaktet av
              helsepersonell
            </span>
            <Chevron />
          </div>
        </OkButton>
      </div>
    </div>
  );
};

export default ResultPage;
