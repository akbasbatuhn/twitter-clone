import { useState } from "react";

import LandingImage from "../components/landing/LandingImage";
import LandingAuth from "../components/landing/LandingAuth";

import Login from "../components/modals/Login";
import Register from "../components/modals/Register";

import { TwitterIcon } from "../icons/Icons";

const Landing = () => {
    const [isLoginActive, setLoginActive] = useState(false);
    const [isRegisterActive, setRegisterActive] = useState(false);

    const changeLoginModalActiveState = () => {
        setLoginActive(!isLoginActive);
    };

    const changeRegisterModalActiveState = () => {
        setRegisterActive(!isRegisterActive);
    };

    return (
        <>
            <div className="min-h-screen grid lg:grid-cols-12 sm:grid-cols-1">
                <div className="lg:col-span-7 max-[1024px]:hidden relative flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <LandingImage />
                        <TwitterIcon className="absolute text-white w-80 h-80 z-5" />
                    </div>
                </div>
                <div
                    className="lg:col-span-5 sm:col-span-full flex
                    min-[1024px]:px-8 max-[1024px]:justify-center max-[1024px]:text-center
                    min-[480px]:mt-48 max-[480px]:mt-8 "
                >
                    <LandingAuth
                        setLogin={changeLoginModalActiveState}
                        setRegister={changeRegisterModalActiveState}
                    />
                </div>
            </div>
            <Login
                isActive={isLoginActive}
                onClose={changeLoginModalActiveState}
            />
            <Register
                isActive={isRegisterActive}
                onClose={changeRegisterModalActiveState}
            />
        </>
    );
};

export default Landing;
