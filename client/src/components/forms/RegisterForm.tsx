import { ChangeEvent, useState } from "react";

import FormInput from "./FormInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../store/user/UserAction";

import { UserRegister } from "../../types/User";

const defaultFormFields = {
    name: "",
    email: "",
    password: "",
    userName: "",
};

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { name, email, password, userName } = formFields;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const submitRegisterForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const data: UserRegister = { name, email, password, userName };

        dispatch(register(data));
        navigate("/home");
    };

    return (
        <div className="flex flex-col mt-4 px-4 space-y-12 mb-5">
            <h2 className="font-bold text-xl text-center">
                Create your account
            </h2>

            <form className="flex flex-col space-y-4">
                <FormInput
                    label="Name"
                    type="text"
                    onChange={handleChange}
                    name="name"
                    value={name}
                    required
                />
                <FormInput
                    label="Email"
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                    required
                />
                <FormInput
                    label="Username"
                    type="text"
                    onChange={handleChange}
                    name="userName"
                    value={userName}
                    required
                />
                <FormInput
                    label="Password"
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password}
                    required
                />
            </form>

            <button
                className="w-full px-8 py-2 rounded-full text-white mt-4
                bg-primary-base hover:bg-primary-dark hover:cursor-pointer"
                onClick={submitRegisterForm}
            >
                Create account
            </button>
        </div>
    );
};

export default RegisterForm;
