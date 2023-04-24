import React, {useContext, useEffect, useState} from 'react';

import {useInView} from 'react-intersection-observer';
import {NavContext} from "../Outlet/context";


import {Main, Header} from './Main.styled'
import Showreel from "../Showreel";
import {ReactComponent as Logo} from '@assets/images/logoBig.svg';
import Projects from "../Projects";
import axios from "axios";
import {baseApiUrl} from "../../config/api";


const Index = () => {

    const [worksConfig, setConfig] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            axios.get(`${baseApiUrl}`).then((response)=>{
                setConfig(response.data);
                console.log(response)
                setIsLoading(false);
            }).catch(e=> {
                console.error(e)
                setError(e);
                console.log(e)
                setIsLoading(false)
            })
        }

        fetchUsers();
    }, []);

    const clients = ['https://i.imgur.com/WywKjVE.png', 'https://i.imgur.com/Yg6BOQB.png', 'https://i.imgur.com/n59SVIt.png', 'https://i.imgur.com/gIicGk9.png', 'https://i.imgur.com/T7iFKHO.png', 'https://i.imgur.com/MrcdrTM.png']

    const [visibleElements, setVisibleElements] = useState([]);
    const [refElement1, inViewElement1] = useInView({threshold: 0.5});
    const [refElement2, inViewElement2] = useInView({threshold: 0.5});
    const [refElement3, inViewElement3] = useInView({threshold: 0.5});

    useEffect(() => {
        if (inViewElement1) {
            setVisibleElements((prev) => [...prev, 'element-1']);
        } else {
            setVisibleElements((prev) => prev.filter((id) => id !== 'element-1'));
        }
    }, [inViewElement1]);
    useEffect(() => {
        if (inViewElement2) {
            setVisibleElements((prev) => [...prev, 'element-2']);
        } else {
            setVisibleElements((prev) => prev.filter((id) => id !== 'element-2'));
        }
    }, [inViewElement2]);
    useEffect(() => {
        if (inViewElement3) {
            setVisibleElements((prev) => [...prev, 'element-3']);
        } else {
            setVisibleElements((prev) => prev.filter((id) => id !== 'element-3'));
        }
    }, [inViewElement3]);
    const handleClickNavigation = (id) => {
        const section = document.querySelector(`#${id}`)
        let offsetPosition = section.getBoundingClientRect().top + window.pageYOffset - 100;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    const [filter, setFilter] = useState([])

    const {val} = useContext(NavContext)

    return (
        <>
            <Header>
                <div className="global-wrapper">
                    <div className="logo">
                        <Logo/>
                    </div>
                    <div className="description">
                        <p className="description-title">NameZS — это Motion-дизайн:</p>
                        <div className="description-pointers">
                            <div className="description-pointers_point">
                                <span>( 1 )</span>
                                <p>Который работает.</p>
                            </div>
                            <div className="description-pointers_point">
                                <span>( 2 )</span>
                                <p>Которому доверяют.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Header>
            <Showreel/>
            <Main>
                <section className="about">
                    <div className="global-wrapper">
                        <div className="main-links">
                            <ul className={val && 'scroll'}>
                                <li onClick={() => handleClickNavigation('partners')}
                                    style={{color: visibleElements[0] === 'element-1' ? 'white' : '#666666'}}>Наши
                                    клиенты
                                </li>
                                <li onClick={() => handleClickNavigation('stek')}
                                    style={{color: visibleElements[0] === 'element-2' ? 'white' : '#666666'}}>Наш стек
                                </li>
                                <li onClick={() => handleClickNavigation('projects')}
                                    style={{color: visibleElements[0] === 'element-3' ? 'white' : '#666666'}}>Наши
                                    проекты
                                </li>
                            </ul>
                        </div>
                        <div className="main-content">
                            <section ref={refElement1} data-element="element-1" className='block' id="partners">
                                <div className='inner'>
                                    <span>Нам готовы довериться</span>
                                    <div className="partners-blocks">
                                        {
                                            clients.map((partner, key) => (
                                                <div key={key} className="partners-blocks_block">
                                                    <img src={partner} alt=""/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <p>+80 довольных клиентов</p>
                                </div>
                            </section>
                            <section ref={refElement2} data-element="element-2" className='block' id="stek">
                                <div className='inner'>
                                    <ul>
                                        <li>Motion
                                            Desing
                                        </li>
                                        <li
                                        >Моделинг
                                        </li>
                                        <li
                                        >Композитинг
                                        </li>
                                        <li
                                        >Риг
                                        </li>
                                        <li
                                        >Cleanup
                                        </li>
                                    </ul>
                                    <ul>
                                        <li
                                        >VFX
                                        </li>
                                        <li
                                        >Скульптинг
                                        </li>
                                        <li
                                        >Шейдинг
                                        </li>
                                        <li>Текстуринг
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                <section ref={refElement3} data-element="element-3" id='projects' className="block projects">
                    <Projects/>
                </section>
            </Main>
        </>
    );
};

export default Index;