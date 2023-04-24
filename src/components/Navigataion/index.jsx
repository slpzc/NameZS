import React, {useContext, useEffect, useState} from 'react';

import {ReactComponent as LogoMini} from '@assets/images/logoMini.svg';
import {useNavigate} from "react-router-dom";
import {NavContext, LoaderContext} from "../Outlet/context";
import {Nav} from './Nav.styled'

const Index = () => {
    const navigate = useNavigate();

    const {handleLoader} = useContext(LoaderContext);
    const [scrolled, setScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const {curr, NavPossible} = useContext(NavContext)
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingDown = currentScrollPos > prevScrollPos;
            setScrolled(isScrollingDown && currentScrollPos > 50);
            // console.log('SCROLLED ', scrolled)
            NavPossible(scrolled);

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const handleRoute = (path) => {
        handleLoader(true);
        scrollToTop()
        setTimeout(()=> {
            navigate(path);
            scrollToTop()
        },1000)
        setTimeout(() => {
            handleLoader(false);
        }, 2000)
    }
    return (
        <Nav className={scrolled && 'scrolled'}>
            <div className="boilerplate">
                <div className="global-wrapper">
                    <div className="logo">
                        <LogoMini onClick={() => handleRoute('/')}/>
                    </div>
                    <div className="links">
                        <ul>
                            <li onClick={() => handleRoute('/projects')}>Наши проекты</li>
                            <li onClick={() => handleRoute('/about')}>О нас</li>
                            <a target='_blank' href='https://discord.gg/tEAPhwDH5H' rel="noreferrer">Связаться</a>
                        </ul>
                    </div>
                </div>
            </div>
        </Nav>
    );
};

export default Index;