import { React, useEffect, useState, Fragment } from 'react';

import ImageProjectC1 from '../../Style/Images/Project/Villa_Astan-Ndiaye-1.jpg';
import ImageProjectC2 from '../../Style/Images/Project/Villa_Astan-Ndiaye-2.jpg';
import ImageProjectC3 from '../../Style/Images/Project/Villa_Astan-Ndiaye-3.jpg';
import ImageProjectC4 from '../../Style/Images/Project/Villa_Astan-Ndiaye-4.jpg';
import ImageProjectC5 from '../../Style/Images/Project/Villa_Astan-Ndiaye-5.jpg';
import ImageProjectC6 from '../../Style/Images/Project/Villa_Astan-Ndiaye-6.jpg';
import ImageProjectC7 from '../../Style/Images/Project/Villa_Astan-Ndiaye-7.jpg';
import ImageProjectC8 from '../../Style/Images/Project/Villa_Astan-Ndiaye-8.jpg';

function SmallHouse1({ }) {
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

            <div className='Villa_A_container'>
                <div className='project_display'>
                    <h1 className='project_title'>
                        Villa Teranga
                    </h1>
                    <h3 className='project_description'>
                        par Bokar Ndiaye | 17 Juillet, 2023 |
                    </h3>
                    <p>
                        Des designs Modernes et épurés. Nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives.
                    </p>
                    <a className='the_links' href='https://archviz-villa-astan.netlify.app/' target="_blank">
                        Experience VR/AR <ion-icon name="arrow-forward-outline"></ion-icon>
                    </a>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC4} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='47%' />
                        <img onClick={displayImage} src={ImageProjectC2} width='47%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC3} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC7} width='100%' />
                    </div>
                    <h2 className='project_title'>
                        Animation
                    </h2>
                    <div className='the_video'>
                        <iframe width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/aafE_jngoiM"
                            title="Interior Design"
                            allow="accelerometer; 
                            autoplay; clipboard-write;
                            encrypted-media; gyroscope;
                            picture-in-picture"
                            allowFullScreen>

                        </iframe>
                    </div>



                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC8} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC5} width='47%' />
                        <img onClick={displayImage} src={ImageProjectC6} width='47%' />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}




export default SmallHouse1;
