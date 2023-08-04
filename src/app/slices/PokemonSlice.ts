//stores pokemon detail
import { PokemonTypeInitialState } from "../../utils/Types";
import {createSlice} from "@reduxjs/toolkit"
import { getInitialPokemonData } from "../reducers/getInitialPokemonData";
import { getPokemonData } from "../reducers/getPokemonData";
import { act } from "@testing-library/react";

const initialState: PokemonTypeInitialState = {
    allPokemon:undefined,
    randomPokemons:undefined
};
//stores login detail
export const PokemonSlice = createSlice({
    name:"pokemon",
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getInitialPokemonData.fulfilled,(state,action)=> {
            state.allPokemon = action.payload;
        })
        builder.addCase(getPokemonData.fulfilled, (state,action) => {
            state.randomPokemons = action.payload;
        })
    }
}); 
export const {} = PokemonSlice.actions;