export const getUserId = async (userName: string, password: string) => {
    const data = { userName, password };

    try {
        return await fetch("http://localhost:8080/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    } catch (error) {
        console.log(error);
    }
};

export const getUserData = async (userId: number, token: string) => {
    try {
        return await fetch(`http://localhost:8080/users/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
            },
        });
    } catch (error) {
        console.log(error);
    }
};
