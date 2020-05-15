import React, { useState } from "react";
import logoPromod from "./img/logoPromod.jpg";
import cpnPro from "./img/empathiePro.jpg";
import croquisPro from "./img/croquisPro.jpg";
import itwPro from "./img/itwPro.jpg";
import parcoursPro from "./img/parcoursPro.jpg";
import matricePro from "./img/matricePro.jpg";
import critiquePro from "./img/critiquePro.jpg";
import tunnelPro from "./img/tunnelPro.jpg";
import "./styles/promod.css";

function Promod() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div id="alignLogoBrand">
        {" "}
        <img
          id="proLogo"
          src={logoPromod}
          alt="logo Promod"
          onClick={() => setIsOpen(!isOpen)}
        ></img>{" "}
        <h2 className="open" onClick={() => setIsOpen(!isOpen)}>
          Promod
        </h2>{" "}
      </div>
      {isOpen && (
        <div id="proBody" onClick={() => setIsOpen(!isOpen)}>
          <h1 id="titreCentre"> Promod</h1>
          <span className="close">X</span>
          <h2 className="titrePro2">Projet et contexte</h2>
          <div id="projet">
            <div className="projet-contexte">
              <p>
                <h4>Sujet: </h4>Promod, enseigne de vente en prêt-à-porter
                féminin,avec des points de vente internationaux
              </p>
              <p>
                <h4>Durée:</h4>6 jours
              </p>
              <p>
                <h4>Méthodologie: </h4>Design Sprint
              </p>

              <p>
                <h4>Objectif:</h4>injecter de la personnalisation dans le
                parcours utilisateur de l'application mobile{" "}
              </p>
            </div>
            <div className="projet-contexte">
              <p>
                <h4>Equipe:</h4> 5 apprenants UX Designers à 2 semaines de
                formation
              </p>
              <p>
                <h4>Mon rôle:</h4>
                facilitateur et UX designer
              </p>
              <h4>Les outils utilisés: </h4>
              <ul>
                <li>
                  <strong>tableau et mur blanc:</strong> collage de post-it,
                  intelligence collective
                </li>
                <li>
                  <strong>G Suite & Slack:</strong> partage de documents
                </li>
                <li>
                  <strong>Trello:</strong> prganisation interne TO DO/DOING/DONE
                </li>
                <li>
                  <strong>Figma:</strong> prototypage et test utilisateur
                </li>
              </ul>
              <p>
                <h4>Ce que j'améliorerais:</h4>wording
              </p>
              <p>
                <h4>Ce que j'ai apprécié:</h4>collaboration dans l'équipe,
                benchmark et veille actif, idées riches
              </p>
            </div>
          </div>
          <h2 className="titrePro2">Process Design Sprint</h2>
          <div>
            <h3 className="titrePro3">JOUR 1: COMPRENDRE/CHALLENGER</h3>
            <h4 className="titrePro4">Test application mobile</h4>

            <div className="setupColumn">
              <div className="adjust50">
                TEST D'EMPATHIE: les avis utilisateurs étant mitigés sur
                l'application mobile PROMOD, nous l'avons téléchargé pour
                comprendre les observations de l'utilisateur.Puis,nous avons
                regroupé sous forme de "Comment pourrions-nous?" (CPN) les
                remarques qui revenaient le plus souvent.
                <p>
                  Nous avons priorisé les problématiques sur
                  <strong> {""}la cohérence du parcours </strong>et surtout sur{" "}
                  <strong>la personnalisation</strong>.
                </p>
              </div>{" "}
              <img id="cpn" src={cpnPro} alt="cpn"></img>
            </div>
            <div>
              <h4 className="titrePro4">
                Les challenges que nous avons adoptées
              </h4>
              <span>Comment pourrions-nous:</span>
              <ul>
                <li>
                  <strong>"apporter plus de personnalisation?"</strong>
                </li>
                <li>
                  <strong>"fluidifier la navigation?"</strong>
                </li>
              </ul>
            </div>
            <h4 className="titrePro4">
              Conception parcours utilisateur et vote
            </h4>
            <div className="setupColumn">
              <img id="parcours" src={tunnelPro} alt="parcours"></img>
              <div className="adjust50">
                En groupe, nous avons défini <strong>un persona</strong> et{" "}
                <strong>un parcours utilisateur </strong>tenant compte de
                l'étape de découverte (de quelle source vient mon utilisateur?),
                de familiarisation (comment il découvre la marque/le produit?)
                et d'utilisation (pendant/après l'achat).{" "}
                <p>
                  Basé sur ces éléments,chacun a imaginé un parcours plus
                  détaillé. Nous avons partagé nos parcours, voté pour le plus
                  adéquate et complété avec les éléments qui nous semblaient
                  pertinents dans les autres parcours.
                </p>
              </div>
            </div>

            <h3 className="titrePro3">JOUR 2: CREER/DIVERGER </h3>
            <h4 className="titrePro4">Réalisation d'un benchmark</h4>
            <div>
              Par le biais d'un benchmark, chacun a pioché des idées sur
              d'autres sites de e-commerces, dont nous avons ensuite partagé et
              discuté des fonctionnalités intéréssantes ou inspirantes.
            </div>
            <h4 className="titrePro4">Réalisation de croquis et vote</h4>
            <div className="setupColumn">
              <div className="adjust50">
                A partir du parcours utilisteur et du benchmark, chacun a
                concrétisé sa vision en réalisant un parcours précis sous forme
                de croquis détaillé. Nous avons laissé le temps à chacun
                d'observer les croquis des autres.
              </div>
              <img id="croquis" src={croquisPro} alt="croquis"></img>
            </div>

            <h3 className="titrePro3">JOUR 3: DECIDER et PROTOTYPER </h3>
            <h4 className="titrePro4">Combinaisons d'idées</h4>

            <div className="setupColumn">
              <img id="croquis" src={parcoursPro} alt="parcours"></img>
              <div className="adjust50">
                Nous avons ensuite voté pour le croquis le plus adapté aux
                problématiques définies le JOUR 1. Nous y avons ajouté tous les
                points intéressants des autres croquis pour compléter notre
                parcours
              </div>
            </div>
            <h4 className="titrePro4">Répartion des tâches et prototypage</h4>
            <p>
              Le reste de la journée s'est déroulé sur Figma: nous nous sommes
              répartis les tâches de façon équitable et selon les préférences de
              chacun. Le prototypage est achevé le JOUR 4.
            </p>
            <h3 className="titrePro3">JOUR 4: PROTOTYPER suite et TESTER</h3>
            <h4 className="titrePro4">Test utilisateur</h4>
            <div>
              Réaliser les test utilisateurs régulièrement est un bon moyen de
              valider/invalider nos idées. Nous pouvons ainsi rapidement et
              facilement ré-ajuster notre version. Chaque test dure env. 40 min,
              nous avons demandé à nos collègues de tester notre application.
              Les données correspondant au parcours testé lui ont été indiquées
              au fur et à mesure de l'expérience.
            </div>
            <h4 className="titrePro4">Feedbacks équipe</h4>
            <div className="setupColumn">
              <div className="adjust50">
                Les autres UX Designers prennent simultanément des notes de
                toutes les remarques (positives et négatives) de chaque testeur.
                A la fin des tests, les remarques sont regroupées et étudiées
                selon leur redondance.
              </div>
              <img id="itw" src={itwPro} alt="itw"></img>
            </div>

            <h3 className="titrePro3">JOUR 5: VALIDER/DESIGN CRITIQUE</h3>

            <h4 className="titrePro4">Apprentissage</h4>
            <div>
              Plusieurs points ont été fréquemment souligné par les 5
              utilisateurs:
              <ul>
                <li>
                  <strong> Wording/phrasing confus</strong>
                </li>
                <li>
                  <strong> Le système de photo pas assez mis en avant</strong>
                </li>
                <li>
                  <strong>
                    {" "}
                    La personnalisation de style pas assez explicite
                  </strong>
                </li>
                <li>
                  <strong> L'aide pour choisir entre deux tailles flou</strong>
                </li>
              </ul>
              <h4 className="titrePro4">
                Matrice de priorisation de la version 2
              </h4>
              <div className="setupColumn">
                <img id="matrice" src={matricePro} alt="matrice"></img>
                <div className="adjust50">
                  Pour améliorer notre version, nous avons priorisé les
                  changement à effectuer sur Figma.Nous nous sommes centrés sur
                  2 critères:{" "}
                  <strong>le bénéfice apporté à l'utilisateur</strong> et{" "}
                  <strong>la difficulté de la tâche à accomplir</strong>.
                  <p>
                    Les tâches figurants en haut à gauche de la matrice étant
                    prioritaires. Nous avons trouvé une solution consensuelle
                    aux problèmatiques soulevées.
                  </p>
                </div>
              </div>
              <h3 className="titrePro3">
                JOUR 6: RE-ITERER et DESIGN CRITIQUE
              </h3>
              <h4 className="titrePro4">Prototypage de la version 2</h4>
              <div>
                Sur le prototypage, nous avons apporté des modifications aux
                "points de friction" rencontrés par l'utilisateur.
              </div>
              <h4 className="titrePro4">Design critique</h4>
              <div className="setupColumn">
                <img id="critique" src={critiquePro} alt="critique"></img>
                <div className="adjust50">
                  Cette nouvelle version a été présentée aux autres équipes,
                  nous avons expliqué nos choix. Puis, nous avons recueilli les
                  feedbacks de nos collègues, sur nos objectifs primaires: la
                  personnalisation et la fluidité.
                </div>
              </div>
            </div>
          </div>
          <h2 className="titrePro2">Tester le prototype</h2>
          <div>
            <p>
              Je vous invite à essayer{" "}
              <a
                className="proto"
                href="https://www.figma.com/proto/5I2oD0E495as7pF3h7Uvt1/Promod-V2?scaling=min-zoom&node-id=12%3A1523"
                target="_blank"
              >
                ici le prototype utilisé
              </a>{" "}
              (pas de compte nécessaire).
            </p>
            <strong>Le parcours choisi:</strong> vous vous rendez sur votre
            application pour commander une jupe sombre et découvrez votre
            PROMOD'STYLE{" "}
          </div>
        </div>
      )}
    </>
  );
}
export default Promod;
