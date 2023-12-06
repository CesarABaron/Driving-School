import{
    GET_COURSES
} from "./actionTypes"

const initialState = {
    courses:[]
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_COURSES:
            return{
                ...state,
                courses:action.payload
            }
        default:
            return { ...state };
    }
}