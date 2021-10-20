import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return <BrowserRouter>
    <NavBar />
    <Main />
    <Footer />
  </BrowserRouter>
}

export default App;
