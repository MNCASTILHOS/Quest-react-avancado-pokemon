import { useEffect, useState, useContext} from "react";
import { Link } from 'react-router-dom';
import { Button } from "../button/button";
import { ThemeContext } from "../../context/themeContext";
import { ThemeTogglerButton } from'../themeTogglerButton/themeTogglerButton';
import { getData, getPokemons, getTypes, getPokemonsByType } from "../../services";
import './pokemonsList.css'

async function loadPokemons(limit){
    return await getPokemons(limit)
}   

async function loadTypes() {
    return await getTypes()
}

const PokemonsList = () => {
    const [pokemons, setPokemons] = useState([])
    const [limit, setLimit] = useState(10)
    const { theme } = useContext(ThemeContext)
    const [types, setTypes] = useState([])
    const [typeSelected, setTypeSelected] = useState('')

    useEffect(() => {
        async function fetchData () {
            const listPokemons = await loadPokemons(limit)
            setPokemons(listPokemons)

            const listTypes = await loadTypes()
            setTypes(listTypes.results)
        }
        fetchData()
    }, [])

    async function pagination() {
        setLimit(limit+10)
        if(!typeSelected) {
            const listPokemons = await loadPokemons(limit)
            setPokemons(listPokemons);
        } else {
            const element = {target: {value: typeSelected}}
            await handleChange(element)
        }
    }

    async function handleChange(e) {
        if(e.target.value) {
            console.log(e)
            const listPokemonsByType =  await getData(e.target.value)
            const listPokemons = await getPokemonsByType(listPokemonsByType.pokemon)
            setPokemons(listPokemons.slice(0,limit));
            setTypeSelected(e.target.value)
        }  else {
            window.location.reload();
        }
    } 
    
    return(  
        <div style={{ color: theme.color, backgroundColor: theme.background}}>
            <div className="select-theme">
                <ThemeTogglerButton/> 
                <select className="select" name="type" id="type" onChange={(e) => handleChange(e)}>
                    <option value="">
                        Type
                    </option>
                    {types?.map((element, index) => {
                        return (
                            <option className="types-list" value={`${element.url}`}>
                                {element.name}
                            </option>
                        );
                    })}
                </select>
            </div>

            <ul className="pokemons">
                {
                    pokemons.map((element, index) => {
                        return (
                            <li className="pokemons-list" key={index}>
                                <Link to={{pathname: `/pokemon/${element.name}`}}>
                                    <h2 className="name">{element.name}</h2>
                                    <img className="image" src={element.sprites.front_default} alt={element.name} />
                                </Link>              
                            </li>
                        )
                    })
                }
            </ul>  
            <div className="button-home">
                <Button style={{marginBottom: 10}} onClick={() => pagination()}>Load More</Button>  
            </div>
        </div>    
    )
}

export default PokemonsList