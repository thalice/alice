import React from "react";
import "./styles/portfolio.css";
import Jeff from "./Jeff";
import Promod from "./Promod";
import Rewood from "./Rewood";
import Voyagerz from "./Voyagerz";
import Kokpit from "./Kokpit";

function Portfolio() {
  return (
    <div id="portfolioBody">
      {" "}
      <div>
        <h1 className="titre1">ETUDES DE CAS</h1>
        <h3>
          Collaboration avec des entreprises lors de la formation UX Design
          PopSchool
        </h3>
        <p id="remarquesProto">
          <strong>
            REMARQUES SUR LE PROTOTYPAGE :
            <p>- Les prototypes sont réalisés en UNE JOURNEE.</p>
            <p>
              - Ils sont donc partiellement fonctionnels: ils permettent de se
              faire une vision rapide du parcours utilisateur qui doit être
              testé. Les zones cliquables apparaissent en surlignement bleu.{" "}
            </p>
            <p>
              - Le graphisme n'est pas pris en compte. L'UI( interface
              utilisateur) est laissé de côté dans le process UX.
            </p>{" "}
          </strong>
          N'hésitez pas à consulter l'étude de cas dans la zone "Tester le
          prototype" pour connaître le parcours que nous cherchons à tester{" "}
        </p>{" "}
        <Rewood />
        <Kokpit />
        <Voyagerz />
      </div>
      <div>
        <h1 className="titre1"> CAS PRATIQUES</h1>
        <h3>Exercices pratiques de refonte d'applications existantes.</h3>

        <Jeff />
        <Promod />
      </div>
    </div>
  );
}
export default Portfolio;
