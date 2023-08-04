import { AppTypeInitialState } from "../../utils/Types";
import {createSlice} from "@reduxjs/toolkit"


const initialState: AppTypeInitialState = {};
//stores login detail
export const AppSlice = createSlice({
    name:"app",
    initialState, 
    reducers: {},
}); 
export const {} = AppSlice.actions;