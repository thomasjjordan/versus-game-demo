
// function to set the initial user data when the app loads
export const setInitialUserData = (users) => {
    const rawUsers = localStorage.getItem('users');
    if (!rawUsers) {
        localStorage.setItem('users', JSON.stringify(users));
    }
};

// function to retrieve the user data from local storage
export const retrieveUserData = () => {
    const rawUsers = localStorage.getItem('users');
    if (!rawUsers) return null;
    return JSON.parse(rawUsers);
};

// function to set the user data in local storage
export const setUserData = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
}
