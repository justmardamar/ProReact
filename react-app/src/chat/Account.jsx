import React, { useState, useEffect } from 'react'
import { supabase } from '../chat/Data'

export default function Account() {
    const [getUserv,setUser] = useState()  
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const submitData = async (e) => {
        e.preventDefault()

        const dataProfile = {
            name,
            email,
            password
        }

        const { error } = await supabase
        .from('User')
        .insert({ name: name , email: email , password : password})
    }

  
    // const hapusUser = async (idUser) => {
    //     const response = await supabase
    //     .from('countries')
    //     .delete()
    //     .eq('id', idUser)
    // }
        


    useEffect(() => {
        const getUser = async () => {
            
            let { data, error } = await supabase
            .from('User')
            .select()
    
            setUser(data)
        }
        getUser()
    },[getUserv])

    return(
        <>
            {getUserv?.map((user) => (
                <h1 key={user.id}>nama : {user.name} email: {user.email} <button className='border-2' onClick={hapusUser(user.id)}>Hapus</button></h1>
            ))}

            <form onSubmit={submitData}>
                <div className="flex-row">
                    <div className="border-2 w-2xs">
                        <label htmlFor="name">Name : </label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="border-2 w-2xs">
                        <label htmlFor="email">Email :</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="border-2 w-2xs">
                        <label htmlFor="password">Password : </label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>

                <button type='button' onClick={submitData}>Kirim</button>
            </form>
        </>
    )
}