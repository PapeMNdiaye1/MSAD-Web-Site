import { React, useEffect } from "react";

function Contacts({}) {
  useEffect(() => {
    let ThePageTitle = document.querySelectorAll(".One-slider-Section-B");

    ThePageTitle.forEach((e) => {
      e.style.color = "";
      e.style.color = "";
      e.style.fontWeight = "";
    });

    ThePageTitle[4].style.transform = "scale(1.1)";
    ThePageTitle[4].style.color = "#C9A050";
    ThePageTitle[4].style.fontWeight = "400";

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
    <div id="Contacts">
      {/* <div className="Contact-container">
        <OneSection
          link={"mailto:archviz.sn@gmail.com?subject=The message"}
          title={
            <div className="network">
              <ion-icon name="mail-outline"></ion-icon>MAIL
            </div>
          }
          title2={<div className="network">archviz.sn@gmail.com</div>}
        />
        <OneSection
          link={"https://www.youtube.com/@archviz-dakar"}
          title={
            <div className="network">
              <ion-icon name="logo-youtube"></ion-icon>YOUTUBE
            </div>
          }
          title2={<div className="network">@archviz-dakar</div>}
        />
        <OneSection
          link={
            "https://api.whatsapp.com/send?phone=221777278655&text=The message"
          }
          title={
            <div className="network">
              <ion-icon name="logo-whatsapp"></ion-icon>WHATSAPP
            </div>
          }
          title2={<div className="network">+221 777278655</div>}
        />
        <OneSection
          link={"https://www.instagram.com/archviz_dakar/"}
          title={
            <div className="network">
              <ion-icon name="logo-instagram"></ion-icon>INSTAGRAM
            </div>
          }
          title2={<div className="network">@arch_viz_sn</div>}
        />
        <OneSection
          link={"https://www.facebook.com/ARVHVIZ/"}
          title={
            <div className="network">
              <ion-icon name="logo-facebook"></ion-icon>FACEBOOK
            </div>
          }
          title2={<div className="network">f/ARCHVIZ</div>}
        />
        <OneSection
          link={"https://www.linkedin.com/company/archviz-sn/"}
          title={
            <div className="network">
              <ion-icon name="logo-linkedin"></ion-icon>LINKEDIN
            </div>
          }
          title2={<div className="network">in/Archviz</div>}
        />
      </div> */}
    </div>
  );
}

export default Contacts;
