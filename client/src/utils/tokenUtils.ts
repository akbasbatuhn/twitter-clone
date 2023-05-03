export const getUserTokenFromLocalStorage = (): string => {
    return localStorage.getItem("userToken") || "";
};
