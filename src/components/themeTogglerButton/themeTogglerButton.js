import { useContext } from "react"
import { Button } from "../button/button"
import { ThemeContext, themes } from "../../context/themeContext"

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }  

  return (<Button onClick={() => handleClick()}>
  Change Theme</Button>)
}