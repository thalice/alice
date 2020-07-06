import React from "react";
import imageCv from "./img/cv.png";
import expertise from "./img/aboutMe/expertise.png";
import outils from "./img/aboutMe/outils.png";
import methodo from "./img/aboutMe/methodo.png";
import soft from "./img/aboutMe/soft.png";

import "./styles/aboutMe.css";

function AboutMe() {
  return (
    <div id="mainBloc">
      <div className="blocUn">
        <div className="bloc">
          <h1>SAVOIR-FAIRE</h1>

          <p>PERSONA carte empathie </p>
          <p>PARCOURS UTILISATEUR roadmap</p>
          <p>PROTOTYPAGE responsive</p>
          <p>TEST UTILISATEUR recrutement,guide interview </p>
          <p>ACCESSIBILITE normes rgaa</p>
        </div>

        <div className="bloc">
          <h1>METHODOLOGIE</h1>

          <p>
            DESIGN SPRINT Méthode initée par Google, pour une création rapide
            d'un maximum d'idées{" "}
          </p>
          <p>FACILITATION Animation d'ateliers d'intelligence collective</p>
          <p>DESIGN THINKING </p>
          <p>BENCHMARK</p>
        </div>
      </div>

      <div className="blocUn">
        <div className="bloc">
          <h1>SAVOIR-ETRE</h1>

          <p> PEDAGOGIE enseignant l'anglais aux 4 à 14ans</p>
          <p>
            {" "}
            ADAPTABILITE transmis par le voyage et divers secteurs de travail,en
            équipe ou solo{" "}
          </p>
          <p>INITIATIVE + ORGANISATION chargé d'évenementiel associatif </p>
          <p>
            ESPRIT DE SYNTHESE+ CURIOSITE vision d'ensemble pour répondre à une
            problématique...c'est pour ça que je suis UX designer!
          </p>
          <p>
            INTROSPECTION,DISCIPLINE et RESILIENCE 3 en 1 nécéssaire pour la
            gestion du stress
          </p>
        </div>

        <div className="bloc">
          <h1>OUTILS</h1>

          <p>PROTOTYPAGE Figma</p>
          <p>TEST UTILISATEUR Zoom,Google Meet, Whereby,Jitsi </p>
          <p>ANALYSE Google Analytics,Hotjar, Optimizely</p>
          <p>COMMUNICATION Discord,Slack,G Suite</p>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;

{
  /*
    DONT FORFGET TO IMPORT import ReactTooltip from 'react-tooltip';
    
    <div id="list">
    <div
        className="expert"
        data-tip
        data-for="expert"
        data-class="expert"
    >
        <span id="fontChange">Expertise</span>
    </div>
    <ReactTooltip id="expert" place="top" type="info">
        <p>
            <span>EXPERTISE</span>:
        </p>
        <p>
            * <span className="underline">Audit accessibilité</span>
        </p>
        <p>
            *{' '}
            <span className="underline">
                Persona/Parcours utilisateur
            </span>
        </p>{' '}
        <p>
            *{' '}
            <span className="underline">
                Test utilisateur (recrutement,interview)
            </span>
        </p>{' '}
        <p>
            *{' '}
            <span className="underline">
                Prototypage responsive
            </span>
        </p>{' '}
    </ReactTooltip>
    <div
        className="metho"
        data-tip
        data-for="metho"
        data-class="metho"
    >
        <span id="fontChange">Méthodologie</span>
    </div>
    <ReactTooltip id="metho" place="top" type="info">
        <p>
            <span>METHODOLOGIE</span>:
        </p>
        <p>
            * <span className="underline">Design Sprint</span>
        </p>
        <p>
            * <span className="underline">Design Thinking</span>
        </p>{' '}
        <p>
            *{' '}
            <span className="underline">
                Facilitation, Intelligence collective
            </span>
        </p>{' '}
        <p>
            * <span className="underline">Benchmark</span>
        </p>{' '}
    </ReactTooltip>
    <div
        className="outil"
        data-tip
        data-for="outil"
        data-class="outil"
    >
        <span id="fontChange">Outil</span>
    </div>
    <ReactTooltip id="outil" place="top" type="info">
        <p>
            <span>OUTIL</span>:
        </p>
        <p>
            * <span className="underline">Prototypage: FIGMA></span>
        </p>
        <p>
            * <span className="underline">Interview: Zoom</span>
        </p>{' '}
        <p>
            *{' '}
            <span className="underline">
                Analyse: Google Analytics, Hotjar,Optimizely
            </span>
        </p>{' '}
        <p>
            *{' '}
            <span className="underline">
                A distance: Discord, Slack, Zoom
            </span>
        </p>{' '}
    </ReactTooltip>
    <div
        className="soft"
        data-tip
        data-for="soft"
        data-class="soft"
    >
        <span id="fontChange">Soft skills</span>
    </div>
    <ReactTooltip id="soft" place="top" type="info">
        <p>
            <span>SOFT-SKILLS</span>:
        </p>
        <p>
            *{' '}
            <span className="underline">
                <strong>Pédagogie et communication: </strong>
                enseignant le français et l’anglais aux 4 à 14 ans,
                défenseure d’une pédagogie alternative.
            </span>
        </p>
        <p>
            *{' '}
            <span className="underline">
                <strong>Flexibilité/ adaptabilité: </strong>travail
                dans divers secteurs, en solo ou travail collectif.
                Adaptabilité pour des voyages sereins.
            </span>
        </p>{' '}
        <p>
            *{' '}
            <span className="underline">
                <strong>Initiative et organisation:</strong> chargé
                d’évenementiel de plus de 300 personnes dans un
                cadre associatif durant 12 ans.
            </span>
        </p>{' '}
        <p>
            *{' '}
            <span className="underline">
                <strong>
                    Introspection,discipline et résilience
                </strong>
                <i>(c’est comme l’après-shampoing, un 3 en 1):</i>
                nécessaire à la gestion du stress !!
            </span>
        </p>{' '}
        <p>
            *{' '}
            <span className="underline">
                <strong>
                    Esprit de synthèse et curiosité à la fois:
                </strong>{' '}
                j’aime la vision d’ensemble pour répondre à une
                problématique précise, c’est pourquoi je suis UX
                Designer!
            </span>
        </p>{' '}
    </ReactTooltip>
</div>*/
  /* <div id="bodyAboutMe">
      <div className="cardByTwo">
        <img className="card" src={expertise} alt="CVAlice" />

        <img className="card" src={outils} alt="CVAlice" />
      </div>
      <div id="columnCv">
        <img id="cv" src={imageCv} alt="CVAlice" />
      </div>
      <div className="cardByTwo">
        <img className="card" src={methodo} alt="CVAlice" />

        <img className="card" src={soft} alt="CVAlice" />
      </div>
    </div>*/
}
