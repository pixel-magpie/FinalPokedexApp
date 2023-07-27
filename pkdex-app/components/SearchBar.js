import React, { useState } from 'react'

export const SearchBar = () => {

  const [input, setInput] = useState("");

  // const fetchData = (value) => {
  //   fetch('https://pokeapi.co/api/v2/pokemon/').then((response) => response.json()).then((json) => {
  //     console.log(json);
  //   });  
  // };

  
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="bg-white w-full border-2 border-black rounded-xl h-3 p-4 shadow-md flex items-center">
      <input placeholder="Type to search" type="text" id="search-q" className="bg-transparent border-0 text-xl ml-1.5 font-black h-7 w-full focus:outline-none" value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  )
}
