import ApiWeather from './ApiWather.jsx'
import Film from './webFilm/Film.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detailfilm from './webFilm/Detailfilm2.jsx';
import About from './webFilm/navbar/About.jsx';
import Navbar from './webFilm/navbar/Navbar.jsx'
import Home from './webFilm/Home.jsx';


function App() {

  return (
    <>
        {/* <ApiWeather/> */}
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/film" element={<Film/> } />
            <Route path='/about' element={<About/>}/>
            <Route path="/movie/:id" element={<Detailfilm />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
