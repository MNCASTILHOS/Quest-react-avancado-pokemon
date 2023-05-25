export const getData = async (url) => {
    try {
      const response = await fetch(url)                 
      return await response.json()    
    } catch (error) {
      console.log(`Fetch error ${url}`, error)
    }
}

export const getPokemons = async (limit) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)                 
      const responseJson = await response.json()    
      return await getDetailPokemon(responseJson.results)
    } catch (error) {
      console.log(`Fetch error get Pokemons`, error)
    }
}

export const getTypes = async () => {
  try {
    return await getData(`https://pokeapi.co/api/v2/type`) 
  } catch (error) {
  }
}

export const getDetailPokemon = async (pokemonList) => { 
  const result = pokemonList.map(async(element) => {
    let name = element.pokemon ? element.pokemon.name : element.name;
    return await getData(`https://pokeapi.co/api/v2/pokemon/${name}`) 
  })
  return Promise.all(result)
}

export const getPokemonsByType = async (pokemonList) => { 
  return await getDetailPokemon(pokemonList)
}