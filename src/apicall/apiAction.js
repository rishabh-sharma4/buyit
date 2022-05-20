import {
     FETCH_DATA_FAILURE, 
     FETCH_DATA_REQUEST, 
     FETCH_DATA_SUCCESS 
    } from "./apiType"
import axios from 'axios'

export const fetchDataRequest = () => {
    return{
        type: FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess = imageData => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: imageData
    }
}

export const fetchDataFailure = error => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}

export const fetchDataItem = () =>{
    return (dispatch) =>{
        dispatch(fetchDataRequest)
        axios.get('https://run.mocky.io/v3/72c95083-6124-4a2e-9afd-384de42016a4')
        .then(response => {
            const imageData = response.data
            dispatch(fetchDataSuccess(imageData))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchDataFailure(errorMsg))
        })

    }
}
