import axios from "axios"
import { GET_COURSES } from "../actionTypes"

export function getCourses(){
    return async function(dispatch){
        try {
            console.log("Entra action");
            const response = (await axios.get("http://localhost:3001"+"/courses")).data

            dispatch({
                type: GET_COURSES,
                payload:response
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}