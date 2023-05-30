export const getUserTokenFromLocalStorage = () => {
    return localStorage.getItem("accessToken")!;
};

export const getUserIdFromLocalStorage = () => {
    return Number(localStorage.getItem("userId"));
};
