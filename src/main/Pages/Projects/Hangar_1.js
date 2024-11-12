import { React, useEffect, useState, Fragment } from 'react';


import ImageProjectC1 from '../../Style/Images/Project/Hangar-1.jpg';
import ImageProjectC2 from '../../Style/Images/Project/Hangar-2.jpg';
import ImageProjectC3 from '../../Style/Images/Project/Hangar-3.jpg';
import ImageProjectC4 from '../../Style/Images/Project/Hangar-4.jpg';



function Hangar_1({ }) {

    const [TheImageContainer, setTheImageContainer] = useState(false);
    const [TheImageInTheContainer, setTheImageInTheContainer] = useState(ImageProjectC1);

    useEffect(() => {
        let ToDisplayonBLoade = document.querySelector(".before-loader")
        ToDisplayonBLoade.style.display = 'none';

        let Page_slider = document.querySelector('.page_title_slider')
        Page_slider.style.opacity = `0`


        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;

        let hoverLoaderContainer = document.querySelector(".hover_loader_container")
        hoverLoaderContainer.style.display = 'flex';

        setTimeout(function () {
            hoverLoaderContainer.style.display = '';
        }, 1500);


        return () => {
            Page_slider.style.opacity = `1`
            ToDisplayonBLoade.style.display = 'flex';
            AccueilContainer.scrollTop = 0;
        }
    }, []);

    const displayImage = (e) => {
        if (TheImageContainer) {
            setTheImageContainer(false);
        } else {
            setTheImageInTheContainer(e.target.getAttribute("src"))
            setTheImageContainer(true);
        }
    }

    return (
        <Fragment>
            {TheImageContainer &&
                <div className='display_image_container'>
                    <div>
                        <div
                            onClick={displayImage}
                            className='close_image_container'>
                        </div>
                        <img src={TheImageInTheContainer} width='100%' />
                    </div>
                </div>
            }

            <div className='Hangar_1_container'>

                <div className='project_display'>
                    <h1 className='project_title'>
                        Maquette Hangar Photovoltaïque
                    </h1>
                    <h3 className='project_description'>
                        par Pape Momar Ndiaye | 09 Juin, 2021 |
                    </h3>
                    <p>
                        Le rendu et l'animation avec des temps de production de plus en plus rapide ont ouvert la porte à un monde de variations infinies dans la conception graphique adaptée à vos demandes uniques.                                       </p>
                    <div className='TheImageContainer'>
                        <img loading="lazy" onClick={displayImage} src={ImageProjectC2} width='100%' alt=' Maquette Hangar Photovoltaïque - 1' />
                    </div>
                    <div className='TheImageContainer'>
                        <img loading="lazy" onClick={displayImage} src={ImageProjectC4} width='47%' alt=' Maquette Hangar Photovoltaïque - 2' />
                        <img loading="lazy" onClick={displayImage} src={ImageProjectC3} width='47%' alt=' Maquette Hangar Photovoltaïque - 3' />
                    </div>
                    <div className='TheImageContainer'>
                        <img loading="lazy" onClick={displayImage} src={ImageProjectC1} width='100%' alt=' Maquette Hangar Photovoltaïque - 4' />
                    </div>
                </div>
            </div>
        </Fragment >
    );

}

export default Hangar_1;
