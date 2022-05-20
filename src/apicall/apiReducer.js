import { 
    FETCH_DATA_REQUEST, 
    FETCH_DATA_SUCCESS, 
    FETCH_DATA_FAILURE } from "./apiType"

const initialState = {
    loading: false,
    imageData: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                loading: false,
                imageData: action.payload,
                error: ''
            }
        case FETCH_DATA_FAILURE:
            return {
                loading: false,
                imageData:[],
                error: action.payload
            }
        default: return state
    }
}
export default reducer