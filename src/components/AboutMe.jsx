import React from "react";
import pedagogie from "./img/icons/pedagogie.svg";
import flexibilite from "./img/icons/flex.png";
import initiative from "./img/icons/initiative.svg";
import curiosite from "./img/icons/curio.svg";
import resilience from "./img/icons/resili.svg";
import persona from "./img/icons/empathyTest.svg";
import parcours from "./img/icons/parcours.png";
import proto from "./img/icons/proto.svg";
import test from "./img/icons/test.svg";
import accessibilite from "./img/icons/access.svg";
import sprint from "./img/icons/sprint.svg";
import facilitation from "./img/icons/facilitation.svg";
import thinking from "./img/icons/thinking.svg";
import bench from "./img/icons/bench.png";

import "./styles/aboutMe.css";

function AboutMe() {
  return (
    <div id="mainBloc">
      <div className="bloc">
        <h1 className="titreCaracteristique">SAVOIR-ETRE</h1>

        <div className="blocText">
          <div className="titreIcone">
            <img className="icone" src={pedagogie} alt="icone pedagogie"></img>
            <div className="text-section">
              <h3>PEDAGOGIE</h3>
              <p>enseignement de l'anglais aux 4 à 14 ans</p>
            </div>
          </div>

          <div className="titreIcone">
            <img
              className="icone"
              src={flexibilite}
              alt="icone flexibility"
            ></img>
            <div className="text-section">
              <h3> FLEXIBILITE</h3>

              <p>
                {" "}
                transmis par le voyage,
                <p>l'exercice dans divers secteurs pro,</p>
                <p>en équipe ou solo</p>
              </p>
            </div>
          </div>

          <div className="titreIcone">
            <img
              className="icone"
              src={initiative}
              alt="icone initiative"
            ></img>
            <div className="text-section">
              <h3> INITIATIVE, ORGANISATION </h3>

              <p>chargé d'évenementiel associatif </p>
            </div>
          </div>

          <div className="titreIcone">
            <img className="icone" src={curiosite} alt="icone curiosite"></img>
            <div className="text-section">
              <h3> CURIOSITE, SYNTHESE</h3>
              <p>
                avoir une vision d'ensemble pour répondre à une problématique
                dans mon quotidien
              </p>
            </div>
          </div>

          <div className="titreIcone">
            <img
              className="icone"
              src={resilience}
              alt="icone resilience"
            ></img>
            <div className="text-section">
              <h3> INTROSPECTION, DISCIPLINE,RESILIENCE </h3>
              <p>Voilà un 3 en 1 nécéssaire pour la gestion du stress</p>
            </div>
          </div>
        </div>
      </div>

      <div className="blocJaune">
        <h1 className="titreCaracteristique">SAVOIR-FAIRE</h1>

        {/*SAVOIR-FAIRE*/}
        <div className="blocText">
          <div className="titreIcone">
            <img className="icone" src={persona} alt="icone pedagogie"></img>
            <div className="text-sectionJaune">
              <h3>PERSONA</h3>
              <p>Test d'empathie et carte empathie</p>
            </div>
          </div>

          <div className="titreIcone">
            <img className="icone" src={parcours} alt="icone flexibility"></img>
            <div className="text-sectionJaune">
              <h3> PARCOURS UTILISATEUR</h3>
              <ul className="listDetails">
                <li>User flow, roadmap</li>
                <li>Storytelling</li>
                <li>Architecture de l'informations</li>
              </ul>
            </div>
          </div>

          <div className="titreIcone">
            <img className="icone" src={proto} alt="icone initiative"></img>
            <div className="text-sectionJaune">
              <h3> PROTOTYPAGE</h3>
              <ul className="listDetails">
                <li>Design system</li>
                <li>Responsive</li>
              </ul>
            </div>
          </div>
          <div className="titreIcone">
            <img className="icone" src={test} alt="icone curiosite"></img>
            <div className="text-sectionJaune">
              <h3> TEST UTILISATEUR</h3>
              <ul className="listDetails">
                <li>Recrutement</li>
                <li>Guide d'interview</li>
                <li>Lead d'interview</li>
              </ul>
            </div>
          </div>
          <div className="titreIcone">
            <img
              className="icone"
              src={accessibilite}
              alt="icone resilience"
            ></img>
            <div className="text-sectionJaune">
              <h3> ACCESSIBILITE</h3>
              <p>Normes RGAA</p>
            </div>
          </div>
        </div>
      </div>

      {/*METHODO*/}
      <div className="bloc">
        <h1 className="titreCaracteristique">METHODOLOGIES</h1>

        <div className="blocText">
          <div className="titreIcone">
            <img className="icone" src={sprint} alt="icone pedagogie"></img>
            <div className="text-section">
              <h3> DESIGN SPRINT</h3>
              <p>
                Méthode initée par Google, pour une création rapide d'un maximum
                d'idées
              </p>
            </div>
          </div>

          <div className="titreIcone">
            <img
              className="icone"
              src={facilitation}
              alt="icone flexibility"
            ></img>
            <div className="text-section">
              <h3> FACILITATION </h3>

              <p>Animation d'ateliers d'intelligence collective</p>
            </div>
          </div>

          <div className="titreIcone">
            <img className="icone" src={thinking} alt="icone initiative"></img>
            <div className="text-section">
              <h3> DESIGN THINKING</h3>
              <p>Atelier de créativite</p>
            </div>
          </div>

          <div className="titreIcone">
            <img className="icone" src={bench} alt="icone curiosite"></img>
            <div className="text-section">
              <h3> BENCHMARK</h3>
              <p>Veille et inspiration</p>
            </div>
          </div>
        </div>
      </div>
      {/*OUTILS*/}
      <div className="blocJaune">
        <h1 className="titreCaracteristique">OUTILS</h1>

        <p>PROTOTYPAGE Figma</p>
        <p>TEST UTILISATEUR Zoom,Google Meet, Whereby,Jitsi </p>
        <p>ANALYSE Google Analytics,Hotjar, Optimizely</p>
        <p>COLLABORATIF Miro,Trello</p>
        <p>COMMUNICATION Discord,Slack,G Suite</p>
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
