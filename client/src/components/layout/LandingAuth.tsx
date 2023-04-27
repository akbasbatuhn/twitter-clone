import React from "react";

import { TwitterIcon } from "../../icons/Icons";

interface UserAuthProps {
    setLogin: () => void;
    setRegister: () => void;
}

const LandingAuth = ({ setLogin, setRegister }: UserAuthProps) => {
    return (
        <div className="flex flex-col space-y-24">
            <TwitterIcon className="w-12 h-12 text-primary-base" />
            <h1 className="text-6xl font-black">Happening now</h1>

            <div className="flex flex-col space-y-8 w-72">
                <h2 className="text-3xl font-bold">Join Twitter today.</h2>
                <button
                    className="bg-primary-base hover:bg-primary-dark text-white rounded-full py-1 px-8 w-full"
                    onClick={setRegister}
                >
                    Sign up with email
                </button>
                <div className="text-xs text-gray-500">
                    By signing up, you agree to the{" "}
                    <a
                        href="https://twitter.com/en/tos"
                        target="_blank"
                        className="text-primary-base hover:text-primary-dark"
                    >
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://twitter.com/en/privacy"
                        target="_blank"
                        className="text-primary-base hover:text-primary-dark"
                    >
                        Privacy Policy
                    </a>
                    , including{" "}
                    <a
                        href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
                        target="_blank"
                        className="text-primary-base hover:text-primary-dark"
                    >
                        Cookie Use
                    </a>
                    .
                </div>

                <div>
                    <span>Already have an account?</span>
                    <button
                        className="border py-1 px-8 bg-white hover:bg-gray-50 text-primary-base rounded-full w-full"
                        onClick={setLogin}
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingAuth;
