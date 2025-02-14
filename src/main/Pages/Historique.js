import { React, useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import ImageProjectP1 from "../Style/Images/Tableaux/DIALA NDAMA ALASSANE M. DIOP-B.png";

function Historique({}) {
  useEffect(() => {
    let ThePageTitle = document.querySelectorAll(".One-slider-Section-B");

    ThePageTitle.forEach((e) => {
      e.style.color = "";
      e.style.color = "";
      e.style.fontWeight = "";
    });

    ThePageTitle[1].style.transform = "scale(1.1)";
    ThePageTitle[1].style.color = "#C9A050";
    ThePageTitle[1].style.fontWeight = "400";

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
    <div id="Historique">
      <OneBigProject
        title={"Article-1"}
        image={ImageProjectP1}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        // color={"#2b2828"}
        // textcolor={"#f1f1f1"}
        theKey={1}
        link={"/Villa"}
        side={"left"}
        The_Experience={true}
        The_Experience_Link={"https://archviz-villa-astan.netlify.app/"}
      />
      <OneBigProject
        title={"Article-2"}
        image={ImageProjectP1}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        // color={"#2b2828"}
        // textcolor={"#f1f1f1"}
        theKey={2}
        link={"/Villa"}
        side={"right"}
        The_Experience={true}
        The_Experience_Link={"https://archviz-villa-astan.netlify.app/"}
      />
      <OneBigProject
        title={"Article-1"}
        image={ImageProjectP1}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        // color={"#2b2828"}
        // textcolor={"#f1f1f1"}
        theKey={3}
        link={"/Villa"}
        side={"left"}
        The_Experience={true}
        The_Experience_Link={"https://archviz-villa-astan.netlify.app/"}
      />
    </div>
  );
}

//!###############################################################
function OneBigProject({
  // color,
  title,
  description,
  side,
  // textcolor,
  theKey,
  image,
  link,
  The_Experience,
  The_Experience_Link,
}) {
  const [TheSide, setTheSide] = useState("");

  useEffect(() => {
    setTheSide(side);
    let TheSidedProject = document.querySelectorAll(".One_Project_In_Home");
    // TheSidedProject[theKey - 1].style.backgroundColor = color;
    // TheSidedProject[theKey - 1].style.border = `.5em solid ${color}`;
  });

  return (
    <Fragment>
      {TheSide === "right" ? (
        <section className="One_Project_In_Home right">
          <div
            // style={{
            //   color: textcolor,
            // }}
            className="info_container "
          >
            <h3
              // style={{
              //   color: textcolor,
              // }}
              className="title"
            >
              {title}
            </h3>
            <div className="description">
              <div
                // style={{
                //   backgroundColor: textcolor,
                // }}
                className="bar"
              ></div>
              {description}
              <Link
                className="the_link"
                // style={{
                //   color: textcolor,
                //   border: `.1em solid ${textcolor}`,
                // }}
                to={link}
              >
                Voir plus <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link>
              {/* {The_Experience ? (
                <a
                  // style={{
                  //   color: textcolor,
                  //   border: `.1em solid ${textcolor}`,
                  // }}
                  className="the_link"
                  href={The_Experience_Link}
                  target="_blank"
                >
                  Experience VR/AR{" "}
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>
              ) : (
                <div></div>
              )} */}
            </div>
          </div>
          <div
            loading="lazy"
            role="img"
            alt={title}
            className="image_container"
            style={{
              backgroundImage: `url('${image}')`,
            }}
          ></div>
        </section>
      ) : (
        <section className="One_Project_In_Home left">
          <div
            // style={{
            //   color: textcolor,
            // }}
            className="info_container"
          >
            <h3
              // style={{
              //   color: textcolor,
              // }}
              className="title"
            >
              {title}
            </h3>
            <div className="description">
              <div
                // style={{
                //   backgroundColor: textcolor,
                // }}
                className="bar"
              ></div>
              {description}
              <Link
                className="the_link"
                // style={{
                //   color: textcolor,
                //   border: `.1em solid ${textcolor}`,
                // }}
                to={link}
              >
                Voir plus <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link>
              {/* {The_Experience ? (
                <a
                  // style={{
                  //   color: textcolor,
                  //   border: `.1em solid ${textcolor}`,
                  // }}
                  className="the_link"
                  href={The_Experience_Link}
                  target="_blank"
                >
                  Experience VR/AR{" "}
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>
              ) : (
                <div></div>
              )} */}
            </div>
          </div>
          <div
            loading="lazy"
            role="img"
            alt={title}
            className="image_container"
            style={{
              backgroundImage: `url('${image}')`,
            }}
          ></div>
        </section>
      )}
    </Fragment>
  );
}

export default Historique;
