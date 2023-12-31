import axios from "axios"
import { HOST, GET_COURSES } from "../actionTypes"

export function getCourses(){
    return async function(dispatch){
        try {
            console.log("Entra action");
            const response = (await axios.get(HOST+"/courses")).data

            dispatch({
                type: GET_COURSES,
                payload:response
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}