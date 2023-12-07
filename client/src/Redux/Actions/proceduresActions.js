import axios from "axios"
import { HOST, GET_PROCEDURES } from "../actionTypes"

export function getProcedures(){
    return async function(dispatch){
        try {
            const response = (await axios.get(HOST+"/procedures")).data

            dispatch({
                type: GET_PROCEDURES,
                payload:response
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}