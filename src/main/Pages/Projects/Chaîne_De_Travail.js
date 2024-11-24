import { React, useEffect, useState, Fragment } from "react";

import ImageProjectC1 from "../../Style/Images/Project/Villa_B-1.jpg";
import ImageProjectC2 from "../../Style/Images/Project/Villa_B-2.jpg";
import ImageProjectC3 from "../../Style/Images/Project/Villa_B-3.jpg";
import ImageProjectC4 from "../../Style/Images/Project/Villa_B-4.jpg";
import ImageProjectC5 from "../../Style/Images/Project/Villa_B-5.jpg";
import ImageProjectC6 from "../../Style/Images/Project/Villa_B-6.jpg";

function ChaîneDeTravail({}) {
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
      //Page_slider.style.opacity = `1`
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

      <div className="Chaîne_de_travail_container">
        <div className="project_display">
          <h1 className="project_title">Chaîne De Travail</h1>
          {/* <h3 className="project_description">
            par Bokar Ndiaye | 06 Juin, 2023 |
          </h3> */}

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
            fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero
            magni deleniti quod quam consequuntur! Commodi minima excepturi
            repudiandae velit hic maxime doloremque. Quaerat provident commodi
            consectetur veniam similique ad earum omnis ipsum saepe, voluptas,
            hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam
            cupiditate excepturi mollitia maiores labore suscipit quas? Nulla,
            placeat. Voluptatem quaerat non architecto ab laudantium modi minima
            sunt esse temporibus sint culpa, recusandae aliquam numquam totam
            ratione voluptas quod exercitationem fuga. Possimus quis earum
            veniam quasi aliquam eligendi, placeat qui corporis!
          </p>

          {/* <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectC2}
              width="100%"
              loading="lazy"
            />
          </div>
          <div className="TheImageContainer">
            <img onClick={displayImage} src={ImageProjectC1} width="47%" />
            <img onClick={displayImage} src={ImageProjectC4} width="47%" />
          </div>
          <div className="TheImageContainer">
            <img
              onClick={displayImage}
              src={ImageProjectC3}
              width="100%"
              loading="lazy"
            />
          </div>
          <div className="TheImageContainer">
            <img onClick={displayImage} src={ImageProjectC5} width="47%" />
            <img onClick={displayImage} src={ImageProjectC6} width="47%" />
          </div> */}
        </div>
      </div>
    </Fragment>
  );
}

export default ChaîneDeTravail;
