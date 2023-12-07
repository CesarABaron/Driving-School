import{
    GET_COURSES,
    GET_PROCEDURES
} from "./actionTypes"

const initialState = {
    courses:[],
    procedures:[]
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
        default:
            return { ...state };
    }
}