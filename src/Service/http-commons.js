import axios from "axios";

const instance=axios.create({

    // baseURL: 'http://localhost:8080/api',
    baseURL: 'http://ec2-184-72-129-3.compute-1.amazonaws.com:8082/api',
    

    headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
    }
});

function getAuthorization () {
    let Author = sessionStorage.getItem('Authorization')
    if (Author === null) return ''
    return Author
}

instance.interceptors.request.use(

    (config) => {
        config.headers.authorization = 'Bearer '+getAuthorization()
        return config
    }
)

export default instance
