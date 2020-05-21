export const setAuthToken = (value) => {
    localStorage.setItem('authToken', value);
}

export const checkAuthToken = () => {
    return localStorage.getItem('authToken') ? true : false;
}

export const removeAuthToken = () => {
    localStorage.removeItem('authToken');
}