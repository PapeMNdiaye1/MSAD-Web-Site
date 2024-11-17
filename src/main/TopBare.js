import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TopBare({ onChangeTab }) {
  useEffect(() => {
    let allMenuSection = document.querySelectorAll(".One-Section");

    for (let i = 0; i < allMenuSection.length; i++) {
      allMenuSection[
        allMenuSection.length - (i + 1)
      ].style.transitionDelay = `${i * 0.1}s`;
    }
  });

  const callback = (title, link) => {
    onChangeTab(title, link);
  };

  const onClickOnMenu = (e) => {
    let Menu_slider = document.querySelector("#Top-bare-slider-container");
    let theMenu = document.querySelector(".Menu");
    let allMenuSection = document.querySelectorAll(".One-Section");

    if (theMenu.classList.length > 1) {
      theMenu.classList.remove("Menu_On");
      Menu_slider.style.top = "";
      Menu_slider.style.opacity = "";
      for (let i = 0; i < allMenuSection.length; i++) {
        allMenuSection[i].style.top = ``;
        allMenuSection[i].style.opacity = `0`;
      }
    } else {
      Menu_slider.style.top = "4em";
      Menu_slider.style.opacity = "1";
      theMenu.classList.add("Menu_On");

      for (let i = 0; i < allMenuSection.length; i++) {
        allMenuSection[i].style.top = `1%`;
        allMenuSection[i].style.opacity = `1`;
      }
    }
  };

  return (
    <Fragment>
      <div id="Top-Bare">
        <Link className="logo-container" to={"/"}></Link>
        <div className="page_title">
          <div className="page_title_slider">
            <OneSectionB
              parentCallback={callback}
              link={"/"}
              title={"ACCUEIL"}
            />
            <OneSectionB
              parentCallback={callback}
              link={"/Travaux"}
              title={"TRAVAUX"}
            />
            <OneSectionB
              parentCallback={callback}
              link={"/Gallery"}
              title={"GALERIE"}
            />
            <OneSectionB
              parentCallback={callback}
              link={"/Services"}
              title={"SERVICES"}
            />
            <OneSectionB
              parentCallback={callback}
              link={"/Contact"}
              title={"CONTACT"}
            />
          </div>
        </div>
        <div className="Menu-container">
          <div onClick={onClickOnMenu} className="Menu"></div>
        </div>
      </div>
      <div id="Top-bare-slider-container">
        <nav className="Menu-container">
          <OneSection parentCallback={callback} link={"/"} title={"ACCUEIL"} />
          <OneSection
            parentCallback={callback}
            link={"/Travaux"}
            title={"TRAVAUX"}
          />
          <OneSection
            parentCallback={callback}
            link={"/Gallery"}
            title={"GALERIE"}
          />
          <OneSection
            parentCallback={callback}
            link={"/Services"}
            title={"SERVICES"}
          />
          <OneSection
            parentCallback={callback}
            link={"/Contact"}
            title={"CONTACT"}
          />
        </nav>
        {/* <div className="network_container">
          <a href="https://www.instagram.com/archviz_dakar/" target="_blank">
            <div className="network">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=221777278655&text=Message provenant de ArchViz.sn"
            target="_blank"
          >
            <div className="network">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
          </a>
          <a
            href="mailto:archviz.sn@gmail.com?subject=Message provenant de ArchViz.sn"
            target="_blank"
          >
            <div className="network">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
          </a>
        </div> */}
      </div>
    </Fragment>
  );
}

//!###################################################
//!###################################################
function OneSection({ title, parentCallback, link }) {
  const [TheLink, setTheLink] = useState("/");

  useEffect(() => {
    switch (title) {
      case "ACCUEIL":
        setTheLink("/");
        break;
      case "TRAVAUX":
        setTheLink("/Travaux");
        break;
      case "SERVICES":
        setTheLink("/Services");
        break;
      case "GALERIE":
        setTheLink("/Galerie");
        break;
      case "CONTACT":
        setTheLink("/Contact");
        break;
      default:
        setTheLink("/");
    }
  });

  const onClickOnTab = (e) => {
    parentCallback(title, link);
    let Menu_slider = document.querySelector("#Top-bare-slider-container");
    let theMenu = document.querySelector(".Menu");
    let allMenuSection = document.querySelectorAll(".One-Section");

    if (theMenu.classList.length > 1) {
      theMenu.classList.remove("Menu_On");
      Menu_slider.style.top = "";
      Menu_slider.style.opacity = "";
      for (let i = 0; i < allMenuSection.length; i++) {
        allMenuSection[i].style.top = ``;
        allMenuSection[i].style.opacity = `0`;
      }
    } else {
      Menu_slider.style.top = "4em";
      Menu_slider.style.opacity = "1";
      theMenu.classList.add("Menu_On");

      for (let i = 0; i < allMenuSection.length; i++) {
        allMenuSection[i].style.top = `1%`;
        allMenuSection[i].style.opacity = `1`;
      }
    }
  };

  return (
    <Fragment>
      <Link to={TheLink} onClick={onClickOnTab} className="One-Section">
        <div className="One-slider-Section">
          <div className="Top-Title">
            <div>{title}</div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
}

//!###################################################

function OneSectionB({ title, parentCallback, link }) {
  const [TheLink, setTheLink] = useState("/");

  useEffect(() => {
    switch (title) {
      case "ACCUEIL":
        setTheLink("/");
        break;
      case "TRAVAUX":
        setTheLink("/Travaux");
        break;
      case "SERVICES":
        setTheLink("/Services");
        break;
      case "GALERIE":
        setTheLink("/Galerie");
        break;
      case "CONTACT":
        setTheLink("/Contact");
        break;
      default:
        setTheLink("/");
    }
  });

  const onClickOnTab = (e) => {
    parentCallback(title, link);
    console.log(e);

    // e.target.childNodes[0].childNodes[1].style.opacity = "";
    // let Menu_slider = document.querySelector("#Top-bare-slider-container");
    // let theMenu = document.querySelector(".Menu");
    let allMenuSection = document.querySelectorAll(".One-slider-Section-B");
    console.log(allMenuSection);

    for (let i = 0; i < allMenuSection.length; i++) {
      //  .style.color = "";
      // console.log(allMenuSection[i]);
      allMenuSection[i].classList.remove("One-slider-Section-B-active");
    }
    // e.target.style.color = "red";
    e.target.classList.add("One-slider-Section-B-active");
    // let AccueilContainer = document.querySelector(".App_container");
    // AccueilContainer.scrollTop = 0;
  };

  const onMouseOverTitle = (e) => {
    e.target.style.transform = "scale(1.1)";
    // e.target.classList.add("One-slider-Section-B-active");
  };

  const onMouseOutTitle = (e) => {
    e.target.style.transform = "";
    // e.target.classList.remove("One-slider-Section-B-active");
  };
  return (
    <Fragment>
      <div className="One-Section-B">
        <Link
          to={TheLink}
          onClick={onClickOnTab}
          onMouseOver={onMouseOverTitle}
          onMouseOut={onMouseOutTitle}
          className="One-slider-Section-B"
        >
          {title}
        </Link>
      </div>
    </Fragment>
  );
}

export default TopBare;
