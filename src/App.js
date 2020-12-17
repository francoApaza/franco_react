import Menu from './Components/Menu'
import Rotas from './rotas';


import Footer from './Components/Footer';

import { BrowserRouter } from 'react-router-dom';

import { container } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <header>
          <Menu />
        </header>
        <main>
        <container fluid>
          <Rotas />
        </container>
        </main>
        <footer>
          <Footer />
        </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
