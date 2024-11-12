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
    console.log("opp Travaux");
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
    <div id="Travaux">
      {/* <section className="Travaux-Header">
        <h1 className="visualization-projects">Nos Réalisations</h1>

        <p className="visualization-projects-description">
          Nos rendues photoréalistes offrent une visibilité accrue aux projets
          immobiliers, en permettant une visualisation réaliste avant leur
          réalisation. Cela suscite l'intérêt des clients cibles et convainc les
          acheteurs potentiels. En somme, nous donnons vie à vos projets.{" "}
        </p>
      </section>
      <section className="AccueilBigProjectsSection">
        <OneBigProject
          title={"Villa Teranga"}
          image={ImageProjectH1}
          description={
            "Des designs Modernes et épurés. Nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives."
          }
          color={"#4c525c"}
          textcolor={"#f1f1f1"}
          theKey={1}
          link={"/Villa"}
          side={"left"}
          The_Experience={true}
          The_Experience_Link={"https://archviz-villa-astan.netlify.app/"}
        />

        <OneBigProject
          title={"Appartement Bamba Ba"}
          image={ImageProjectJ1}
          description={
            "À l'aide des logiciels de dernière génération et de notre savoir-faire dans le domaine de l’architecture d’intérieur. Nous vous aidons dans l’aménagement de vos espaces."
          }
          color={"#8a6f54"}
          textcolor={"#f1f1f1"}
          theKey={2}
          link={"/Appartement-F4-A"}
          side={"right"}
          The_Experience={true}
          The_Experience_Link={"https://archviz-villa-bamba-ba.netlify.app/"}
        />

        <OneBigProject
          title={"Cité El Hadj Amadou BA"}
          image={ImageProjectB1}
          description={
            "Ce projet comprend des villas familiales, des bâtiments commerciaux et résidentiels ainsi que des lieux publics. Notre travail se partage à parts égales entre les animations architecturales et les rendus 3D. Nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs."
          }
          color={"#EAEAEA"}
          textcolor={"#222"}
          theKey={3}
          link={"/City1"}
          side={"left"}
          The_Experience={false}
        />

        <OneBigProject
          title={"Design pour les Commerces"}
          image={ImageProjectE4}
          description={
            "Nous avons une grande expérience dans l’agencement de point de vente, et l’aménagement de bureaux. Quelle que soit la typologie du point de vente, sa vocation, sa stratégie et son positionnement."
          }
          color={"#F4EFE4"}
          textcolor={"#664f3c"}
          theKey={4}
          link={"/Pharmacie1"}
          side={"right"}
          The_Experience={false}
        />

        <OneBigProject
          title={"Villa Onomo"}
          image={ImageProjectO1}
          description={
            "Des designs Modernes et épurés. Nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives."
          }
          color={"#a39081"}
          textcolor={"#222"}
          theKey={5}
          link={"/Villa_Onomo"}
          side={"left"}
          The_Experience={false}
        />

        <OneBigProject
          title={"Résidence Pierre de Lune"}
          image={ImageProjectC3}
          description={`Les plans d'étage isométriques offrent une vue en trois dimensions des configurations d'un bien immobilier, aidant les clients à mieux comprendre la disposition spatiale et la fonctionnalité des différentes zones.`}
          color={"#F1F1F1"}
          textcolor={"#222"}
          theKey={6}
          link={"/Immeuble-Talles"}
          side={"right"}
          The_Experience={false}
        />

        <OneBigProject
          title={"Villa Al Amin"}
          image={ImageProjectL1}
          description={
            "Les visites virtuelles offrent de nombreux avantages pour les acheteurs, propriétaires et agents immobiliers. Pour les acheteurs, elles permettent de visualiser les propriétés sans se déplacer. Pour les agents immobiliers, elles peuvent diffuser les propriétés à plus de gens, ce qui peut conduire à une vente plus rapide..."
          }
          color={"#664f3c"}
          textcolor={"#F4EFE4"}
          theKey={7}
          link={"/VillaTerangaAlAmin"}
          side={"left"}
          The_Experience={true}
          The_Experience_Link={
            "https://archviz-villa-teranga-al-amine.netlify.app/"
          }
        />

        <OneBigProject
          title={"Espace Sportif"}
          image={ImageProjectK4}
          description={
            "Nous avons une vaste expérience dans l'aménagement d'espaces communs et de bureaux, quelle que soit leur typologie, leur vocation, leur stratégie et leur positionnement."
          }
          color={"#495D68"}
          textcolor={"#f1f1f1"}
          theKey={8}
          link={"/Gym"}
          side={"right"}
          The_Experience={false}
        />

        <OneBigProject
          title={"Villa Saly"}
          image={ImageProjectI2}
          description={
            "Des designs Modernes, épurés, etc…. nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives."
          }
          color={"#F1F1F1"}
          textcolor={"#222"}
          theKey={9}
          The_Experience={true}
          The_Experience_Link={"https://villa-r-1.netlify.app/"}
          link={"/Villa-Saly"}
          side={"left"}
        />

        <OneBigProject
          title={"Villa Samb"}
          image={ImageProjectS1}
          description={`Visualisez et concrétisez vos projets d'aménagement grâce à l'accompagnement de nos architectes d'intérieur.`}
          color={"#2b2828"}
          textcolor={"#f1f1f1"}
          theKey={10}
          link={"/VillaSamb"}
          The_Experience={false}
          side={"right"}
        />

        <OneBigProject
          title={"La 3D dans le domaine des Industries"}
          image={ImageProjectF2}
          description={
            "Le rendu et l'animation avec des temps de production de plus en plus rapide ont ouvert la porte à un monde de variations infinies dans la conception graphique adaptée à vos demandes uniques."
          }
          color={"#F1F1F1"}
          textcolor={"#222"}
          theKey={11}
          link={"/Hangar1"}
          side={"left"}
          The_Experience={false}
        />

        <OneBigProject
          title={"Design Bureau"}
          image={ImageProjectD3}
          description={
            "Visualisez votre bureau avant de le construire. La modélisation 3D vous permet d'explorer les agencements, le placement des meubles et les éléments de design, le tout virtuellement."
          }
          color={"#222"}
          textcolor={"#f1f1f1"}
          theKey={12}
          link={"/Design_Bureau"}
          The_Experience={false}
          side={"right"}
        />

        <OneBigProject
          title={"Villa Sarr"}
          image={ImageProjectQ1}
          description={`Notre équipe d'experts est là pour vous accompagner à chaque étape de vos projets, de la conception à la réalisation. Nous offrons des services personnalisés afin de répondre à toutes vos attentes.`}
          color={"#f1f1f1"}
          textcolor={"#000"}
          theKey={13}
          link={"/VillaSarr"}
          The_Experience={false}
          side={"left"}
        />
      </section> */}
    </div>
  );
};

export default Travaux;
