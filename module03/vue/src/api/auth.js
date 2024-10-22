import axios from "axios";

const authenticate = (userName, password) => {
    const creds = btoa(userName + ":" + password);

    const config = {
        headers: {
            Authorization: "Basic " + creds
        }
    }

    return new Promise((resolve, reject) => {
    axios
    .post("authenticate", null, config)
    .then((res) => resolve(res.data)).catch(err => reject(err))
        })
}
const refresh = (token) => {
    const config = {
        headers: {
            Token: token
        }
    }

    return new Promise((resolve, reject) => {
        axios.post("refresh", null, config).then((res) => resolve(res.data)).catch(err =>reject(err))
    })

}
const register = (data) => {
    const config = {}

    return new Promise((resolve, reject) => {
        axios.post("register", data, config).then(res => resolve(res.data)).catch((err) => reject(err)) 
    })
}

export default {
    authenticate,
    refresh,
    register
}