const isAuthenticated = true;

const handleLoginLogout = (state = isAuthenticated, action) => {
    switch (action.type) {
        case "HANDLELOGIN": return state = true;
        case "HANDLELOGOUT": return state = false;
        default: return state;
    }
}

export default handleLoginLogout