import { supabase } from "../Data";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Login({setToken}){

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
            return
        }

        try{
            const { data, error } = await supabase.auth.signInWithPassword({
                email: login.email,
                password: login.password,
            })
            if(error) throw error
            console.log(data)
            setToken(data)
            navigate('/home')

        }catch(error){
            console.log(error)
        }
    } 
    return(
        <div className="justify-center items-center flex min-h-screen">
            <div className="p-4 shadow-xl bg-white text-slate-600 h-100 w-100 rounded-2xl">
                <h1 className="mb-8 mt-4 text-center font-medium">LOGIN</h1>
                <form onSubmit={loginForm} className="flex flex-col">
                    <label htmlFor="email" className="mb-4">Email : </label>
                    <input type="email" name="email" className="mb-6 border border-slate-600 rounded-lg p-2" value={login.email} onChange={handleLogin} />

                    <label htmlFor="password" className="mb-4">Passwrod : </label>
                    <input type="password" name="password" className="mb-6 border border-slate-600 rounded-lg p-2" value={login.password} onChange={handleLogin} />

                    <button type="submit" className="border border-slate-600 w-25 p-2 rounded-lg">Login</button>
                </form>
            </div>
        </div>
    )
}