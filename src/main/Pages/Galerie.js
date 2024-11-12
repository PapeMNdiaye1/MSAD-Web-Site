import { React, useEffect, useState, Fragment } from "react";
// import { TheGallery } from "./Accueil";
import { Link } from "react-router-dom";

function Gallery({
  TheImageToGallery,
  TheTitleToGallery,
  TheDateToGallery,
  TheLinkToGallery,
}) {
  const [TheImage, setTheImage] = useState("");
  const [TheTitle, setTheTitle] = useState("");
  const [TheDate, setTheDate] = useState("");
  const [TheLink, setTheLink] = useState("/");

  const [TheChangeInGalerie, setTheChangeInGalerie] = useState(false);
  const [TheImageContainer, setTheImageContainer] = useState(false);
  const [LoadGalerieContainer, setLoadGalerieContainer] = useState(false);

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
    <Fragment>
      <div id="Gallery">
        {/* {TheImageContainer && (
          <div className="display_image_container">
            <div>
              <div
                onClick={displayImage}
                className="close_image_container"
              ></div>
              <img src={TheImage} width="100%" alt={TheTitle} />
            </div>
          </div>
        )}
        <div className="the_galerie_presantation_container">
          <img onClick={displayImage} src={TheImage} width="80%" />
          <Link className="the_title" to={TheLink}>
            {TheTitle}
          </Link>
          <div className="the_date">{TheDate}</div>
        </div>
        {LoadGalerieContainer && (
          <TheGallery GetImageOnAccueil={GetImageOnApp} />
        )} */}
      </div>
    </Fragment>
  );
}

export default Gallery;
