import React, {useEffect, useState} from 'react';
import Main from "./pages/Main";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Outlet from "./components/Outlet";
import ProjectsPage from "./pages/ProjectsPage";
import About from "./pages/About";
import Admin from "./pages/Admin";
import {LoaderContext} from '@/components/Outlet/context.js';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet/>,
        children: [
            // errorElement:
            {
                path: "",
                element: <Main/>
            },
            {
                path: "projects",
                element: <ProjectsPage/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: '/admin',
                element: <Admin/>
            }
        ]
    },
]);

const App = () => {
    useEffect(() => {
        handleLoader('page');

        setTimeout(() => {
            handleLoader(false);
        }, 2000)
    }, [])

    const [loader, setLoader] = useState(false)
    const handleLoader = (value) => {
        setLoader(value);
    }
    return (
        <>
            <LoaderContext.Provider value={{loader, handleLoader}}>

                <RouterProvider router={router}/>
            </LoaderContext.Provider>
        </>
    );
};

export default App;