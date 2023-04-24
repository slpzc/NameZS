import React from 'react';
import {Main} from './About.styled'
import styled from "styled-components";
import Showreel from "../Showreel";
const Index = () => {

    const clients = ['https://i.imgur.com/WywKjVE.png', 'https://i.imgur.com/Yg6BOQB.png', 'https://i.imgur.com/n59SVIt.png', 'https://i.imgur.com/gIicGk9.png', 'https://i.imgur.com/T7iFKHO.png', 'https://i.imgur.com/MrcdrTM.png']

    return (
        <Main>
            <section className="about">
                <div className="global-wrapper">
                    <span className='title'>О нас</span>
                    <p>Основанная в 2022 году <span>Игорем Гребенников</span> после 10 лет работы в этой области, наша
                        студия занимается разработкой интуитивно понятных, красивых и эффективных новых брендов и
                        цифровых продуктов или масштабированием и развитием существующих. <br/> <br/>
                        Мы сотрудничаем с технологическими компаниями и становимся продолжением их команды и частью
                        видения их основателей. Мы не просто выполняем работу: благодаря нашему опыту мы помогаем им
                        находить решения, формировать бизнес и создавать значимые и сильные продукты.  <br/> <br/> Наша команда так
                        же разнообразна, как и люди, с которыми мы работаем, мы глубоко увлечены созданием выдающегося
                        цифрового опыта и постоянно стремимся к совершенствованию.</p>
                </div>
            </section>
            <section className="clients">
                <div className="global-wrapper">
                    <span className="title">Наши клиенты</span>
                    <div className="content partners">
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
                </div>
            </section>
            <Showreel/>
        </Main>
    );
};

export default Index;