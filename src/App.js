import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Index } from './components';
import { NavBar } from './components/nav';
import { Artistas } from './components/Artistas';
import { Artista } from './components/Artista';
import { Servicios } from './components/Servicios'; 
import { Album } from './components/Album';
import { Articulos } from './components/Articulos';
import { Articulo } from './components/Articulo';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';
import { Servicio } from './components/Servicio';
import { Spinner } from './components/Spinner';
function App() {
  document.documentElement.classList.add('dark')
  return (
      <div className='dark:bg-black dark:text-white'>
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/spinner' component={Spinner} />
          
          <Route exact path='/index' component={Index} />
          <Route exact path='/artistas' component={Artistas} />
          <Route exact path='/artistas/artista/:id' component={Artista} />
          <Route exact path='/artistas/artista/album/:id/:idalbum' component={Album} />
          <Route exact path='/servicios' component={Servicios} />
          <Route exact path='/articulos' component={Articulos} />
          <Route exact path='/articulos/:id' component={Articulo} />
          <Route exact path='/contacto' component={Contacto} />
          <Route exact path='/servicios/:id' component={Servicio} />

        </Switch>

        <Footer/>
        
      </BrowserRouter>
        </div>
  );
}

export default App;
