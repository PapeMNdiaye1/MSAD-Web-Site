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
