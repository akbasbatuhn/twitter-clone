import { ChangeEvent, useState } from "react";

import FormInput from "./FormInput";

const defaultFormFields = {
    name: "",
    email: "",
    password: "",
    username: "",
};

const RegisterForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { name, email, password, username } = formFields;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="flex flex-col mt-4 px-4 space-y-12 mb-5">
            <h2 className="font-bold text-xl">Create your account</h2>

            <form className="flex flex-col space-y-4">
                <FormInput
                    label="Name"
                    type="text"
                    onChange={handleChange}
                    name="name"
                    value={name}
                />
                <FormInput
                    label="Email"
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
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
                Create account
            </button>
        </div>
    );
};

export default RegisterForm;
