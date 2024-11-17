import { React, useEffect } from "react";
import { Link } from "react-router-dom";

import ImageProjectA4 from "../Style/Images/Project/Villa-Onomo-4.jpg";
import ImageProjectB3 from "../Style/Images/Project/City-0.jpg";

import ImageProjectE7 from "../Style/Images/Project/Pharmacie-3.jpg";
import ImageProjectF2 from "../Style/Images/Project/Hangar-2.jpg";

import ImageProjectL1 from "../Style/Images/Project/Villa_Teranga_Al_Amin-1.jpg";
import ImageProjectJ1 from "../Style/Images/Project/Villa_B-2.jpg";
import ImageProjectS2 from "../Style/Images/Project/Villa_Samb-2.jpg";
import ImageProjectI4 from "../Style/Images/Project/Villa_B-8.jpg";
import ImageProjectJ4 from "../Style/Images/Project/Appartement-F4-A-1.jpg";
import ImageProjectk4 from "../Style/Images/Project/Immeuble-Talles-8.jpg";

function Services({}) {
  useEffect(() => {
    let ToDisplayonBLoade = document.querySelector(".before-loader");
    ToDisplayonBLoade.style.display = "none";

    let AccueilContainer = document.querySelector(".App_container");
    AccueilContainer.scrollTop = 0;

    let hoverLoaderContainer = document.querySelector(
      ".hover_loader_container"
    );
    hoverLoaderContainer.style.display = "flex";

    setTimeout(function () {
      hoverLoaderContainer.style.display = "";
    }, 1500);

    let TheFooter = document.querySelector(".the_footer");
    TheFooter.style.opacity = "1";

    return () => {
      ToDisplayonBLoade.style.display = "flex";
      AccueilContainer.scrollTop = 0;
    };
  }, []);

  return (
    <div id="Services">
      {/* <OneService
        theServiceTitle={'Visualisations 3D "Rendus Images et Animations"'}
        theServiceDescription={
          <p>
            Nos services en conception Visualisations 3D comprennent la création
            d'images fixes et d'animations. Grâce à ceux-ci, nous aidons nos
            clients à transmettre leur vision et à façonner les environnements
            de demain.
          </p>
        }
        TheGalerieElements={
          <div className="project_container">
            <OneGalerieElement
              image={ImageProjectA4}
              title={"Villa Onomo"}
              link={"/Villa_Onomo"}
              date={"25 juin, 2024"}
            />
            <OneGalerieElement
              link={"/VillaSamb"}
              image={ImageProjectS2}
              title={"Villa Samb"}
              date={"05 Mai, 2024"}
            />
            <OneGalerieElement
              link={"/Villa-Saly"}
              image={ImageProjectI4}
              title={"Villa Saly"}
              date={"06 Juin, 2023"}
            />
            <OneGalerieElement
              image={ImageProjectJ4}
              title={"design intérieur"}
              link={"/Appartement-F4-A"}
              date={"25 Septembre, 2023"}
            />
            <OneGalerieElement
              image={ImageProjectE7}
              title={"Design pour les Commerces"}
              link={"/Pharmacie1"}
              date={"27 Mai, 2022"}
            />
            <OneGalerieElement
              image={ImageProjectB3}
              title={"Visualisation Extérieur d'Immeuble"}
              link={"/City1"}
              date={"27 Mai, 2022"}
            />
          </div>
        }
        color={"#F2F1F0"}
      />
      <OneService
        theServiceTitle={"Réalité Virtuel et Experience 3D Web"}
        theServiceDescription={
          <p>
            Nous donnons plus de vie à vos projets immobiliers avec la technique
            de réalité virtuelle en produisant des rendus 3D immersifs
            permettant de visiter les espaces comme si vous y étiez.
          </p>
        }
        TheGalerieElements={
          <div className="project_container">
            <OneGalerieElement
              image={ImageProjectJ1}
              title={"Villa Saly"}
              link={"/Villa-Saly"}
              date={"06 Juin, 2023"}
            />
            <OneGalerieElement
              image={ImageProjectJ4}
              title={"Appartement Bamba Ba"}
              link={"/Appartement-F4-A"}
              date={"25 Septembre, 2023"}
            />
            <OneGalerieElement
              image={ImageProjectL1}
              title={"Villa Al Amin"}
              link={"/VillaTerangaAlAmin"}
              date={"26 Janvier, 2023"}
            />
          </div>
        }
        color={"#F4EFE4"}
      />
      <OneService
        theServiceTitle={"Création de Maquettes"}
        theServiceDescription={
          <p>
            Le rendu et l'animation avec des temps de production de plus en plus
            rapide ont ouvert la porte à un monde de variations infinies dans la
            conception graphique adaptée à vos demandes uniques.
          </p>
        }
        TheGalerieElements={
          <div className="project_container">
            <OneGalerieElement
              image={ImageProjectF2}
              title={'Maquette "Hangar Photovoltaïque'}
              link={"/Hangar1"}
              date={"29 Juin , 2021"}
            />
            <OneGalerieElement
              image={ImageProjectk4}
              title={"Plans D'étage Isométriques"}
              link={"/Immeuble-Talles"}
              date={"3 Juin , 2024"}
            />
          </div>
        }
        color={"#EBEBEB"}
      /> */}
    </div>
  );
}

export default Services;
