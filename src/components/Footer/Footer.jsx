import React, {useContext} from 'react';
import {FooterStyled, FooterNavigation} from './Footer.styled'
import {useNavigate} from "react-router-dom";
import {LoaderContext} from "../Outlet/context";

const Footer = () => {
    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const {handleLoader} = useContext(LoaderContext);
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
        <>
            <FooterStyled>
            <h2>Обсудим? <svg width="81" height="91" viewBox="0 0 81 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M69.8951 22.1517C69.8951 22.1517 76.4515 19.5884 75.9051 25.8136C75.723 28.377 74.0839 37.3488 72.809 47.0529L68.4381 75.7992C68.4381 75.7992 68.0739 80.0103 64.7956 80.7428C61.5173 81.4751 56.6001 78.1795 55.6894 77.447C54.9609 76.8978 42.0302 68.6583 37.477 64.6302C36.2021 63.5316 34.7451 61.3344 37.6591 58.7711L56.7822 40.4615C58.9677 38.2643 61.1531 33.1376 52.0469 39.3629L26.5496 56.7571C26.5496 56.7571 23.6356 58.588 18.172 56.9402L6.3339 53.2782C6.3339 53.2782 1.96292 50.5318 9.43 47.7852C27.6424 39.1796 50.0437 30.391 69.8951 22.1517Z"
                    fill="#FAFAFA"/>
            </svg>
            </h2>
        </FooterStyled>
            <FooterNavigation>
                <div className="global-wrapper">
                    <svg onClick={() => handleRoute('/')} style={{ cursor: "pointer" }} width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_127_292)">
                            <path d="M15.1875 27H18.5625V21.9375H15.1875V27Z" fill="#FAFAFA"/>
                            <path d="M15.1875 18.5625H18.5625V0H15.1875V18.5625Z" fill="#FAFAFA"/>
                            <path d="M15.1875 27H27V23.625H15.1875V27Z" fill="#FAFAFA"/>
                            <path d="M15.1875 18.5625H27V15.1875H15.1875V18.5625Z" fill="#FAFAFA"/>
                            <path d="M15.1875 3.375H27V0H15.1875V3.375Z" fill="#FAFAFA"/>
                            <path d="M23.625 27H27V16.875H23.625V27Z" fill="#FAFAFA"/>
                            <path d="M23.625 11.8125H27V0H23.625V11.8125Z" fill="#FAFAFA"/>
                            <path d="M0 0H3.375V5.0625H0V0Z" fill="#FAFAFA"/>
                            <path d="M0 8.4375H3.375V27H0V8.4375Z" fill="#FAFAFA"/>
                            <path d="M0 0H11.8125V3.375H0V0Z" fill="#FAFAFA"/>
                            <path d="M0 8.4375H11.8125V11.8125H0V8.4375Z" fill="#FAFAFA"/>
                            <path d="M0 23.625H11.8125V27H0V23.625Z" fill="#FAFAFA"/>
                            <path d="M8.4375 0H11.8125V10.125H8.4375V0Z" fill="#FAFAFA"/>
                            <path d="M8.4375 15.1875H11.8125V27H8.4375V15.1875Z" fill="#FAFAFA"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_127_292">
                                <rect width="27" height="27" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p onClick={() => handleRoute('/projects')}>Наши проекты</p>
                    <p onClick={() => handleRoute('/about')}>О нас</p>
                    <a href='https://t.me/' >Связаться</a>
                </div>
            </FooterNavigation>
        </>
    );
};

export default Footer;