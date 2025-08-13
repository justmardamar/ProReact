import ApiWeather from './ApiWather.jsx'
import Film from './webFilm/Film.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detailfilm from './webFilm/Detailfilm2.jsx';
import About from './webFilm/navbar/About.jsx';
import Navbar from './webFilm/navbar/Navbar.jsx'
import Home from './webFilm/home/Home.jsx';
import FilmGenre from './webFilm/FilmGenre.jsx';
import Account from './chat/Account.jsx';
import Login from './chat/Auth/Login.jsx';
import Register from './chat/Auth/Register.jsx';

function App() {

  return (
    <>
        {/* <ApiWeather/> */}
        {/* <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/film" element={<Film/> } />
            <Route path='/about' element={<About/>}/>
            <Route path="/movie/:id" element={<Detailfilm />} />
            <Route path='/genre/:id/:name' element={<FilmGenre/>}/>
          </Routes>
        </Router> */}
        <Router>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Account/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
