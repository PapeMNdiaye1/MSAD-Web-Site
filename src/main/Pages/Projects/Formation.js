import { React, useEffect, useState, Fragment } from "react";

import ImageFormation1 from "../../Style/Images/SVG/Formation-1.png";
import ImageFormation2 from "../../Style/Images/SVG/Formation-2.png";
import ImageFormation3 from "../../Style/Images/SVG/Formation-3.png";
import ImageFormation4 from "../../Style/Images/SVG/Certif-1.png";
import ImageFormation5 from "../../Style/Images/SVG/Certif-2.png";
import ImageFormation6 from "../../Style/Images/SVG/Certif-3.png";
import ImageFormation7 from "../../Style/Images/SVG/Certif-4.png";
import ImageFormation8 from "../../Style/Images/SVG/Arrow.png";

function SmallHouse1({}) {
  useEffect(() => {
    let TheArchLogo = document.querySelector(".logo-container");
    console.log(TheArchLogo);
    TheArchLogo.style.display = "none";
    let ToDisplayonBLoade = document.querySelector(".before-loader");
    ToDisplayonBLoade.style.display = "none";
    ToDisplayonBLoade.style.background = "red";
    ToDisplayonBLoade.style.zIndex = "5";

    // let Page_slider = document.querySelector(".page_title_slider");
    // Page_slider.style.opacity = `0`;

    let AccueilContainer = document.querySelector(".App_container");
    AccueilContainer.scrollTop = 0;

    let hoverLoaderContainer = document.querySelector(
      ".hover_loader_container"
    );
    hoverLoaderContainer.style.display = "flex";

    setTimeout(function () {
      hoverLoaderContainer.style.display = "";
    }, 1500);

    return () => {
      // Page_slider.style.opacity = `1`;
      ToDisplayonBLoade.style.display = "flex";
      AccueilContainer.scrollTop = 0;
      TheArchLogo.style.display = "";
    };
  }, []);

  return (
    <Fragment>
      <div className="Formation">
        <div className="formation_section_1">
          <img src={ImageFormation1} width="100%" />
          <h1 className="project_title">Formation en 3D</h1>

          <h1 className="project_title-2">Architecture visualisation</h1>

          <a className="link" href={"https://archviz-dakar.com/Travaux"}>
            <em>Voir Réalisation Sur</em>
            <br />
            www.archviz-dakar.com/Travaux
          </a>

          <div className="phone">
            <ion-icon name="call"></ion-icon> +221 77 727 86 55
          </div>

          <div className="phone-2">
            <ion-icon name="call"></ion-icon> +221 78 990 92 46
          </div>
          <div className="mail">
            <ion-icon className="icon" name="mail"></ion-icon>
            archviz.sn@gmail.com
          </div>
        </div>
        <div className="formation_section_2">
          <img src={ImageFormation2} width="100%" />
          <h1 className="project_title">
            Développer <br />
            Vos Compétences <br />
            En Visualisation <br />
            Architecturale 3D
          </h1>
          <p>
            Une formation complète de 4 mois en Visualisation 3D
            <br />
            Deux cours live par semaine sur Discord, un canal de questions
            <br />
            ouvert 24h/24 et de ressources gratuites (SetUp logiciels,
            <br />
            Modèle 3D, HDRI, PBR etc...)
          </p>
        </div>
        <div className="formation_section_3">
          <img src={ImageFormation3} width="100%" />

          <div className="project_title">Formateur</div>

          <p>
            <em>
              Pape Momar Ndiaye <br />
            </em>
            Architecte, co-fondateur de ArchViz-Dakar
            <br />
            Diplômé en Art Graphique et Numérique.
            <br />
            Je serai votre formateur durant ces 4 mois <br />
            Consacre principalement au logiciel Blender
            <br />
            Pour la 3D et à Photoshop pour le compositing.
            <br />
          </p>

          <a
            className="link"
            href={
              "https://api.whatsapp.com/send?phone=221777278655&text=Bonjour, je suis intéressé par votre formation"
            }
          >
            <em>Me contacter Sur</em>
            <br />
            Whatsapp
          </a>

          <div className="picture"></div>
        </div>
        <div className="formation_section_5">
          <img src={ImageFormation4} className="theCertif" width="70%" />
          <img src={ImageFormation5} className="theCertif" width="100%" />
          <img src={ImageFormation6} className="theCertif" width="80%" />
          <img src={ImageFormation7} className="theCertif" width="95%" />
        </div>
        <div className="formation_section_4">
          <h1 className="project_title">
            CLÔTURE DES INSCRIPTIONS <br />
            LE 20 DÉCEMBRE
          </h1>

          <h1 className="project_title-2">
            DÉBUT DE LA FORMATION <br />4 JANVIER 11:00 AM – 12:30 AM
          </h1>

          <div className="prix ins-prix">
            <em>Inscription</em>

            <strong>50.000 Fcfa</strong>
          </div>
          <div className="prix men-prix">
            <em>Mensualite</em>
            <strong>25.000 Fcfa</strong>
          </div>
          <a
            className="link"
            href={
              "https://api.whatsapp.com/send?phone=221777278655&text=Bonjour, je suis intéressé par votre formation"
            }
          >
            S'inscrire
          </a>
          <img src={ImageFormation8} className="theArrow" width="70%" />
        </div>
      </div>
    </Fragment>
  );
}

export default SmallHouse1;
