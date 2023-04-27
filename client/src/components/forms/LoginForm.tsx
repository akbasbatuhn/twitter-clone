import { ChangeEvent, useState } from "react";

import FormInput from "./FormInput";

const defaultFormFields = {
    username: "",
    password: "",
};

const LoginForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { username, password } = formFields;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="flex flex-col mt-4 px-4 space-y-12">
            <h2 className="font-bold text-xl">Login</h2>

            <form className="flex flex-col space-y-4">
                <FormInput
                    label="Username"
                    type="text"
                    onChange={handleChange}
                    name="username"
                    value={username}
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
            >
                Login
            </button>
        </div>
    );
};

export default LoginForm;
