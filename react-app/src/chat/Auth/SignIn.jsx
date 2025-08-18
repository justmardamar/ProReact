import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../Data";

export default function Register(){
    const navigate = useNavigate()

    const [register,setRegister] = useState({
        name : '',
        email : '',
        password : '',
        status : false
    })

    function handleRegister(e){
        setRegister({
            ...register,
            [e.target.name] : e.target.value
        })
    }

    function validate(){
        if(!register.name || !register.email || !register.password){
            alert('Input tidak boleh kosong')
            return false
        }
        if(typeof register.name != 'string' || typeof register.email != 'string' || typeof register.password != 'string'){
            alert('Masukkan data dengan string')
            return false
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(register.email)) {
            alert('Format email tidak valid');
            return false;
        }
        if (register.password.length < 6) {
            alert('Password minimal 6 karakter');
            return false;
        }
        return true
    }

    async function registerForm(e) {
        e.preventDefault()

        if(!validate())return

        try{
            const { error } = await supabase
            .from('Users')
            .insert({ 
                name: register.name,
                email : register.email,
                password : register.password,
                status : register.status,
            })
            alert('Akun berhasil di buat')
            navigate('/')
        }catch(error){
            alert('error')
        }

    }

    return(
        <form onSubmit={registerForm} className='m-4'>
            <h1 className='text-center'>Create</h1>
            <div className="flex-row">
                <div className="w-2xs">
                    <label htmlFor="name">Name : </label>
                    <input type="text" name='name' className="border-2" value={register.name} onChange={handleRegister}/>
                </div>
                <div className="w-2xs">
                    <label htmlFor="email">Email :</label>
                    <input type="email" name='email' className="border-2" value={register.email} onChange={handleRegister}/>
                </div>

                <div className="w-2xs">
                    <label htmlFor="password">Password : </label>
                    <input type="password" name='password' className="border-2" value={register.password} onChange={handleRegister}/>
                </div>
            </div>
            <button type='submit' className='border-2' >Kirim</button>
        </form>
    )
}