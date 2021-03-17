import React from "react";
import { RouteComponentProps } from "react-router-dom";

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
      <p>
        Du må svare på noen spørsmål. For å kunne sende inn henvendelsen
        din når du er ferdig må du logge inn med ID-porten.
      </p>
      <button onClick={() => history.push("mapping")}>START</button>
    </div>
  );
};

export default StartPage;
