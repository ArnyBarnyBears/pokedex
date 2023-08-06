import React, { useEffect } from 'react'
import Wrapper from '../sections/Wrapper'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getInitialPokemonData } from '../app/reducers/getInitialPokemonData';
import { getPokemonData } from '../app/reducers/getPokemonData';
import PokemonCardGrid from '../components/PokemonCardGrid';

function Search() {
  const dispatch = useAppDispatch();
  const { allPokemon, randomPokemons } = useAppSelector(({ pokemon }) => pokemon)
  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  useEffect(() => {
    if (allPokemon) {
      const clonedPokemons = [...allPokemon];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonData(randomPokemonsId));
    }
  }, [allPokemon, dispatch]);

  const getPokemon = async (value: string) => {
    //for search checks if theres a length in which case checks if the name includes the search term, else displays 20 random pokemon
    if (value.length) {
      const pokemons = allPokemon?.filter((pokemon) =>
        pokemon.name.includes(value.toLowerCase())
      );
      dispatch(getPokemonData(pokemons!));
    } else {
      const clonedPokemons = [...(allPokemon) as []];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonData(randomPokemonsId));
    }
  };

  return <>
    <div className="search">
      <input
        type="text"
        className="pokemon-searchbar"
        placeholder="Search Pokemon"
        onChange={(e) => getPokemon(e.target.value)}
      />
      <PokemonCardGrid pokemons={randomPokemons!} />
    </div>
  </>
}

export default Wrapper(Search);