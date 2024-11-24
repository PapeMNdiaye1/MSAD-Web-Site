import { React, useEffect, useState, Fragment } from "react";

import ImageProjectC1 from "../../Style/Images/Project/Villa-Sarr-1.jpg";
import ImageProjectC2 from "../../Style/Images/Project/Villa-Sarr-2.jpg";
import ImageProjectC3 from "../../Style/Images/Project/Villa-Sarr-3.jpg";
import ImageProjectC4 from "../../Style/Images/Project/Villa-Sarr-4.jpg";
import ImageProjectC5 from "../../Style/Images/Project/Villa-Sarr-5.jpg";
import ImageProjectC6 from "../../Style/Images/Project/Villa-Sarr-6.jpg";
import ImageProjectC7 from "../../Style/Images/Project/Villa-Sarr-7.jpg";
import ImageProjectC8 from "../../Style/Images/Project/Villa-Sarr-8.jpg";
import ImageProjectC9 from "../../Style/Images/Project/Villa-Sarr-9.jpg";
import ImageProjectC10 from "../../Style/Images/Project/Villa-Sarr-10.jpg";

function SmallHouse1({}) {
  const [TheImageContainer, setTheImageContainer] = useState(false);
  const [TheImageInTheContainer, setTheImageInTheContainer] =
    useState(ImageProjectC1);

  useEffect(() => {
    let ToDisplayonBLoade = document.querySelector(".before-loader");
    ToDisplayonBLoade.style.display = "none";

    // let Page_slider = document.querySelector('.page_title_slider')
    // Page_slider.style.opacity = `0`

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
      //Page_slider.style.opacity = `1`;
      ToDisplayonBLoade.style.display = "flex";
      AccueilContainer.scrollTop = 0;
    };
  }, []);

  const displayImage = (e) => {
    if (TheImageContainer) {
      setTheImageContainer(false);
    } else {
      setTheImageInTheContainer(e.target.getAttribute("src"));
      setTheImageContainer(true);
    }
  };
  return (
    <Fragment>
      {TheImageContainer && (
        <div className="display_image_container">
          <div>
            <div onClick={displayImage} className="close_image_container"></div>
            <img src={TheImageInTheContainer} width="100%" />
          </div>
        </div>
      )}
      <div className="Villa_Sarr">
        <div className="project_display">
          <h1 className="project_title">Villa Sarr</h1>
          <h3 className="project_description">
            par Pape Momar Ndiaye | 05 Septembre, 2024 |
          </h3>
          <p>
            Notre équipe d'experts est là pour vous accompagner à chaque étape
            de vos projets, de la conception à la réalisation. Nous offrons des
            Historique personnalisés afin de répondre à toutes vos attentes.
          </p>
          <div className="TheImageContainer">
            <img onClick={displayImage} src={ImageProjectC1} width="100%" />
          </div>
          <div className="TheImageContainer">
            <img onClick={displayImage} src={ImageProjectC2} width="47%" />
            <img onClick={displayImage} src={ImageProjectC3} width="47%" />
          </div>
          <div className="the_video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/NkvBu9EKcQk?si=B_YFK9J7lw19nNvB"
              title="Villa Sarr"
              allow="accelerometer; 
                            autoplay; clipboard-write;
                            encrypted-media; gyroscope;
                            picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="TheImageContainer">
            <img onClick={displayImage} src={ImageProjectC4} width="100%" />
          </div>
          <div className="TheImageContainer">
            <img onClick={displayImage} src={ImageProjectC5} width="47%" />
            <img onClick={displayImage} src={ImageProjectC6} width="47%" />
          </div>
          <div className="TheImageContainer">
            <img onClick={displayImage} src={ImageProjectC7} width="100%" />
          </div>
          <div className="TheImageContainer">
            <img onClick={displayImage} src={ImageProjectC8} width="47%" />
            <img onClick={displayImage} src={ImageProjectC9} width="47%" />
          </div>
          <div className="TheImageContainer">
            <img onClick={displayImage} src={ImageProjectC10} width="100%" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SmallHouse1;
