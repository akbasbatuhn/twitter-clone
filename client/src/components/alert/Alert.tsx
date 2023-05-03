import { FC, useState } from "react";

interface AlertProps {
    alertText: string;
}

const Alert: FC<AlertProps> = ({ alertText }) => {
    const [isActive, setActive] = useState(true);

    setTimeout(() => setActive(!isActive), 2000);

    return (
        <>
            {isActive && (
                <div className="bg-primary-base fixed inset-0 flex justify-center items-center overflow-y-auto">
                    <p>{alertText}</p>
                    <div>Alert</div>
                </div>
            )}
        </>
    );
};

export default Alert;
