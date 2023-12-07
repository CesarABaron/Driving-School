import{
    GET_COURSES,
    GET_FAQS,
    GET_PROCEDURES
} from "./actionTypes"

const initialState = {
    courses:[],
    procedures:[],
    faqs:[]
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_COURSES:
            return{
                ...state,
                courses:action.payload
            }
        case GET_PROCEDURES:
            return{
                ...state,
                procedures:action.payload
            }
        case GET_FAQS:
            return{
                ...state,
                faqs:action.payload
            }
        default:
            return { ...state };
    }
}