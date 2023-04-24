import React from 'react';
import { Showreel } from "./Showreel.styled";

const Index = () => {
    const handleShowreel = () => {
        window.location.href = 'https://www.youtube.com/watch?v=vDMH6NzD-TU'
    }
    return (
        <Showreel role='region'>
            <div className="global-wrapper">
                <div onClick={ ()=> handleShowreel() } className="card">
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.5192 9.63622C17.1807 10.0221 17.1807 10.9779 16.5192 11.3638L1.50387 20.1227C0.837211 20.5116 -8.75572e-07 20.0308 -8.41836e-07 19.259L-7.61032e-08 1.74104C-4.23671e-08 0.969246 0.837213 0.488374 1.50387 0.877257L16.5192 9.63622Z"
                            fill="#FAFAFA"/>
                    </svg>
                    <p>Смотреть Showreel</p>
                </div>
            </div>
        </Showreel>
    );
};

export default Index;