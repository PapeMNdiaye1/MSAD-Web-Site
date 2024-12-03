import { React, useEffect, useState, Fragment } from "react";
// import { TheArticles } from "./Accueil";
import { Link } from "react-router-dom";

function Articles({
  TheImageToArticles,
  TheTitleToArticles,
  TheDateToArticles,
  TheLinkToArticles,
}) {
  const [TheImage, setTheImage] = useState("");
  const [TheTitle, setTheTitle] = useState("");
  const [TheDate, setTheDate] = useState("");
  const [TheLink, setTheLink] = useState("/");

  const [TheChangeInArticles, setTheChangeInArticles] = useState(false);
  const [TheImageContainer, setTheImageContainer] = useState(false);
  const [LoadArticlesContainer, setLoadArticlesContainer] = useState(false);

  useEffect(() => {
    let ThePageTitle = document.querySelectorAll(".One-slider-Section-B");

    ThePageTitle.forEach((e) => {
      e.style.color = "";
      e.style.color = "";
      e.style.fontWeight = "";
    });

    ThePageTitle[3].style.transform = "scale(1.1)";
    ThePageTitle[3].style.color = "#C9A050";
    ThePageTitle[3].style.fontWeight = "400";

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
      <div id="Articles"></div>
    </Fragment>
  );
}

export default Articles;
