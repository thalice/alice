import React, { useState } from "react";
import logoKok from "./img/kok/logoKok.png";
import cpnKok from "./img/kok/cpnKok.png";
import parcoursKok from "./img/kok/parcoursKok.png";
import benchKok from "./img/kok/benchKok.png";
import croquisKok from "./img/kok/croquisKok.png";
import croquisVoteKok from "./img/kok/croquisVoteKok.png";
import protoKok from "./img/kok/protoKok.png";
import itwKok from "./img/kok/itwKok.png";
import matriceKok from "./img/kok/matriceKok.png";
import "./styles/kokpit.css";

function Kokpit() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/*Intro*/}
      <div id="alignLogoBrand">
        {" "}
        <img
          id="kokLogo"
          src={logoKok}
          alt="logo Kokpit"
          onClick={() => setIsOpen(!isOpen)}
        ></img>{" "}
        {/*Présentation*/}
        <h2 className="open" onClick={() => setIsOpen(!isOpen)}>
          Kokpit
        </h2>{" "}
      </div>
      <div id="presentation">
        <p>
          Pour changer le monde une couche à la fois, la couche lavable devient
          louable désormais! Kokpit informe les parents sur l'utilisation de la
          couche lavable pour convaincre les parents hésitants de ses bienfaits
          pour la nature, le porte-monnaie et les fesses de bébé !
        </p>
        <p>
          <strong>Rôle:</strong>interviewer et UX Designer
        </p>
        <p>
          <strong>Type de projet:</strong>à partir d'un site web existant,
          création d'un parcours utilisateur
        </p>

        <div>
          <button onClick={() => setIsOpen(!isOpen)}>Etude de cas</button>
          <a
            href="https://www.figma.com/proto/rUFrWbuMRR1yhQ8iI9Nzji/Alice?node-id=99%3A1399&viewport=4232%2C-3050%2C0.5&scaling=scale-down"
            target="_blank"
          >
            {" "}
            <input type="button" value="Tester mon prototype"></input>
          </a>
        </div>
      </div>
      {/*Debut*/}
      {isOpen && (
        <div id="kokBody" onClick={() => setIsOpen(!isOpen)}>
          <h1 id="titreCentre"> Kokpit</h1>
          <i id="infoClose">
            Pour fermer la fenêtre,cliquer sur la croix rouge ou n'importe où
            sur le bloc.
          </i>
          <span className="close">X</span>
          {/*Projet et context*/}
          <h2 className="titre2kok">Projet et contexte</h2>
          <div id="projet">
            <div className="projet-contexteKok">
              <p>
                <h4>Sujet: </h4> KOKPIT informe les parents sur l'utilisation de
                la couche lavable et propose un service de location pour
                convaincre les parents de ses bienfaits pour la nature, le
                porte-monnaie et les fesses de bébé !
              </p>
              <p>
                <h4>Durée:</h4>5 jours
              </p>
              <p>
                <h4>Méthodologie: </h4>Design Sprint
              </p>

              <p>
                <h4>Objectif:</h4>
                créer un parcours utilisateur pour l'industriel souhaitant
                destocker son bois,sur un site mobile-first non existant{" "}
              </p>
            </div>
            <div className="projet-contexteKok">
              <p>
                <h4>Equipe:</h4>4 UX Designers à 4 mois de formation, en
                collaboration avec Simon Delliaux et Niclas Ingmansson - nos
                porteurs de projet.
              </p>
              <p>
                <h4>Mon rôle:</h4>
                UX designer et interviewer. L'interviewer recrute des testeurs
                via les réseaux sociaux selon les profils adaptés au persona. Il
                fixe les rdv et mène les tests de façon à recevoir des feedbacks
                utilisables pour l'amélioration du site.
              </p>
              <h4>Les outils utilisés: </h4>en télétravail lié aux circonstances
              sanitaires, nous avons utilisé
              <ul>
                <li>
                  <strong>Discord:</strong> communication entre collègues
                </li>
                <li>
                  <strong>Miro:</strong> tableau blanc pour les réflexions
                  collectives
                </li>
                <li>
                  <strong>Trello:</strong> partage de parcours, tri de post-it
                </li>
                <li>
                  <strong>Figma:</strong> prototypage
                </li>
                <li>
                  <strong>Zoom et Google Meet:</strong> test utilisateur à
                  distance
                </li>
              </ul>
              <p>
                <h4>Ce que j'améliorerais:</h4>
                <p>
                  En tant qu'interviewer: allonger la durée du test en fonction
                  des testeurs (certains sont friands de remarques et c'est pour
                  le meilleur pour la team UX). Faire un listing de tous les
                  aléas pour être préparé (on prévoit des plans B ou C, mais
                  c'est toujours un tout autre imprévu qui fait surface:(
                </p>
                <p>
                  En tant qu'UX Designer: un atelier d'architecture de
                  l'information type OOUX aurait été efficace
                </p>
              </p>
              <p>
                <h4>Ce que j'ai apprécié:</h4>
                <p>
                  Porteur de projet réactif, dans le partage et une
                  communication fluide. Très bonne dynamique de groupe,
                  feedbacks réguliers entre membres de l'équipe pour évoluer
                  rapidement tout au long de la semaine
                </p>
              </p>
            </div>
          </div>
          {/*Tester le proto*/}
          <h2 className="titre2kok">Tester le prototype</h2>
          <div>
            <p>
              Je vous invite à essayer{" "}
              <a
                className="proto"
                href="https://www.figma.com/proto/zGL3S7AEdzQfDUsktEMXno/V1?node-id=21%3A752&viewport=2750%2C898%2C0.30000001192092896&scaling=scale-down"
                target="_blank"
              >
                ici le prototype utilisé
              </a>{" "}
              pour les tests utilisateurs (pas de compte nécessaire).
            </p>
            <p>
              Au bout de 5 jours, le temps nous a évidemment manqué pour
              élaborer une version 2. J'ai donc prototypé{" "}
              <a
                className="proto"
                href="
                https://www.figma.com/proto/2RBp6amJim29i15VpWpQlI/Alice?node-id=86%3A2576&viewport=-3852%2C5130%2C0.5&scaling=scale-down"
                target="_blank"
              >
                une seconde version "d'ajustement" que vous pouvez essayer ici.
              </a>{" "}
            </p>

            <p>
              <strong>Le parcours choisi:</strong>
              <p>
                vous êtes une maman occupée avec 3 enfants dont un nourrisson.
                Plutôt bio et éthique, vous cherchez à passer à la couche
                lavable pour son côté sain et non toxique mais vous n'êtes pas
                encore convaincue. Vous vous renseignez alors pour la location.
                Comment procéderiez-vous?{" "}
              </p>
            </p>
            <p>
              <strong>Remarques:</strong> par soucis de temps, les prototypes ne
              sont pas totalement fonctionnelles. Ils permettent simplement de
              se faire une image rapide d'un parcours utilisateur à tester.
              Seules les fonctions qui répondent au parcours suivant sont
              cliquables.{" "}
            </p>
          </div>
          <h2 className="titre2kok">Process Design Sprint</h2>
          <p>
            Méthode initée par Google, basée sur le Design Thinking: c'est un
            processus de création rapide qui permet d'explorer rapidement un
            maximum d'idées tout en garantissant une prise de risque minimum
            lorsque votre application est mise en ligne.{" "}
          </p>
          <div>
            <div id="test">
              <h3 className="titre3kok">JOUR 1: COMPRENDRE/CHALLENGER/CREER</h3>
              <h4 className="titre4kok">
                Questions/Réponses avec le porteur de projet
              </h4>
              <p>
                Simon et Niclas nous exposent leur 2 problématiques principales:
              </p>
              <p>- une offre comprise par l'utilisateur </p>
              <p>- une émotion, un ressenti lors de la visite</p>

              <h4 className="titre4kok">ETAPE 1: Test application mobile</h4>

              <p>TEST D'EMPATHIE et VOTE CPN</p>
              <p>
                Le test d'empathie permet de mieux comprendre les utilisateurs,
                leurs attentes et contraintes.
              </p>
              <p>
                Nous avons testé le site actuel de KOKPIT,crée sous WordPress en
                attendant une version définitive. Nous avons décelé quelques
                problématiques, qui ont été noté sous forme de "Comment
                pourrions-nous?" ou CPN (ex: "Comment pourrions-nous améliorer
                la navigation"). Puis,nous avons regroupé ces CPNS par
                catégorie, ce sont généralement les mêmes remarques qui
                reviennent pour tous. Tous les axes ne peuvent pas être
                travaillés sur un même sprint, nous avons donc voté pour ceux
                qui nous paraissaient prioritaires pour notre porteur de projet.
              </p>

              <img id="cpn" src={cpnKok} alt="cpn"></img>

              <div>
                <h4 className="titre4kok">
                  Les challenges que nous avons adoptées
                </h4>
                <span>Comment pourrions-nous:</span>
                <ul>
                  <li>
                    <strong>
                      "hiérarchiser les informations, tout en diminuant la
                      quantité de texte?"
                    </strong>
                  </li>
                  <li>
                    <strong>
                      "mettre en avant les valeurs de Kokpit avec l'émotion
                      (enthousiasme et sérénité)?"
                    </strong>
                  </li>
                  <li>
                    <strong>
                      "mettre de la pédagogie de façon à aider l'user à passer à
                      l'action ?"
                    </strong>
                  </li>
                </ul>
              </div>
              <h4 className="titre4kok">
                ETAPE 2: Etablissement du PERSONA et du PARCOURS UTILISATEUR
              </h4>
              <div>
                Parmi plusieurs persona,Simon et Niclas nous ont proposé la
                fiche persona "maman parfaite". A partir de là, nous avons crée
                le "user flow"/parcours utilisateur en tenant compte du tunnel
                de conversion (avant/pendant/après).
                <p>
                  Basé sur ces éléments,chacun a imaginé individuellement un
                  parcours détaillant chaque action réalisée par l'utilisateur
                  dès son entrée sur le site. Les parcours ont été ensuite
                  partagés à tous, et nous avons voté pour le plus efficace. Il
                  a été complété par des éléments pertinents dans les autres
                  parcours.
                </p>
              </div>
              <img id="parcours" src={parcoursKok} alt="parcours"></img>

              <h4 className="titre4kok">ETAPE 3: Réalisation d'un benchmark</h4>
              <div>
                Par le biais d'un benchmark, nous avons pioché des idées sur
                d'autres sites concurrents ou non, et partagé des
                fonctionnalités intéressantes ou inspirantes.
              </div>
              <img id="bench" src={benchKok} alt="bench"></img>

              <h4 className="titre4kok">
                ETAPE 4: Réalisation de croquis et vote
              </h4>
              <div>
                A partir du parcours utilisateur et du benchmark, chacun a
                concrétisé individuellement sa vision en réalisant un parcours
                précis sous forme de croquis détaillé du parcours entier.
              </div>
              <img id="croquis" src={croquisKok} alt="croquis"></img>
            </div>
            <h3 className="titre3kok">JOUR 2: DECIDER</h3>

            <h4 className="titre4kok">
              ETAPE 4 (suite): Réalisation de croquis et vote final
            </h4>
            <p>
              Des explications de chaque croquis ont été présentées à tout le
              groupe. Nous avons ensuite voté pour le croquis le plus adapté aux
              problématiques définies, auquel nous avons ajouté des parties
              complémentaires issues des autres croquis afin de compléter le
              parcours final. Nous avons mixé les différents fonctionnalités en
              un croquis par page pour le storyboarding.
            </p>
            <img id="croquis" src={croquisVoteKok} alt="croquis"></img>
            <h4 className="titre4kok">ETAPE 5: Organisation du prototypage</h4>
            <p>
              Chacun s'est attribué les tâches de prototypage qui lui plaisait,
              de façon égale en terme de charge de travail. Nous avons fait un
              rappel des bonnes pratiques de prototypage et nous nous sommes
              accordés sur le graphisme, la typo, etc.
            </p>
            <div>
              <h3 className="titre3kok">JOUR 3: PROTOTYPER</h3>
              <h4 className="titre4kok">ETAPE 6: Prototypage </h4>
              <p>
                L'ensemble du parcours à tester est réalisé sur Figma, sur cette
                seule journée.
              </p>
              <img id="prototype" src={protoKok} alt="prototype"></img>
            </div>
            <h3 className="titre3kok">JOUR 4: TESTER/VALIDER</h3>
            <div>
              <p>JOURNEE INTERVIEW UTILISATEURS </p>
              Les tests utilisateurs mettent en avant les points forts et les
              faiblesses de notre prototype. Par des tests réguliers, nous
              pouvons rapidement et facilement ré-ajuster notre version. Chaque
              test dure env. 40 min. L'utilisateur a été invité à surfer à
              travers le parcours de façon à trouver des informations qui le
              pousseraient à passer à la locations.Les données correspondant au
              parcours testé lui ont été indiquées au fur et à mesure de
              l'expérience.
            </div>
            <h4 className="titre4kok">Prise de note de la team</h4>
            <div>
              <div>
                Sur Trello, les autres UX Designers prennent simultanément des
                notes de toutes les remarques (positives et négatives) de chaque
                testeur. A la fin des tests, les remarques sont regroupées et
                étudiées selon leur redondance.
              </div>
              <img id="itw" src={itwKok} alt="itw"></img>
            </div>
            <h4 className="titre4kok">Apprentissage</h4>
            <div>
              Plusieurs points ont été fréquemment souligné par les 5
              utilisateurs:
              <ul>
                <li>
                  <strong> un manque de clarté de l'offre</strong>
                </li>
                <li>
                  <strong>
                    {" "}
                    les informations prioritaires ne sont pas visibles
                    rapidement
                  </strong>
                </li>
                <li>
                  <strong> un manque de modernité,pas d'émotion</strong>
                </li>
              </ul>
              <h4 className="titre4kok">
                Matrice de priorisation de la version 2
              </h4>
              <div className="setupColumn">
                <div>
                  Pour améliorer notre version, nous avons priorisé les
                  changement à effectuer sur Figma.Nous nous sommes centrés sur
                  2 critères:{" "}
                  <strong>le bénéfice apporté à l'utilisateur</strong> et{" "}
                  <strong>la difficulté de la tâche à accomplir</strong>.
                  <p>
                    Les tâches figurants en haut à gauche de la matrice étant
                    prioritaire.Le code couleur est adopté pour répartir les
                    tâches de chacun
                  </p>
                  <img id="matrice" src={matriceKok} alt="matrice"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Kokpit;
