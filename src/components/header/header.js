import './header.css'

async function backToHomePage() {
    window.location.href = "/";
}

export const Header = () => {
    return(      
        <div className='header'>
            <img className='logo' src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg"  alt="logo" onClick={backToHomePage}></img>
        </div>
    )
}