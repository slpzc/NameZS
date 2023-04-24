import React, {useEffect, useRef, useState} from 'react';
import Navigataion from "@components/Navigataion";
import {Outlet} from "react-router-dom";
import styled from 'styled-components';
import {NavContext} from '@/components/Outlet/context.js';
import Footer from "@components/Footer/Footer.jsx";
import Loader from "../loader";


const Cursor = styled.div`
  user-select: none;
  pointer-events: none;
  top: ${({top}) => top}px;
  left: ${({left}) => left}px;
  z-index: 99999999;
  width: 128px;
  height: 128px;
  border: 1.5px solid hsla(0, 0%, 100%, .08);
  border-radius: 100%;
  background-color: hsla(0, 0%, 100%, .04);
  -webkit-transition: .2s;
  backface-visibility: hidden;
  transition: top 0.2s ease-out, left 0.2s ease-out, transform 0.2s ease-out;
  position: fixed;
  transform: scale(1);

  &.move {
    transform: scale(0.7);
  }
  @media (max-width: 800px){
    display: none;
  }
`

const Index = () => {
    const [isMouseMoving, setIsMouseMoving] = useState(false);
    const [mousePos, setMousePos] = useState({x: 0, y: 0});
    const boxRef = useRef(null);
    useEffect(() => {
        const box = boxRef.current;
        const cursorPxNow = 64
        requestAnimationFrame(() => {
            box.style.left = `${mousePos.x - cursorPxNow}px`;
            box.style.top = `${mousePos.y - cursorPxNow}px`;
        })
        let timeoutId;

        const handleMouseStop = () => {
            setIsMouseMoving(false);
        };

        const handleMouseMoveWithTimer = e => {
            setIsMouseMoving(true);
            setMousePos({x: e.clientX, y: e.clientY});
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleMouseStop, 500);
        };

        window.addEventListener('mousemove', handleMouseMoveWithTimer);
        return () => {
            window.removeEventListener('mousemove', handleMouseMoveWithTimer);
        };
    }, [mousePos]);

    const [val, setVal] = useState(true);

    const NavPossible = (props) => {
        return setVal(props)
    };


    return (
        <>

            <Loader/>
            <Cursor className={isMouseMoving && 'move'} ref={boxRef}></Cursor>
            <NavContext.Provider value={{val, NavPossible}}>
                <Navigataion/>
                <Outlet/>
            </NavContext.Provider>
            <Footer/>

        </>
    );
};

export default Index;