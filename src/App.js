import './App.css';
import AppRoutes from './pages/routes';
import { ThemeProvider } from './context/themeContext'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'

function App() {

  return (
    <ThemeProvider>
      <Header></Header>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </ThemeProvider> 
  );
}

export default App;
