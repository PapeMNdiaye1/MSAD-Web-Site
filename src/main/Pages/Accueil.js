import { React, useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// import ImageforIntro1 from "../Style/Images/Project/Exterior-0.jpg";
// import ImageforIntro4 from "../Style/Images/Project/Pharmacie-3.jpg";

// import ImageProjectB1 from "../Style/Images/Project/City-8.jpg";
// import ImageProjectB2 from "../Style/Images/Project/City-1.jpg";
// import ImageProjectB3 from "../Style/Images/Project/City-3.jpg";
// import ImageProjectB9 from "../Style/Images/Project/City-9.jpg";

// import ImageProjectE3 from "../Style/Images/Project/Pharmacie-3.jpg";

// import ImageProjectI2 from "../Style/Images/Project/Villa_B-2.jpg";
// import ImageProjectI3 from "../Style/Images/Project/Villa_B-3.jpg";
// import ImageProjectI4 from "../Style/Images/Project/Villa_B-8.jpg";

// import ImageProjectK1 from "../Style/Images/Project/Pharmacie_C-1.jpg";

// import ImageProjectL1 from "../Style/Images/Project/Villa_Teranga_Al_Amin-1.jpg";
// import ImageProjectL2 from "../Style/Images/Project/Villa_Teranga_Al_Amin-2.jpg";

// import ImageProjectH1 from "../Style/Images/Project/Villa_Astan-Ndiaye-1.jpg";
// import ImageProjectJ1 from "../Style/Images/Project/Appartement-F4-A-1.jpg";

// import ImageProjectS1 from "../Style/Images/Project/Villa_Samb-1.jpg";
// import ImageProjectS2 from "../Style/Images/Project/Villa_Samb-2.jpg";
// import ImageProjectS3 from "../Style/Images/Project/Villa_Samb-3.jpg";
// import ImageProjectS4 from "../Style/Images/Project/Villa_Samb-4.jpg";

// import ImageProjectS7 from "../Style/Images/Project/Villa_Samb-7.jpg";
// import ImageProjectS10 from "../Style/Images/Project/Villa_Samb-8.jpg";

// import ImageProjectT2 from "../Style/Images/Project/Villa-Onomo-2.jpg";
// import ImageProjectT4 from "../Style/Images/Project/Villa-Onomo-4.jpg";
// import ImageProjectT7 from "../Style/Images/Project/Villa-Onomo-7.jpg";
// import ImageProjectT8 from "../Style/Images/Project/Villa-Onomo-8.jpg";
// import ImageProjectT9 from "../Style/Images/Project/Villa-Onomo-9.jpg";

// import ImageProjectP1 from "../Style/Images/Project/Immeuble-Talles-6.jpg";

// import ImageProjectBB1 from "../Style/Images/Project/Office-B-1.jpg";
// import ImageProjectBB2 from "../Style/Images/Project/Office-B-2.jpg";
// import ImageProjectBB3 from "../Style/Images/Project/Office-B-3.jpg";
// import ImageProjectBB6 from "../Style/Images/Project/Office-B-6.jpg";

// import ImageProjectQ1 from "../Style/Images/Project/Villa-Sarr-1.jpg";
// import ImageProjectQ10 from "../Style/Images/Project/Villa-Sarr-10.jpg";

function Accueil({ GetImageToApp }) {
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

    // let TheFooter = document.querySelector(".the_footer");
    // TheFooter.style.opacity = "1";

    // let ThesliderImg = document.querySelectorAll(".slider");
    // let thePageWidth = window.innerWidth;

    return () => {
      ToDisplayonBLoade.style.display = "flex";
      AccueilContainer.scrollTop = 0;
    };
  }, []);

  const GetImageOnApp = (theimage, title, date, link) => {
    GetImageToApp(theimage, title, date, link);
  };

  return (
    <div id="Accueil">
      <div className="Accueil_Slider-2">
        {/* <Carousel>
          <div className="sliders">
            <img loading="lazy" src={ImageforIntro1} />
            <div className="sliders_inner_container">
              <div
                style={{
                  color: "#000",
                }}
                className="slider_title"
              >
                <p>Visualisations 3D "Rendus Images & Animations"</p>
              </div>
              <div
                style={{
                  color: "#000",
                }}
                className="slider_date"
              >
                sénégal, Dakar
              </div>
            </div>
          </div>
          <div className="sliders">
            <img loading="lazy" src={ImageProjectP1} />
            <div className="sliders_inner_container">
              <div className="slider_title">
                <p>Création De Plants et Maquettes</p>
              </div>
              <div className="slider_date">sénégal, Dakar</div>
            </div>
          </div>
          <div loading="lazy" className="sliders">
            <img src={ImageProjectJ1} />
            <div className="sliders_inner_container">
              <div className="slider_title">
                <p>Réalité Virtuel & Experience 3D Web</p>
              </div>
              <div className="slider_date">sénégal, Dakar</div>
            </div>
          </div>
          <div loading="lazy" className="sliders">
            <img src={ImageforIntro4} />
            <div className="sliders_inner_container">
              <div className="slider_title">
                <p>Visualisations Architecturals Pour Commerces</p>
              </div>
              <div className="slider_date">sénégal, Dakar</div>
            </div>
          </div>
        </Carousel> */}
      </div>

      {/* <AccueilSlider /> */}
      {/* <section className="archviz_presantation">
        <h2 className="qui_somme_nous">-Qui sommes-nous ?</h2>

        <p>
          ArchViz est un studio de visualisation architecturale spécialisé dans
          la création d'images et d'animations photoréalistes pour la mise en
          avant de projets immobiliers.
        </p>
        <div className="network_container">
          <a href="https://www.instagram.com/archviz_dakar/" target="_blank">
            <div className="network">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=221777278655&text=Message provenant de archviz-dakar.com"
            target="_blank"
          >
            <div className="network">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
          </a>
          <a
            href="mailto:archviz.sn@gmail.com?subject=Message provenant de archviz-dakar.com"
            target="_blank"
          >
            <div className="network">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
          </a>
          <a href="https://www.youtube.com/@archviz-dakar" target="_blank">
            <div className="network">
              <ion-icon name="logo-youtube"></ion-icon>
            </div>
          </a>
        </div>
      </section>
      <section className="AccueilBigProjectsSection">
        <OneBigProject
          title={"Visualisation de projets immobiliers"}
          image={ImageProjectQ1}
          description={`Visualisez et concrétisez vos projets d'aménagement grâce à l'accompagnement de nos architectes d'intérieur.`}
          color={"#f1f1f1"}
          textcolor={"#000"}
          theKey={1}
          link={"/VillaSarr"}
          The_Experience={false}
          side={"right"}
        />

        <OneBigProject
          title={"Décoration Intérieur"}
          image={ImageProjectJ1}
          description={
            "À l'aide des logiciels de dernière génération et de notre savoir-faire dans le domaine de l’architecture d’intérieur. Nous vous aidons dans l’aménagement de vos espaces."
          }
          color={"#8a6f54"}
          textcolor={"#f1f1f1"}
          theKey={2}
          link={"/Appartement-F4-A"}
          side={"left"}
          The_Experience={true}
          The_Experience_Link={"https://archviz-villa-bamba-ba.netlify.app/"}
        />

        <OneBigProject
          title={"Création de plan isométrique"}
          image={ImageProjectP1}
          description={`Les plans d'étage isométriques offrent une vue en trois dimensions des configurations d'un bien immobilier, aidant les clients à mieux comprendre la disposition spatiale et la fonctionnalité des différentes zones.`}
          color={"#F1F1F1"}
          textcolor={"#222"}
          theKey={3}
          link={"/Immeuble-Talles"}
          side={"right"}
          The_Experience={false}
        />

        <OneBigProject
          title={"Visualisation de projets immobiliers"}
          image={ImageProjectH1}
          description={
            "Des designs Modernes et épurés. Nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives."
          }
          color={"#2b2828"}
          textcolor={"#f1f1f1"}
          theKey={4}
          link={"/Villa"}
          side={"left"}
          The_Experience={true}
          The_Experience_Link={"https://archviz-villa-astan.netlify.app/"}
        />

        <OneBigProject
          title={"Décoration Intérieur"}
          image={ImageProjectT2}
          description={
            "Des designs Modernes et épurés. Nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives."
          }
          color={"#a39081"}
          textcolor={"#222"}
          theKey={5}
          link={"/Villa_Onomo"}
          side={"right"}
          The_Experience={false}
        />

        <OneBigProject
          title={"Visualisation de projets immobiliers"}
          image={ImageProjectS1}
          description={`Visualisez et concrétisez vos projets d'aménagement grâce à l'accompagnement de nos architectes d'intérieur.`}
          color={"#2b2828"}
          textcolor={"#f1f1f1"}
          theKey={6}
          link={"/VillaSamb"}
          The_Experience={false}
          side={"left"}
        />

        <OneBigProject
          title={"Cité El Hadj Amadou BA"}
          image={ImageProjectB1}
          description={
            "Ce projet comprend des villas familiales, des bâtiments commerciaux et résidentiels ainsi que des lieux publics. Notre travail se partage à parts égales entre les animations architecturales et les rendus 3D. Nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs."
          }
          color={"#F1F1F1"}
          textcolor={"#222"}
          theKey={7}
          link={"/City1"}
          side={"right"}
          The_Experience={false}
        />

        <OneBigProject
          title={"Espace Sportif"}
          image={ImageProjectK1}
          description={
            "Nous avons une vaste expérience dans l'aménagement d'espaces communs et de bureaux, quelle que soient leur typologie, leur vocation, leur stratégie et leur positionnement."
          }
          color={"#ffd89e"}
          textcolor={"#222"}
          theKey={8}
          side={"left"}
          link={"/Gym"}
          The_Experience={false}
        />

        <OneBigProject
          title={"Visualisation de projets immobiliers"}
          image={ImageProjectI2}
          description={
            "Des designs Modernes, épurés, etc… nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives."
          }
          color={"#EAEAEA"}
          textcolor={"#222"}
          The_Experience={true}
          The_Experience_Link={"https://villa-r-1.netlify.app/"}
          theKey={9}
          side={"right"}
          link={"/Villa-Saly"}
        />

        <OneBigProject
          title={"Design Bureau"}
          image={ImageProjectBB1}
          description={
            "Visualisez votre bureau avant de le construire. La modélisation 3D vous permet d'explorer les agencements, le placement des meubles et les éléments de design, le tout virtuellement."
          }
          color={"#222"}
          textcolor={"#f1f1f1"}
          theKey={10}
          link={"/Design_Bureau"}
          The_Experience={false}
          side={"left"}
        />
      </section>
      <section className="galerie_presantation">
        <Link className="nos_réalisations" to={"./Travaux"}>
          Nos Réalisations <ion-icon name="arrow-forward-outline"></ion-icon>
        </Link>
        <div className="galerie_container">Catalogue</div>
      </section> */}

      {/* <TheGallery GetImageOnAccueil={GetImageOnApp} /> */}
    </div>
  );
}

