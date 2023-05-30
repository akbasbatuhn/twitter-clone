import { FC } from "react";

import { FormInputProps } from "../../types/Component";

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
    const value = otherProps.value;

    return (
        <div>
            <label className="w-full block border border-gray-200 rounded-lg pt-6 pb-2 px-2 relative">
                <input className="w-full outline-none peer" {...otherProps} />
                <div
                    className={`w-full h-full absolute left-2 top-0 flex ${
                        !value ? "items-center text-base" : "text-sm pt-1"
                    } text-gray-500 peer-focus:items-start peer-focus:text-sm peer-focus:pt-1`}
                >
                    <div>{label}</div>
                </div>
            </label>
        </div>
    );
};

export default FormInput;
