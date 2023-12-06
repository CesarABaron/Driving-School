import axios from "axios"
import { GET_COURSES } from "../actionTypes"
import { HOST } from process.env
export function getCourses(){
    return async function(dispatch){
        try {
            const response = (await axios.get(HOST+"/courses"))
            dispatch({
                type: GET_COURSES,
                payload:response
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}