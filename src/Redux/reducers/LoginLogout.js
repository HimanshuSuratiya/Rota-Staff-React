const checkIsAuthenticated = () => {
    let isAuth = localStorage.getItem('isAutehnticated');
    if (isAuth) {
        return JSON.parse(localStorage.getItem('isAutehnticated'));
    } else {
        return null;
    }
}

const isAuthenticated = checkIsAuthenticated();

const handleLoginLogout = (state = isAuthenticated, action) => {
    switch (action.type) {
        case "HANDLELOGIN": return state = true;
        case "HANDLELOGOUT": return state = false;
        default: return state;
    }
}

export default handleLoginLogout