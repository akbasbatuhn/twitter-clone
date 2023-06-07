import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../../store/user/UserAction";
import FormInput from "./FormInput";

const defaultFormFields = {
    userName: "",
    password: "",
};

const LoginForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { userName, password } = formFields;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        dispatch(login(userName, password));
        navigate("/home");
    };

    return (
        <div className="flex flex-col mt-4 px-4 space-y-12 mb-5">
            <h2 className="font-bold text-xl text-center">Login</h2>

            <form className="flex flex-col space-y-4">
                <FormInput
                    label="Username"
                    type="text"
                    onChange={handleChange}
                    name="userName"
                    value={userName}
                />
                <FormInput
                    label="Password"
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
            </form>

            <button
                className="w-full px-8 py-2 rounded-full text-white mt-4
                bg-primary-base hover:bg-primary-dark hover:cursor-pointer"
                onClick={handleSubmit}
            >
                Login
            </button>
        </div>
    );
};

export default LoginForm;
