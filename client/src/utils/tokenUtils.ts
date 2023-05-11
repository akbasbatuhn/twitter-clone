export const getUserTokenFromLocalStorage = () => {
    return localStorage.getItem("accessToken")!;
};
