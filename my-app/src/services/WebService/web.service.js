import axios from "axios";
import AuthService from "../Routing/auth.service";

export const ws = axios.create({
    baseURL: `http://127.0.0.1:80`,
})

export default ws

export const GET = async (url, params = {}) => {
    return await ws.get(url,params)
        .then(res => {
            if (res.data.error) console.log(res.data)
            return res.data
        })
        .catch(err => console.log(err))
}

export const POST = (url, data) => {
    return ws.post(url, {data}, { headers: { 'Content-Type': 'application/x-www-form-urlencoded'} })
        .then(res => {
            if (res.data.error) console.log(res.data)
            return res.data
        })
        .catch(err => console.log(err))
}

export const PUT = (url, data) => {
    return ws.put(url, {data})
        .then(res => {
            if (res.data.error) console.log(res.data)
            return res.data
        })
        .catch(err => console.log(err))

}

export const FETCH = async (url, params = {}) => {
    let response;

    try {
        response = await ws.get(url, params);
    } catch (e) {
        // catch error
        console.log(e.message)
    }

    // if success return value
    return response?.data ? response?.data : null // or set initial value
}


