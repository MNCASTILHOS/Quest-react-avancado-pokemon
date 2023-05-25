import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './pokemonDetails.css'
import { Button } from '../button/button'

async function getPokemonsDetails(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const resultPokemonsDetails = await response.json()
    console.log(resultPokemonsDetails)
    return resultPokemonsDetails;
}

async function getAbility(url){
    const response = await fetch(url)
    const resultAbility = await response.json();
    return resultAbility;
}

const PokemonsDetails = () => {
    const [pokemon, setPokemon] = useState({})
    const [ability, setAbility] = useState([])
    const { name } = useParams()

    useEffect(() => {
        async function fetchData() {

            const pokemon = await getPokemonsDetails(name)
            setPokemon(pokemon)

            const abilities = await pokemon.abilities.map(async(element) => {
                return await getAbility(element.ability.url);
            });
            const results = await Promise.all(abilities)
            setAbility(results)
        }
        fetchData()
    }, [])
    
    async function toBack() {
        window.location.href = "/";
    }
    
    return (

        <div className='container'>

            <div className='to-back'>
                <Button onClick={() => toBack()} > To Back</Button>
            </div>
            
            <div className='pokemon'>
                <h2 className='name-pokemon'>{pokemon.name}</h2>
                <img className='image' src={pokemon.sprites ? pokemon.sprites.front_default : ''} alt={pokemon.name}/>
            </div>

            <div className='moves'>                  
                <h3 className='title'> Moves  </h3>
                <span className='description-details'>                  
                    {pokemon.moves?.map((move, index) => {
                        if (pokemon.moves.length === 1) {
                            return (
                                <span key={index}> {move.move.name} </span>
                        )} if (pokemon.moves.length - 1 === index) {                        
                            return (
                            <span key={index}> {move.move.name}. </span>
                        )}  else {
                            return (
                                <span key={index}> {move.move.name}, </span>                          
                            )
                        }     
                    })}
                </span> 
            </div>

            <div className='abilities'>       
                <h3 className='title'> Abilities </h3>                
                {ability?.map((element, index) => {                                      
                    return (
                        <div key={index}>
                            <h4 className='caption-abilities'>{element.name} </h4> 
                            <br/>
                                <span className='effect'>Effect:</span>
                                {element.effect_entries.map((el, i) => {
                                    return <span className='description-details-abilities'>   
                                        {el.effect}
                                    </span> 
                                })}
                        </div>
                    )
                })}
            </div>
        
            <div className='types'>                  
                <h3 className='title'> Types  </h3>
                <span>
                    {pokemon.types?.map((type, index) => {
                        if (pokemon.types.length === 1) {
                            return (
                                <span key={index} className='description-details'> {type.type.name} </span>
                        )} if (pokemon.types.length - 1 === index) {                        
                            return (
                            <span key={index} className='description-details'> {type.type.name}. </span>
                        )}  else {
                            return (
                                <span key={index} className='description-details'> {type.type.name}, </span>                          
                            )
                        }
                    })} 
                </span> 
            </div>
        </div>     
    )
}

export default PokemonsDetails