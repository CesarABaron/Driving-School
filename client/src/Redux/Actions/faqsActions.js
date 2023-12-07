import axios from "axios"
import { HOST, GET_FAQS } from "../actionTypes"

export function getFAQS(){
    return async function(dispatch){
        try {
            const response = (await axios.get(HOST+"/faqs")).data

            dispatch({
                type: GET_FAQS,
                payload:response
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}