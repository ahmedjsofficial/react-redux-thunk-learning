import axios from "axios";
import { APIDATA, APIERRORS, APIREQUERST } from "../../Utils/Command"


const BaseURL = "https://jsonplaceholder.typicode.com/posts";

export const myAction = () => async (dispatch) => {
    dispatch({
        type: APIREQUERST
    })
    try {
        const req = await axios.get(BaseURL).then((res => res.data));
        dispatch({
            type: APIDATA,
            payload: req
        })
    } catch (isError) {
        dispatch({
            type: APIERRORS,
            payload: isError
        });
    } 
}