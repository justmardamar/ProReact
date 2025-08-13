import { supabase } from "../Data";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const navigate = useNavigate()

    const [login,setLogin] = useState({
        email : '',
        password : ''
    })

    function handleLogin(e){
        setLogin({
            ...login,
            [e.target.name] :e.target.value
        })
    }

    async function loginForm(e) {
        e.preventDefault()

        if(!login.email || !login.password){
            alert('Harus di isi')
            navigate('/login')
        }

        const { data, error } = await supabase.auth.signUp({
            email: login.email,
            password: login.password,
        })
        
        if(data.user){
            console.log(data)
            alert('login berhasil')
            navigate('/home')

        }else if(error){
            console.log(`Ada yang salah ${error.message}`)
            alert('login gagal')
        }
    } 
    return(
        <form onSubmit={loginForm}>
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" value={login.email} onChange={handleLogin} />

            <label htmlFor="password">Passwrod : </label>
            <input type="password" name="password" value={login.password} onChange={handleLogin} />\

            <button type="submit">Login</button>
        </form>
    )
}