//!###############################################################
function TheGallery({ GetImageOnAccueil }) {
  const onClickOnImage = (theimage, title, date, link) => {
    GetImageOnAccueil(theimage, title, date, link);
  };

  return <div className="the_galerie_container"></div>;
}
//!###############################################################
function OneGalerieElement({ giveImageId, title, theKey, image, date, link }) {
  const clickOnImage = (e) => {
    let AccueilContainer = document.querySelector(".App_container");
    AccueilContainer.scrollTop = 0;
    giveImageId(image, title, date, link);
  };

  return (
    <div className="one_galerie_element">
      <img loading="lazy" src={image} width="100%" alt={title} />
      <div className="one_galerie_element_hover">
        <div className="iner_container">
          <Link onClick={clickOnImage} to={"/Galerie"}>
            <div className="Icon-to-click-on">
              <ion-icon name="expand-sharp"></ion-icon>
            </div>
          </Link>

          <Link className="titre" to={link}>
            {title}
          </Link>
          <p className="date">{date}</p>
        </div>
      </div>
    </div>
  );
}
//!###############################################################
function OneBigProject({
  color,
  title,
  description,
  side,
  textcolor,
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
    TheSidedProject[theKey - 1].style.backgroundColor = color;
    TheSidedProject[theKey - 1].style.border = `.5em solid ${color}`;
  });

  return (
    <Fragment>
      {TheSide === "right" ? (
        <section className="One_Project_In_Home right">
          <div
            style={{
              color: textcolor,
            }}
            className="info_container "
          >
            <h3
              style={{
                color: textcolor,
              }}
              className="title"
            >
              {title}
            </h3>
            <div className="description">
              <div
                style={{
                  backgroundColor: textcolor,
                }}
                className="bar"
              ></div>
              {description}
              <Link
                className="the_link"
                style={{
                  color: textcolor,
                  border: `.1em solid ${textcolor}`,
                }}
                to={link}
              >
                Voir plus <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link>
              {The_Experience ? (
                <a
                  style={{
                    color: textcolor,
                    border: `.1em solid ${textcolor}`,
                  }}
                  className="the_link"
                  href={The_Experience_Link}
                  target="_blank"
                >
                  Experience VR/AR{" "}
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>
              ) : (
                <div></div>
              )}
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
            style={{
              color: textcolor,
            }}
            className="info_container"
          >
            <h3
              style={{
                color: textcolor,
              }}
              className="title"
            >
              {title}
            </h3>
            <div className="description">
              <div
                style={{
                  backgroundColor: textcolor,
                }}
                className="bar"
              ></div>
              {description}
              <Link
                className="the_link"
                style={{
                  color: textcolor,
                  border: `.1em solid ${textcolor}`,
                }}
                to={link}
              >
                Voir plus <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link>
              {The_Experience ? (
                <a
                  style={{
                    color: textcolor,
                    border: `.1em solid ${textcolor}`,
                  }}
                  className="the_link"
                  href={The_Experience_Link}
                  target="_blank"
                >
                  Experience VR/AR{" "}
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>
              ) : (
                <div></div>
              )}
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

//!###############################################################
function TheFooter({}) {
  const onClickOnTab = () => {
    let AccueilContainer = document.querySelector(".App_container");
    AccueilContainer.scrollTop = 0;
  };

  return (
    <footer className="the_footer">
      <div role="img" alt="ArchVizLogo" className="logo-container"></div>
      <div className="titles">Categories</div>
      <div className="titles">Contacts</div>
      <div className="titles">Reseaux</div>
      <div className="titles">Formation</div>

      <Link
        to={"/formation"}
        // href="https://archviz-dakar.com/Formation"
        // target="_blank"
        className="portfolio_link"
      >
        Voir infos <ion-icon name="arrow-forward-outline"></ion-icon>
      </Link>

      <p className="archviz_description">
        Nous aidons les constructeur et les promoteurs immobiliers à
        impressionner les investisseurs et les acheteurs avec des visuels
        professionnels.
      </p>

      <nav className="menu_elemant_container">
        <Link className="menu_elemant" to={"/"} onClick={onClickOnTab}>
          Accueil
        </Link>
        <Link className="menu_elemant" to={"/Travaux"} onClick={onClickOnTab}>
          Travaux
        </Link>
        <Link className="menu_elemant" to={"/Services"} onClick={onClickOnTab}>
          Services
        </Link>
        <Link className="menu_elemant" to={"/Galerie"} onClick={onClickOnTab}>
          Galerie
        </Link>
        <div className="menu_elemant"></div>
      </nav>

      <div className="categories_elemant_container">
        <div className="categories_elemant">
          <ion-icon name="ellipse"></ion-icon>Exterior Design
        </div>
        <div className="categories_elemant">
          <ion-icon name="ellipse"></ion-icon>Interior Design
        </div>
        <div className="categories_elemant">
          <ion-icon name="ellipse"></ion-icon>Creation de Maquette
        </div>
        <div className="categories_elemant">
          <ion-icon name="ellipse"></ion-icon>Visualisation
        </div>
        <div className="categories_elemant">
          <ion-icon name="ellipse"></ion-icon>Creation de Visite Web
        </div>
        <div className="categories_elemant">
          <ion-icon name="ellipse"></ion-icon>Experience de Realite Virtuel
        </div>
      </div>

      <div className="contact_elemant_container">
        <div className="contact_elemant ">Tel: +221 77 727 86 55</div>
        <div className="contact_elemant ">Tel: +221 77 355 88 44</div>
        <div className="contact_elemant ">archviz.sn@gmail.com</div>
      </div>

      <div className="network_container">
        <a href="https://www.instagram.com/archviz_dakar/" target="_blank">
          <div className="network">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
        </a>
        <a href="https://www.linkedin.com/company/archviz-sn/" target="_blank">
          <div className="network">
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
        </a>

        <a
          href="mailto:archviz.sn@gmail.com?subject=Message provenant de archviz-dakar.com"
          target="_blank"
        >
          <div className="network">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
        </a>

        <a href="https://www.facebook.com/ARVHVIZ/" target="_blank">
          <div className="network">
            <ion-icon name="logo-facebook"></ion-icon>
          </div>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=221777278655&text=Message provenant de archviz-dakar.com"
          target="_blank"
        >
          <div className="network">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </div>
        </a>
        <a href="https://www.youtube.com/@archviz-dakar" target="_blank">
          <div className="network">
            <ion-icon name="logo-youtube"></ion-icon>
          </div>
        </a>
      </div>

      <div className="the_line"></div>

      <div className="country">
        <ion-icon name="globe-outline"></ion-icon> Sénégal
      </div>
      <div className="rights">© 2024 | Archviz. Tout droit réservé.</div>
    </footer>
  );
}

export { Accueil, TheGallery, OneBigProject, TheFooter };
