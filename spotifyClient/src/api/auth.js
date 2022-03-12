import apiUrl from "../apiConfig";
import axios from "axios";

export const spotifyAuth = () => {
    return axios({
        method: "GET",
        url: `${apiUrl}/login`
    })
}