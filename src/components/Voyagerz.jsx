import React, { useState } from "react";
import logoVoy from "./img/voy/logoVoy.PNG";
import cpnVoy from "./img/voy/cpnVoy.png";
import parcoursVoy from "./img/voy/parcoursVoy.png";
import benchVoy from "./img/voy/benchVoy.png";
import croquisVoy from "./img/voy/croquisVoy.png";
import prototypeVoy from "./img/voy/protoVoy.png";
import itwVoy from "./img/voy/itwVoy.png";
import matriceVoy from "./img/voy/matriceVoy.png";
import "./styles/voyagerz.css";

function Voyagerz() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div id="alignLogoBrand">
        {" "}
        <img
          id="voyLogo"
          src={logoVoy}
          alt="logo Voyagerz"
          onClick={() => setIsOpen(!isOpen)}
        ></img>{" "}
        <h2 className="open" onClick={() => setIsOpen(!isOpen)}>
          Voyagerz
          <p>EN COURS DE REDACTION</p>
        </h2>{" "}
      </div>
      <div id="presentation">
        <p>
          " FEEL FIND FACE" ...voilà une application qui fait entrer le voyage
          dans la digitalisation! Voyagerz a pour objectif d'inspirer une
          génération de jeunes connectés à vivre des voyages à leur image.
        </p>
        <p>
          <strong>Rôle:</strong>UX Designer
        </p>
        <p>
          <strong>Type de projet:</strong>création d'un parcours utilisateur
        </p>
      </div>

      {isOpen && (
        <div id="voyBody" onClick={() => setIsOpen(!isOpen)}>
          <h1 id="titreCentre"> VOYAGERZ</h1>

          <span className="close">X</span>

          <h2 className="titre2voy">Projet et contexte</h2>
          <div id="projet">
            <div className="projet-contexteVoy">
              <p>
                <h4>Sujet: </h4>VOYAGERZ utilise les vidéos d'influenceurs
                (voyageur ou non) pour inspirer la génération connectés(=c'est
                le FEEL), et offre la possibilité d'acheter des activités lors
                de voyage (=le FIND) ou des rencontres authentiques avec les
                locaux (et le FACE).
              </p>
              <p>
                <h4>Durée:</h4>5 jours
              </p>
              <p>
                <h4>Méthodologie: </h4>Design Sprint
              </p>

              <p>
                <h4>Objectif:</h4>
                créer un parcours utilisateur pour un jeune actif/étudiant qui
                souhaite voyager bientôt. Il tombe sur l'application Voyagerz à
                travers une navigation dans les réseaux sociaux{" "}
              </p>
            </div>
            <div className="projet-contexteVoy">
              <p>
                <h4>Equipe:</h4>5 UX Designers à 4 mois de formation, en
                collaboration avec Fouad Talbi et Abderahim Bilal- nos porteurs
                de projet
              </p>
              <p>
                <h4>Mon rôle:</h4>
                UX designer
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
                  <strong>Zoom:</strong> test utilisateur à distance
                </li>
              </ul>
              <p>
                <h4>Ce que j'améliorerais:</h4>améliorer l'adhérence de chaque
                membre de l'équipe à la méthodologie et au respect des
                consignes. la pédagogie pour permettre aux porteurs de projet
                d'assimiler le concept de "user first"
              </p>
              <p>
                <h4>Ce que j'ai apprécié:</h4>
                très bonne ambiance dans l'équipe et avec les porteurs de
                projets
              </p>
            </div>
          </div>

          <h2 className="titre2voy">Tester le prototype</h2>
          <div>
            <p>
              Je vous invite à essayer{" "}
              <a
                className="proto"
                href=" https://www.figma.com/proto/wUDQLcRCicQLsdr2R7xbKL/V1-Voyagerz?node-id=13%3A1327&viewport=2118%2C-5%2C0.5&scaling=scale-down"
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
                vous êtes tout jeune actif et après 3 mois de confinement, vous
                souhaitez partir à l'étranger avec vos amis. Vous n'avez pas
                décidé du voyage mais vous regardez régulièrement les réseaux
                sociaux à l'affût de l'opportunité. Vous tombez sur des avis sur
                facebook vous invitant à consulter l'application Voyagerz. Ca
                y'est, vous y êtes. Comment procéderiez-vous?{" "}
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
          <h2 className="titre2voy">Process Design Sprint</h2>
          <p>
            Méthode initée par Google, basée sur le Design Thinking: c'est un
            processus de création rapide qui permet d'explorer rapidement un
            maximum d'idées tout en garantissant une prise de risque minimum
            lorsque votre application est mise en ligne.{" "}
          </p>
          <div>
            <div id="test">
              <h3 className="titre3voy">JOUR 1: COMPRENDRE/CHALLENGER/CREER</h3>
              <h4 className="titre4voy">
                Questions/Réponses avec le porteur de projet
              </h4>
              <p>
                Il est primordial de comprendre la perspective d'ensemble du
                projet, à court et à long terme. Nous avons donc commencé par un
                temps d'échange avec Fouad et Abdi pour analyser les besoins et
                les difficultés rencontrés, ainsi que l'environnement VOYAGERZ.
                Nous avons compris l'importance des vidéos sur le parcours
                utilisateur, ainsi que la nécessité de reprendre des codes, des
                habitudes de navigation de la génération Y,Z.
              </p>

              <h4 className="titre4voy">ETAPE 1: Test application mobile</h4>

              <p>TEST D'EMPATHIE et VOTE CPN</p>
              <p>
                Le test d'empathie permet de mieux comprendre les (futurs)
                utilisateurs, leurs attentes et contraintes.
              </p>
              <p>
                La plateforme VOYAGERZ étant à ses débuts, nous avons testé
                plusieurs applications regroupant des fonctionnalités
                intéressantes (IGTV,withlocals,getyourguide), pour déceler les
                potentielles problématiques rencontrées par l'utilisateur. Ces
                problématiques ont été noté sous forme de "Comment
                pourrions-nous?" ou CPN (ex: "Comment pourrions-nous améliorer
                la navigation"). Puis,nous avons regroupé ces CPNS par
                catégorie, ce sont généralement les mêmes remarques qui
                reviennent pour tous. Tous les axes ne peuvent pas être
                travaillés sur un même sprint, nous avons donc voté pour ceux
                qui nous paraissaient prioritaires pour nos porteurs de projet.
              </p>

              <img id="cpn" src={cpnVoy} alt="cpn"></img>

              <div>
                <h4 className="titre4voy">
                  Les challenges que nous avons adoptées
                </h4>
                <span>Comment pourrions-nous:</span>
                <ul>
                  <li>
                    <strong>"améliorer le système de filtre ?""</strong>
                  </li>
                  <li>
                    <strong>
                      "personnaliser et faciliter l'accès aux vidéos ?"
                    </strong>
                  </li>
                  <li>
                    <strong>
                      "hiérarchiser les informations pour raccourcir le parcours
                      ?"
                    </strong>
                  </li>
                </ul>
              </div>
              <h4 className="titre4voy">
                ETAPE 2: Etablissement du PERSONA et du PARCOURS UTILISATEUR
              </h4>
              <div>
                Nos porteurs de projets ont déjà une idée très fixe du persona
                qu'ils nous partagent. Puis, nous envisageons un parcours
                utilisateur tenant compte du tunnel de conversion
                (avant/pendant/après).
                <p>
                  Basé sur ces éléments,chacun a imaginé individuellement un
                  parcours détaillant chaque action réalisée par l'utilisateur
                  dès son entrée sur le site. Les parcours ont été ensuite
                  partagés à tous, et nous avons voté pour le plus efficace. Il
                  a été complété par des éléments pertinents dans les autres
                  parcours.
                </p>
              </div>
              <img id="parcours" src={parcoursVoy} alt="parcours"></img>

              <h4 className="titre4voy">ETAPE 3: Réalisation d'un benchmark</h4>
              <div>
                Par le biais d'un benchmark, nous avons pioché des idées sur
                d'autres sites (achat d'expérience de voyage, tourguide, voyage)
                et partagé des fonctionnalités intéressantes ou inspirantes.
              </div>
              <img id="bench" src={benchVoy} alt="bench"></img>

              <h4 className="titre4voy">
                ETAPE 4: Réalisation de croquis et vote
              </h4>
              <div>
                A partir du parcours utilisateur et du benchmark, chacun a
                concrétisé individuellement sa vision en réalisant un parcours
                précis sous forme de croquis détaillé du parcours entier. Ces
                croquis seront étudiés par nos collègues sans aucune explication
                orale, il est donc important de les détailler au maximum.
              </div>
            </div>
            <h3 className="titre3voy">JOUR 2: DECIDER</h3>

            <h4 className="titre4voy">
              ETAPE 4 (suite): Réalisation de croquis et vote final
            </h4>
            <p>
              Sans se consulter,chacun de son côté a parcouru les autres croquis
              et voté pour les éléments appréciés ou pertinents dans chaque
              croquis. Puis, le premier croquis a été expliqué par une personne
              autre que son auteur. Nous avons ensuite voté chacun pour DEUX
              ELEMENTS (et QUATRE pour les porteurs de projet) qui répondaient à
              nos CPNS, et nous les avons utilisés pour recréer le parcours
              utilisateur élaboré en ETAPE 2. Des parties complémentaires issues
              des autres croquis ont finalisé le parcours.
            </p>
            <img id="croquis" src={croquisVoy} alt="croquis"></img>
            <h4 className="titre4voy">ETAPE 5: Organisation du prototypage</h4>
            <p>
              Chacun s'est attribué les tâches de prototypage qui lui plaisait,
              de façon égale en terme de charge de travail. Nous avons fait un
              rappel des bonnes pratiques de prototypage et nous nous sommes
              accordés sur le graphisme, la typo, etc.
            </p>
            <div>
              <h3 className="titre3voy">JOUR 3: PROTOTYPER</h3>
              <h4 className="titre4voy">ETAPE 6: Prototypage </h4>
              <p>
                L'ensemble du parcours à tester est réalisé sur Figma, sur cette
                seule journée.
              </p>
              <img id="prototype" src={prototypeVoy} alt="prototype"></img>
            </div>
            <h3 className="titre3voy">JOUR 4: TESTER/VALIDER</h3>
            <div>
              <p>JOURNEE INTERVIEW UTILISATEURS </p>
              Les tests utilisateurs mettent en avant les points forts et les
              faiblesses de notre prototype. Par des tests réguliers, nous
              pouvons rapidement et facilement ré-ajuster notre version. Chaque
              test dure env. 40 min. L'utilisateur a été invité à s'inspirer de
              vidéos d'influenceurs pour réserver une activité de parapente au
              Maroc.
            </div>
            <h4 className="titre4voy">Prise de note de la team</h4>
            <div className="setupColumn">
              <div className="adjust50">
                Sur Trello, les autres UX Designers prennent simultanément des
                notes de toutes les remarques (positives et négatives) de chaque
                testeur. A la fin des tests, les remarques sont regroupées et
                étudiées selon leur redondance.
              </div>
              <img id="itw" src={itwVoy} alt="itw"></img>
            </div>
            <h4 className="titre4voy">Apprentissage</h4>
            <div>
              Plusieurs points ont été fréquemment souligné par les 5
              utilisateurs:
              <ul>
                <li>
                  <strong>
                    {" "}
                    une transition trop rapide entre l'inscription et le
                    remplissage de l'annonce
                  </strong>
                </li>
                <li>
                  <strong>
                    {" "}
                    ne comprend pas l'intérêt de mettre la photo en premier plan
                  </strong>
                </li>
                <li>
                  <strong> la pertinence des informations demandées</strong>
                </li>
              </ul>
              <h4 className="titre4voy">
                Matrice de priorisation de la version 2
              </h4>
              <div className="setupColumn">
                <div>
                  Pour améliorer notre version, nous avons priorisé les
                  changement à effectuer sur Figma.Nous nous sommes centrés sur
                  2 critères:{" "}
                  <strong>le bénéfice apporté à l'utilsateur</strong> et{" "}
                  <strong>la difficulté de la tâche à accomplir</strong>.
                  <p>
                    Les tâches figurants en haut à gauche de la matrice étant
                    prioritaire.Le code couleur est adopté pour répartir les
                    tâches de chacun
                  </p>
                  <img id="matrice" src={matriceVoy} alt="matrice"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Voyagerz;
