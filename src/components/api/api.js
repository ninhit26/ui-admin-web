import axios from "axios";

const url = `https://portal-be.herokuapp.com/api/users`


export async function getAbsenceReasons() {
    const response = await DG_axios.get( )
    return response?.data || []
}

export const DG_axios = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json"
    },
});