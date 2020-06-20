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
        <h1 className="titre1">ETUDES DE CAS</h1>
        <p>
          Exempes de collaboration avec des entreprises qui nous ont fait
          confiance
        </p>
        <p>
          <strong>REMARQUES SUR LE PROTOTYPAGE :</strong> par soucis de temps,
          les prototypes sont partiellement fonctionnelles. Ils permettent de se
          faire une vision rapide du parcours utilisateur qui doit être testé.
          Seules les fonctions qui répondent au parcours sont
          cliquables.N'hésitez pas à consulter l'étude de cas dans la zone
          "Tester le prototype" pour connaître le parcours que nous cherchons à
          tester{" "}
        </p>
        <Rewood /> <Kokpit />
        <h4>En cours de rédaction</h4>
        <Voyagerz /> <h4>En cours de rédaction</h4>
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
