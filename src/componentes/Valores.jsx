import React, { useState, useEffect } from "react";

const PokemonSelector = () => {
  // Estado local para almacenar la lista de Pokémon y el Pokémon seleccionado
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // useEffect se utiliza para realizar efectos secundarios, como llamar a la API
  useEffect(() => {
    // Definimos una función asíncrona para obtener la lista de Pokémon desde la API
    const fetchPokemonList = async () => {
      try {
         // Realizamos una petición a la API de PokeAPI para obtener los primeros 50 Pokémon
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
        // Convertimos la respuesta en formato JSON para acceder a los datos
        const data = await response.json();
        // Actualizamos el estado local con la lista de Pokémon obtenida de la API
        setPokemonList(data.results);
        // Si ocurre un error en la petición, lo mostramos en la consola
      } catch (error) {
        console.error("Error al obtener la lista de Pokémon:", error);
      }
    };

    // Llamamos a la función para obtener la lista de Pokémon cuando el componente se monta ([]) por primera vez.
    fetchPokemonList();
  }, []);

  // Esta función se ejecutará cuando se seleccione un Pokémon desde el menú desplegable
  const handlePokemonSelect = async (pokemonUrl) => {
    try {
       // Realizamos una petición a la API de PokeAPI utilizando la URL del Pokémon seleccionado
      const response = await fetch(pokemonUrl);
      // Convertimos la respuesta en formato JSON para acceder a los datos
      const data = await response.json();
      // Actualizamos el estado local con los datos del Pokémon seleccionado
      setSelectedPokemon(data);
    } catch (error) {
      // Si ocurre un error en la petición, lo mostramos en la consola
      console.error("Error al obtener los datos del Pokémon:", error);
    }
  };

  // Renderizado del componente
  return (
    <div className="container-pokemon">
      <h2>Selecciona un Pokémon</h2>
      <select onChange={(e) => handlePokemonSelect(e.target.value)}>
        <option value="">Selecciona un Pokémon</option>
        {pokemonList.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.url}>
            {pokemon.name}
          </option>
        ))}
      </select>
      {selectedPokemon && (
        <div>
          <h3>{selectedPokemon.name}</h3>
          <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
        </div>
      )}
    </div>
  );
};

export default PokemonSelector;
