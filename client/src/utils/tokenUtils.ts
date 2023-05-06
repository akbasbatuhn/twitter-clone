export const getUserTokenFromLocalStorage = () => {
    return localStorage.getItem("userToken");
};

export const getUserIdFromLocalStorage = () => {
    return localStorage.getItem("userId");
};
