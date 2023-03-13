import axios from "axios";
const baseUrl = ' http://18.181.84.1:5000/api';

const LoginApi = (userData, setIsAuthenticated) => {
    axios.post(`${baseUrl}/adminLogin`, {
        email: userData.email,
        password: userData.password,
    }).then((response) => {
        setIsAuthenticated(true)
        localStorage.setItem('isAutehnticated', response.data.success)
    }).catch((error) => {
        console.log(error)
    })
};

export { LoginApi }