import React, { useEffect, useState } from 'react'
import Pokedex from 'pokedex-promise-v2'
import { Card } from './Card';

export const PopularPokemon = () => {
  const [popularPokemon, setPopularPokemon] = useState([]);
  const pokedex = new Pokedex();

  useEffect(() => {
    pokedex.getPokemonByName(["pikachu", "bulbasaur", "charizard", "squirtle", "mew", "arcanine"]).then(res => setPopularPokemon(res)).catch(err => console.log(err));
  }, []);
  
  return (
    <div className="py-8 pb-16 px-4">
        <div className="container">
            <h1 className="py-4 text-2xl">The Most Popular Pokemon</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-[400px] md:w-[100%] mx-auto">
          {popularPokemon.map((p) => <Card key={p.name} img={p.sprites.front_default} name={p.name} type={p.types.type}/>)}
        </div>
      </div>
    </div>
  )
}
