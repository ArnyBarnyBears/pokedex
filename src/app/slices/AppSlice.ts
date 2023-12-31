import { AppTypeInitialState } from "../../utils/Types";
import {createSlice} from "@reduxjs/toolkit"


const initialState: AppTypeInitialState = {
    toasts: [],
};
//stores login detail
export const AppSlice = createSlice({
    name:"app",
    initialState, 
    reducers: { //toasts for notifications
        setToast: (state, action) => {
            const toasts = [...state.toasts];
            toasts.push(action.payload);
            state.toasts = toasts;
          },
        clearToasts: (state)=> {
            state.toasts=[];
        }
    },
}); 
export const {setToast, clearToasts} = AppSlice.actions;