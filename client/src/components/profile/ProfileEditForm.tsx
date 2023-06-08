import { ChangeEvent, useState } from "react";
import FormInput from "../forms/FormInput";

const defaultEditProfileFormFields = {
    name: "",
    bio: "",
};

const ProfileEditForm = () => {
    const [formFields, setFormFields] = useState(defaultEditProfileFormFields);
    const { name, bio } = formFields;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div>
            <div>
                <form className="px-4 space-y-4">
                    <FormInput
                        label="Name"
                        type="text"
                        onChange={handleChange}
                        name="name"
                        value={name}
                    />
                    <FormInput
                        label="Bio"
                        type="text"
                        onChange={handleChange}
                        name="bio"
                        value={bio}
                    />
                </form>
            </div>
        </div>
    );
};

export default ProfileEditForm;
