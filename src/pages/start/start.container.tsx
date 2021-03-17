import React from "react";
import { RouteComponentProps } from "react-router-dom";

import OkButton from "../../components/ok-button/ok-button.component";
import Chevron from "../../assets/chevron.icon";

const StartPage: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <div>
      <h1 className="osg-u-heading-1">
        Kontaktpunkt for helse- og omsorgstjenester
      </h1>
      <p>
        For at vi skal forstå din situasjon best mulig og komme i kontakt
        med deg raskt, må vi vite litt mer om tilstanden din akkurat nå.
      </p>
      <p style={{ marginBottom: "32px" }}>
        Du må svare på noen spørsmål. For å kunne sende inn henvendelsen
        din når du er ferdig må du logge inn med ID-porten.
      </p>
      <OkButton
        style={{ width: "100%" }}
        type="tertiary"
        onClick={() => history.push("mapping")}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: "16px" }}>Start her</span>
          <Chevron />
        </div>
      </OkButton>
    </div>
  );
};

export default StartPage;
