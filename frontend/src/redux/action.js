
import axios from "axios";

export const load = async (token) => {
    return await axios.post("http://localhost:5000/api/v1/load", {}, {
        headers: {
            token: token
        }
    })
}