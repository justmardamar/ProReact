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
import NavbarChat from './chat/navbar/NavbarChat.jsx';
import Chat from './chat/navbar/content/Chat.jsx';
import Logout from './chat/navbar/content/Logout.jsx';
import React,{useState , useEffect} from 'react';

function App() {

  const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
    
  }, [])

  return (
    <>
        {/* <ApiWeather/> */}


        {/* Film */}
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


        {/* chat */}
        <Router>
          <NavbarChat/>
          <Routes>
            <Route path='/' element={<Login setToken={setToken}/>}/>
            <Route path='register' element={<Register/>}/>
             {token?<Route path={'/home'} element={ <Account token={token} />} />:""}
            <Route path='/SignUp' element={<Register/>}/>
            <Route path='/home' element={<Account/>}/>
            <Route path='/chat' element={<Chat/>}/>
            <Route path='/logout' element={<Logout/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
