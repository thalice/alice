import React, { useState } from "react";
import logoRewood from "./img/rewood/logoRew.png";
import cpnRew from "./img/rewood/cpnRew.PNG";
import parcoursRew from "./img/rewood/parcoursRew.png";
import benchRew from "./img/rewood/benchRew.png";
import croquisRew from "./img/rewood/croquisEnsRew.png";
import croquisVoteRew from "./img/rewood/croquisVoteRew.png";
import prototypeRew from "./img/rewood/figmaRew.png";
import itwRew from "./img/rewood/itwRew.png";
import matriceRew from "./img/rewood/matriceRew.png";
import "./styles/rewood.css";

function Rewood() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/*Intro*/}
      <div id="alignLogoBrand">
        {" "}
        <img
          id="rewLogo"
          src={logoRewood}
          alt="logo Rewood"
          onClick={() => setIsOpen(!isOpen)}
        ></img>{" "}
        {/*Présentation*/}
        <h2 className="open" onClick={() => setIsOpen(!isOpen)}>
          Rewood{" "}
        </h2>{" "}
      </div>
      <div id="presentation">
        <p>
          Aide les entreprises à revaloriser le bois de façon écologique et
          économique, via une marketplace pour les professionnels souhaitant
          revendre à d'autres professionnels.
        </p>
        <p>
          <strong>Rôle:</strong>facilitateur et UX Designer
        </p>
        <p>
          <strong>Type de projet:</strong>création d'un parcours utilisateur
        </p>

        <div>
          <button onClick={() => setIsOpen(!isOpen)}>Etude de cas</button>
          <a
            href="
            https://www.figma.com/proto/2RBp6amJim29i15VpWpQlI/Alice?node-id=86%3A2576&viewport=-3852%2C5130%2C0.5&scaling=scale-down"
            target="_blank"
          >
            {" "}
            <input type="button" value="Tester mon prototype"></input>
          </a>
        </div>
      </div>

      {/*Debut*/}

      {isOpen && (
        <div id="rewBody" onClick={() => setIsOpen(!isOpen)}>
          <h1 id="titreCentre"> Rewood</h1>
          <i id="infoClose">
            Pour fermer la fenêtre,cliquer sur la croix rouge ou n'importe où
            sur le bloc.
          </i>
          <span className="close">X</span>
          {/*Projet et context*/}
          <h2 className="titre2">Projet et contexte</h2>
          <div id="projet">
            <div className="projet-contexte">
              <p>
                <h4>Sujet: </h4>REWOOD revalorise le bois via une marketplace :
                les industriels ou professionnels du bois souhaitant déstocker
                leurs excédants peuvent y mettre en vente leur stock à d'autres
                professionnels.
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
            <div className="projet-contexte">
              <p>
                <h4>Equipe:</h4>5 UX Designers à 3 mois de formation, en
                collaboration avec Morgane Croquelois - notre porteuse de projet
              </p>
              <p>
                <h4>Mon rôle:</h4>
                UX designer et facilitateur. Le facilitateur anime les ateliers,
                veille au bon déroulement du process (timing et respect des
                consignes), et à la bonne dynamique du groupe (respect de la
                parole de chacun,écourter les débats)
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
                <h4>Ce que j'améliorerais:</h4>
                <h5>En tant que facilitateur:</h5>
                <p>- Trouver comment garder la team focus et organisé</p>{" "}
                <p>
                  - Trouver d'autres outils pour simplifier la prise de note
                  lors des interviews user
                </p>
                <h5>En tant qu'UX Designer:</h5>
                <p>
                  - Mieux organiser un benchmark de façon à passer moins de
                  temps sur un site
                </p>
                <p>
                  - Approfondir le CPN "valeur de Rewood" et "profil
                  utilisateur"
                </p>
              </p>
              <p>
                <h4>Ce que j'ai apprécié:</h4>
                <p>
                  - Porteur de projet dynamique, dans le partage et une
                  communication fluide{" "}
                </p>
                <p>
                  - Avoir carte blanche sur un projet qui part de zéro
                  Enrichissant en apprentissage UX
                </p>
              </p>
            </div>
          </div>
          {/*Tester le proto*/}
          <h2 className="titre2">Tester le prototype</h2>
          <div>
            <p>
              Je vous invite à essayer{" "}
              <a
                className="lienProto"
                href=" https://www.figma.com/proto/DIZv3Z30mEKPcaLwfx1fdQ/V1?node-id=15%3A1229&viewport=2320%2C2255%2C0.42364269495010376&scaling=scale-down"
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
                className="lienProto"
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
                vous êtes un industriel, des palettes trainent dans votre
                entrepôt. Vous désirez les mettre en vente sur le site Rewood,
                vous ne maîtrisez pas vraiment les nouvelles technologies et
                avez un planning chargé. Vous souhaitez vous débarasser de :
                <strong>
                  <ul>
                    <li>37 palettes en pin</li>
                    <li>en bon état général </li>
                    <li>
                      de mensurations (en cm): longueur 800 /largeur
                      1000/hauteur 150
                    </li>
                    <li>l'acheteur devra venir retirer son achat</li>
                  </ul>
                </strong>
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
          <h2 className="titre2">Process Design Sprint</h2>
          <p>
            Méthode initée par Google, basée sur le Design Thinking: c'est un
            processus de création rapide qui permet d'explorer rapidement un
            maximum d'idées tout en garantissant une prise de risque minimum
            lorsque votre application est mise en ligne.{" "}
          </p>
          <div>
            <div id="test">
              <h3 className="titre3">JOUR 1: COMPRENDRE/CHALLENGER/CREER</h3>
              <h4 className="titre4">
                Questions/Réponses avec le porteur de projet
              </h4>
              <p>
                Il est primordial de comprendre la perspective d'ensemble du
                projet, à court et à long terme. Nous avons donc commencé par un
                temps d'échange avec Morgane pour analyser les besoins et les
                difficultés rencontrés, ainsi que l'environnement REWOOD.
              </p>

              <h4 className="titre4">ETAPE 1: Test application mobile</h4>

              <p>TEST D'EMPATHIE et VOTE CPN</p>
              <p>
                Le test d'empathie permet de mieux comprendre les (futurs)
                utilisateurs, leurs attentes et contraintes.
              </p>
              <p>
                La plateforme REWOOD étant à ses débuts, nous avons testé le
                site mobile d'un concurrent pour déceler les potentielles
                problématiques rencontrées par l'utilisateur. Ces problématiques
                ont été noté sous forme de "Comment pourrions-nous?" ou CPN (ex:
                "Comment pourrions-nous améliorer la navigation"). Puis,nous
                avons regroupé ces CPNS par catégorie, ce sont généralement les
                mêmes remarques qui reviennent pour tous. Tous les axes ne
                peuvent pas être travaillés sur un même sprint, nous avons donc
                voté pour ceux qui nous paraissaient prioritaires pour notre
                porteur de projet.
              </p>

              <img id="cpn" src={cpnRew} alt="cpn"></img>

              <div>
                <h4 className="titre4">
                  Les challenges que nous avons adoptées
                </h4>
                <span>Comment pourrions-nous:</span>
                <ul>
                  <li>
                    <strong>
                      "rendre intuitif et rapide le parcours du vendeur ?""
                    </strong>
                  </li>
                  <li>
                    <strong>
                      "mettre en avant les valeurs et engagements de REWOOD ?"
                    </strong>
                  </li>
                  <li>
                    <strong>
                      "rendre visible et sympathique le profil utilisateur ?"
                    </strong>
                  </li>
                </ul>
              </div>
              <h4 className="titre4">
                ETAPE 2: Etablissement du PERSONA et du PARCOURS UTILISATEUR
              </h4>
              <div>
                A partir des fiches caractéristiques fournies par Morgane, nous
                avons défini un persona puis un parcours utilisateur tenant
                compte du tunnel de conversion (avant/pendant/après).
                <p>
                  Basé sur ces éléments,chacun a imaginé individuellement un
                  parcours détaillant chaque action réalisée par l'utilisateur
                  dès son entrée sur le site. Les parcours ont été ensuite
                  partagés à tous, et nous avons voté pour le plus efficace. Il
                  a été complété par des éléments pertinents dans les autres
                  parcours.
                </p>
              </div>
              <img id="parcours" src={parcoursRew} alt="parcours"></img>

              <h4 className="titre4">ETAPE 3: Réalisation d'un benchmark</h4>
              <div>
                Par le biais d'un benchmark, nous avons pioché des idées sur
                d'autres sites (marketplace,e-commerce,eco-commerce) et partagé
                des fonctionnalités intéressantes ou inspirantes.
              </div>
              <img id="bench" src={benchRew} alt="bench"></img>

              <h4 className="titre4">
                ETAPE 4: Réalisation de croquis et vote
              </h4>
              <div>
                A partir du parcours utilisateur et du benchmark, chacun a
                concrétisé individuellement sa vision en réalisant un parcours
                précis sous forme de croquis détaillé du parcours entier.
              </div>
              <img id="croquis" src={croquisRew} alt="croquis"></img>
            </div>
            <h3 className="titre3">JOUR 2: DECIDER</h3>

            <h4 className="titre4">
              ETAPE 4 (suite): Réalisation de croquis et vote final
            </h4>
            <p>
              Des explications de chaque croquis ont été présentées à tout le
              groupe. Nous avons ensuite voté pour le croquis le plus adapté aux
              problématiques définies, auquel nous avons ajouté des parties
              complémentaires issues des autres croquis afin de compléter le
              parcours final.
            </p>
            <img id="croquis" src={croquisVoteRew} alt="croquis"></img>
            <h4 className="titre4">ETAPE 5: Organisation du prototypage</h4>
            <p>
              Chacun s'est attribué les tâches de prototypage qui lui plaisait,
              de façon égale en terme de charge de travail. Nous avons fait un
              rappel des bonnes pratiques de prototypage et nous nous sommes
              accordés sur le graphisme, la typo, etc.
            </p>
            <div>
              <h3 className="titre3">JOUR 3: PROTOTYPER</h3>
              <h4 className="titre4">ETAPE 6: Prototypage </h4>
              <p>
                L'ensemble du parcours à tester est réalisé sur Figma, sur cette
                seule journée.
              </p>
              <img id="prototype" src={prototypeRew} alt="prototype"></img>
            </div>
            <h3 className="titre3">JOUR 4: TESTER/VALIDER</h3>
            <div>
              <p>JOURNEE INTERVIEW UTILISATEURS </p>
              Les tests utilisateurs mettent en avant les points forts et les
              faiblesses de notre prototype. Par des tests réguliers, nous
              pouvons rapidement et facilement ré-ajuster notre version. Chaque
              test dure env. 40 min. L'utilisateur a été invité à créer une
              annonce pour mettre en vente un lot de palettes. Les données
              correspondant au parcours testé lui ont été indiquées au fur et à
              mesure de l'expérience.
            </div>
            <h4 className="titre4">Prise de note de la team</h4>
            <div>
              <div>
                Sur Trello, les autres UX Designers prennent simultanément des
                notes de toutes les remarques (positives et négatives) de chaque
                testeur. A la fin des tests, les remarques sont regroupées et
                étudiées selon leur redondance.
              </div>
              <img id="itw" src={itwRew} alt="itw"></img>
            </div>
            <h4 className="titre4">Apprentissage</h4>
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
              <h4 className="titre4">
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
                  <img id="matrice" src={matriceRew} alt="matrice"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Rewood;
