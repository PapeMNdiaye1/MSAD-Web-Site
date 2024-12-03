import { React, useEffect } from "react";
// import { OneBigProject } from "./Accueil";

// import ImageProjectB1 from "../Style/Images/Project/City-1.jpg";
// import ImageProjectC3 from "../Style/Images/Project/Immeuble-Talles-7.jpg";
// import ImageProjectD3 from "../Style/Images/Project/Office-B-1.jpg";
// import ImageProjectE4 from "../Style/Images/Project/Pharmacie-3.jpg";
// import ImageProjectF2 from "../Style/Images/Project/Hangar-2.jpg";

// import ImageProjectH1 from "../Style/Images/Project/Villa_Astan-Ndiaye-1.jpg";
// import ImageProjectI2 from "../Style/Images/Project/Villa_B-2.jpg";
// import ImageProjectJ1 from "../Style/Images/Project/Appartement-F4-A-1.jpg";
// import ImageProjectK4 from "../Style/Images/Project/Pharmacie_C-4.jpg";
// import ImageProjectL1 from "../Style/Images/Project/Villa_Teranga_Al_Amin-1.jpg";
// import ImageProjectS1 from "../Style/Images/Project/Villa_Samb-1.jpg";

// import ImageProjectO1 from "../Style/Images/Project/Villa-Onomo-2.jpg";

// import ImageProjectQ1 from "../Style/Images/Project/Villa-Sarr-1.jpg";
// import ImageProjectQ10 from "../Style/Images/Project/Villa-Sarr-10.jpg";

const Travaux = () => {
  useEffect(() => {
    let ThePageTitle = document.querySelectorAll(".One-slider-Section-B");

    ThePageTitle.forEach((e) => {
      e.style.color = "";
      e.style.color = "";
      e.style.fontWeight = "";
    });

    ThePageTitle[2].style.transform = "scale(1.1)";
    ThePageTitle[2].style.color = "#C9A050";
    ThePageTitle[2].style.fontWeight = "400";

    console.log("opp Travaux");
    let ToDisplayonBLoade = document.querySelector(".before-loader");

    // let TopBareSliderContainer = document.querySelector(
    //   "#Top-bare-slider-container"
    // );
    // let MuneBurger = document.querySelector(".Menu");
    // MuneBurger.classList.remove("Menu_On");

    // console.log(MuneBurger);
    // TopBareSliderContainer.style.top = "";
    // TopBareSliderContainer.style.opacity = "";

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

  return <div id="Travaux"></div>;
};

export default Travaux;
