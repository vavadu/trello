const USER_KEY = "auth:userData";

export function getUserData() {
    const data = localStorage.getItem(USER_KEY);
    return data && JSON.parse(data);
}

export function setUserData(userData) {
    return localStorage.setItem(USER_KEY, JSON.stringify(userData));
}

export function removeUserData() {
    localStorage.removeItem(USER_KEY);
}
