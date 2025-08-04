import ApiWeather from './ApiWather.jsx'
import Film from './webFilm/Film.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detailfilm from './webFilm/Detailfilm2.jsx';


function App() {

  return (
    <>
        {/* <ApiWeather/> */}
        <Router>
          <Routes>
            <Route path="/" element={<Film/> } />
            <Route path="/movie/:id" element={<Detailfilm />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
