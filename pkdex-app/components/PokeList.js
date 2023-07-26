import React, { useEffect, useState } from 'react'
import Pokedex from 'pokedex-promise-v2'
import { Card } from './Card';

export const PokeList = () => {
  const [popularPokemon, setPopularPokemon] = useState([]);
  const pokedex = new Pokedex();

  useEffect(() => {
    pokedex.getPokemonByName(["pikachu", "bulbasaur", "charizard", "squirtle"]).then(res => setPopularPokemon(res)).catch(err => console.log(err));
  }, []);
  
  return (
    <div className="flex flex-col">
      <div id="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-[400px] md:w-[100%] mx-auto">
          {popularPokemon.map((p) => <Card key={p.name} img={p.sprites.front_default} name={p.name}/>)}
        </div>
      </div>

    {/* <div className="items-center p-7 m-2 h-4 w-80 bg-white border-2 border-black rounded-xl shadow-md flex" id="container">
        <div>
          <h2 className="text-2xl capitalize bg-white ">Name</h2>
        </div>
      </div> */}
    </div>
  )
}
