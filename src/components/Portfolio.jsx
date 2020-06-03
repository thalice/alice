import React from "react";
import "./styles/portfolio.css";
import Jeff from "./Jeff";
import Promod from "./Promod";
import Rewood from "./Rewood";
import Voyagerz from "./Voyagerz";
import Kokpit from "./Kokpit";
import Meex from "./Meex";

function Portfolio() {
  return (
    <div id="portfolioBody">
      {" "}
      <div>
        <h1 className="titre1">COLLABORATION</h1>
        <p>
          Etudes de cas en collaboration avec des entreprises: création d'un
          parcours utilisateur ou refonte d'un site existant.
        </p>
        <Rewood />
        <Voyagerz /> <h4>En cours de rédaction</h4>
        <Kokpit />
        <h4>En cours de rédaction</h4>
        <Meex />
        <h4>En cours de rédaction</h4>
      </div>
      <div>
        <h1 className="titre1"> CAS PRATIQUES</h1>
        <p>Exercices pratiques en cours de formation.</p>

        <Jeff id="jeffPadding" />

        <Promod />
      </div>
    </div>
  );
}
export default Portfolio;
