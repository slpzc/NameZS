import React, {useEffect, useState} from 'react';
import {Main, Popup} from './Projects.styled';
import axios from "axios";

const Index = () => {

    const [worksConfig, setConfig] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [video, setVideo] = useState(null)
    useEffect(() => {
        async function fetchUsers() {
            axios.get('http://localhost:3002/').then((response)=>{
                setConfig(response.data);
                setIsLoading(false);
                console.log(response)
            }).catch(e=> {
                console.error(e)
                setError(e);
                setIsLoading(false)
            })
        }

        fetchUsers();
    }, []);

    let works = worksConfig?.projects
    let workwith = worksConfig?.workTypes
    const [filter, setFilter] = useState([])
    const handleFilter = (value) => {
        if (filter.includes(value)) {
            setFilter(filter.filter((item) => item !== value));
        } else {
            setFilter([...filter, value]);
        }
    }

    const filteredWorks = filter.length ? works.filter(work => {
        const types = work.types // ["Motion Design", "VFX"]
        const instrumnets = workwith // ["все эти хуйни"]
        let flag = false;
        // filter - это выбранные фильтры: ["VFX", "Скульптинг"]
        for (let i = 0; i < filter.length; i++) {
            const Filter_element = filter[i];
            if (types.includes(Filter_element)) {
                flag = work;
            }
        }

        return flag
    }) : works

    const handleVideo = (src) => {
        // alert(src)
        setVideo(src)
    }

    return (
        <Main>
            <Popup className={ video ? 'active' : '' }>
              <div className="popup-content">
                  <iframe width="66%" height="100%" src={video}
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen></iframe>
                  <svg onClick={ ()=> handleVideo(null) } width="64" height="56" viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_254_540)">
                          <path d="M17.8579 14.1421L46.1422 42.4264" stroke="#FAFAFA" strokeWidth="4" strokeLinecap="round"/>
                          <path d="M17.8579 42.4264L46.1422 14.1421" stroke="#FAFAFA" strokeWidth="4" strokeLinecap="round"/>
                      </g>
                      <defs>
                          <clipPath id="clip0_254_540">
                              <rect width="64" height="56" fill="white"/>
                          </clipPath>
                      </defs>
                  </svg>
              </div>
            </Popup>
            <div className="global-wrapper">
                <b className='title'>Наши проекты</b>
                <div className="filters">
                    {
                        workwith &&
                        workwith.map(({title}, key) => (
                            <span className={` ${filter.indexOf(title) !== -1 && 'selected'} `}
                                  onClick={() => handleFilter(title)}
                                  key={key}
                            >{title}</span>
                        ))
                    }
                </div>
                <div className="works">
                    {
                        filteredWorks &&
                        filteredWorks.map((card, key) => (

                            <div style={{ maxWidth: `${card.width}px`, width: `100%`}} key={key}
                                 className="works-card"
                                onClick={ ()=> handleVideo(card.video) }

                            >
                                <img style={{maxWidth: card.width, width: "100%"}} src={card.img}/>
                                <div className="works-card_content">
                                    <p>{card.title}</p>
                                    <div className='bullets'>
                                        {
                                            card.types.map((type, k) => (
                                                <span onClick={() => handleFilter(type)} key={k}>{type}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Main>
    );
};

export default Index;