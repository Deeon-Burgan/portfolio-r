import React from 'react'
import Navbar from '../header/navbar';
import MainPiece from '../main-piece/MainPiece'
import LineBreak from '../LineBreak/LineBreak';
import FeaturedGames from '../FeaturedGames/FeaturedGames';
import News from '../News/News';
import ImageBreak from '../ImageBreak/ImageBreak';
import Gallery from '../Gallery/Gallery';
import GamePitch from '../GamePitch/GamePitch';
import FlagBreak from '../FlagBreak/FlagBreak';
import LandingAbout from '../LandingAbout/LandingAbout';
import Skills from '../Skills/Skills';
import Project from '../Project/Project';
import { useRef, useEffect } from 'react';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export default function HomePage(params) {

    let scrollpoint = params.location.state?.scrollpoint;
    const projectRef = useRef();
    const skillsRef = useRef();
    const navbarRef = useRef();

    useEffect(() => {
        if (!!scrollpoint) {
            console.log('scrollpoint exists');
            switch (scrollpoint) {
                case 'Projects':
                    if (projectRef) {
                        projectRef.current.scrollIntoView({ behaviour: 'smooth' });
                        console.log('Should scroll to projects')
                    }
                    break;
                case 'Skills':
                    if (skillsRef) {
                        skillsRef.current.scrollIntoView({ behaviour: 'smooth' });
                        console.log('Should scroll to skills')
                    }
                    break;
                    default:
                        break;
            }
        }
    }, [scrollpoint])

    const scrollToTop = () => {
        scrollpoint = 'Header';
    }

    return (
        <div>
            <Navbar ref={navbarRef}/>
            <LandingAbout />
            <LineBreak line='Portfolio' />
            <MainPiece />
            <LineBreak line='Featured Projects' />
            <FeaturedGames />
            <LineBreak line='Blog' />
            <News />
            {/* <ImageBreak image='https://static.wixstatic.com/media/bc9d97_b82bad3f1c38450785da09f6c8862096~mv2.jpg/v1/fill/w_980,h_189,al_c,q_90/archangel_hellfire.webp'/> */}
            <FlagBreak />
            <LineBreak line='Projects' />
            <Gallery ref={projectRef} />
            <LineBreak line='Skills' />
            <Skills ref={skillsRef} />
            <ScrollToTop func={scrollToTop}/>
            <FlagBreak/>
        </div>
    )
}
