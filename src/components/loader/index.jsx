import React, {useContext} from 'react';
import {Popup} from './loader.styled'
import { LoaderContext } from '../Outlet/context';
const Index = () => {
    const { loader } = useContext(LoaderContext);
    return (
        <Popup className={` ${loader === true ? 'active' : ''} ${loader === 'page' ? 'page' : ''} `}>
            <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_169_1862)">
                    <path d="M73.125 130H89.375V105.625H73.125V130Z" fill="#FAFAFA"/>
                    <path d="M73.125 89.375H89.375V0H73.125V89.375Z" fill="#FAFAFA"/>
                    <path d="M73.125 130H130V113.75H73.125V130Z" fill="#FAFAFA"/>
                    <path d="M73.125 89.375H130V73.125H73.125V89.375Z" fill="#FAFAFA"/>
                    <path d="M73.125 16.25H130V0H73.125V16.25Z" fill="#FAFAFA"/>
                    <path d="M113.75 130H130V81.25H113.75V130Z" fill="#FAFAFA"/>
                    <path d="M113.75 56.875H130V0H113.75V56.875Z" fill="#FAFAFA"/>
                    <path d="M0 0H16.25V24.375H0V0Z" fill="#FAFAFA"/>
                    <path d="M0 40.625H16.25V130H0V40.625Z" fill="#FAFAFA"/>
                    <path d="M0 0H56.875V16.25H0V0Z" fill="#FAFAFA"/>
                    <path d="M0 40.625H56.875V56.875H0V40.625Z" fill="#FAFAFA"/>
                    <path d="M0 113.75H56.875V130H0V113.75Z" fill="#FAFAFA"/>
                    <path d="M40.625 0H56.875V48.75H40.625V0Z" fill="#FAFAFA"/>
                    <path d="M40.625 73.125H56.875V130H40.625V73.125Z" fill="#FAFAFA"/>
                </g>
                <defs>
                    <clipPath id="clip0_169_1862">
                        <rect width="130" height="130" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </Popup>
    );
};

export default Index;