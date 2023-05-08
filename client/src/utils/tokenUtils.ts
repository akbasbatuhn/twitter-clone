export const getUserTokenFromLocalStorage = () => {
    return localStorage.getItem("userToken")!;
};
