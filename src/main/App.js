import "./Style/Style.css";
import React, { useState, Suspense, Fragment } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import { Accueil } from "./Pages/Accueil";
import { TheFooter } from "./Pages/Accueil";
import Historique from "./Pages/Historique";
import Travaux from "./Pages/Travaux";
import Articles from "./Pages/Articles";

const TopBare = React.lazy(() => import("./TopBare"));
const Contact = React.lazy(() => import("./Pages/Contact"));

//!###############################################################
//!###############################################################
//!###############################################################
function TheLoader() {
  return (
    <Fragment>
      <div className="before-loader">
        <div className="hover_loader">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="hover_loader_container">
        <div className="hover_loader">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
//!###############################################################

const ImmeubleTalles = React.lazy(() =>
  import("./Pages/Projects/Immeuble_Talles")
);
const SmallHouse1 = React.lazy(() => import("./Pages/Projects/Villa_Onomo"));
const Hangar1 = React.lazy(() => import("./Pages/Projects/Hangar_1"));
const DesignBureau = React.lazy(() => import("./Pages/Projects/Design_Office"));
const Pharmacie1 = React.lazy(() => import("./Pages/Projects/Pharmacie_1"));
// const AppartementFA = React.lazy(() =>
//   import("./Pages/Projects/Appartement-F4-A")
// );
const Gym = React.lazy(() => import("./Pages/Projects/Gym"));
const City1 = React.lazy(() => import("./Pages/Projects/Cité"));
const Villa = React.lazy(() => import("./Pages/Projects/Villa_A"));
const ChaîneDeTravail = React.lazy(() =>
  import("./Pages/Projects/Chaîne_De_Travail")
);
const VillaTerangaAlAmin = React.lazy(() =>
  import("./Pages/Projects/Villa_Teranga_Al_Amin")
);
const VillaSamb = React.lazy(() => import("./Pages/Projects/Villa_Samb"));
const VillaSarr = React.lazy(() => import("./Pages/Projects/Villa_Sarr"));
const Formation = React.lazy(() => import("./Pages/Projects/Formation"));

//!###############################################################
function App() {
  const [TheImage, setTheImage] = useState("");
  const [TheTitle, setTheTitle] = useState("");
  const [TheDate, setTheDate] = useState("");
  const [TheLink, setTheLink] = useState("/");

  const changeTab = (newTab, link) => {
    console.log(newTab, link);
    let TheFooter = document.querySelector(".the_footer");
    TheFooter.style.opacity = "0";
  };

  const GetImage = (theimage, title, date, link) => {
    setTheImage(theimage);
    setTheTitle(title);
    setTheDate(date);
    setTheLink(link);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <TopBare onChangeTab={changeTab} />
        <div className="App_container">
          <TheLoader />
          <Routes>
            <Route
              exact
              path="/"
              element={<Accueil GetImageToApp={GetImage} />}
            />
            <Route exact path="/Travaux" element={<Travaux />} />
            <Route exact path="/Articles" element={<Articles />} />
            <Route exact path="/Historique" element={<Historique />} />

            <Route
              exact
              path="/Contact"
              element={
                <Suspense fallback={<TheLoader />}>
                  <Contact />
                </Suspense>
              }
            />

            {/* !############################################## */}

            <Route
              exact
              path="/Immeuble-Talles"
              element={
                <Suspense fallback={<TheLoader />}>
                  <ImmeubleTalles />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Villa_Onomo"
              element={
                <Suspense fallback={<TheLoader />}>
                  <SmallHouse1 />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Hangar1"
              element={
                <Suspense fallback={<TheLoader />}>
                  <Hangar1 />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Design_Bureau"
              element={
                <Suspense fallback={<TheLoader />}>
                  <DesignBureau />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Pharmacie1"
              element={
                <Suspense fallback={<TheLoader />}>
                  <Pharmacie1 />
                </Suspense>
              }
            />
            {/* <Route
              exact
              path="/Appartement-F4-A"
              element={
                <Suspense fallback={<TheLoader />}>
                  <AppartementFA />
                </Suspense>
              }
            /> */}
            <Route
              exact
              path="/Gym"
              element={
                <Suspense fallback={<TheLoader />}>
                  <Gym />
                </Suspense>
              }
            />
            <Route
              exact
              path="/City1"
              element={
                <Suspense fallback={<TheLoader />}>
                  <City1 />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Villa"
              element={
                <Suspense fallback={<TheLoader />}>
                  <Villa />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Chaîne-De-Travail"
              element={
                <Suspense fallback={<TheLoader />}>
                  <ChaîneDeTravail />
                </Suspense>
              }
            />
            <Route
              exact
              path="/VillaTerangaAlAmin"
              element={
                <Suspense fallback={<TheLoader />}>
                  <VillaTerangaAlAmin />
                </Suspense>
              }
            />
            <Route
              exact
              path="/VillaSamb"
              element={
                <Suspense fallback={<TheLoader />}>
                  <VillaSamb />
                </Suspense>
              }
            />
            <Route
              exact
              path="/VillaSarr"
              element={
                <Suspense fallback={<TheLoader />}>
                  <VillaSarr />
                </Suspense>
              }
            />
            <Route
              exact
              path="/Formation"
              element={
                <Suspense fallback={<TheLoader />}>
                  <Formation />
                </Suspense>
              }
            />
          </Routes>
          <TheFooter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
