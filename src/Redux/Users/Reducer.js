import { APIDATA, APIERRORS, APIREQUERST } from "../../Utils/Command"

const initialState = {
    loading: false,
    isError: false,
    posts: []
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case APIREQUERST: return {
            ...state, loading: true
        }
        case APIDATA: return {
            loading: false,
            isError: false,
            posts: action.payload
        }
        case APIERRORS: return {
            ...state, 
            loading: false,
            isError: true
        }
        default: return state
    }
}

export default UserReducer;