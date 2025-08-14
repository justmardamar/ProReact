import React, { useState, useEffect } from 'react'
import { supabase } from '../chat/Data'

export default function Account({token}) {
    const [getUserv,setUser] = useState()
    const [create,setCreate] = useState({
        name : '',
        email : '',
        password : ''
    })  
    const [update,setUpdate] = useState({
        id : '',
        name : '',
        email : '',
        password : ''
    })


    const getId = async (idUser) => {
        const { data, error } = await supabase
        .from('User')
        .select()
        .eq('id', idUser)
        .single()

        setUpdate(data)
    }

    const handleUpdate = (e) => {
        setUpdate({
            ...update,
            [e.target.name] : e.target.value
        })
    }
    const handleCreate = (e) => {
        setCreate({
            ...create,
            [e.target.name] : e.target.value
        })
    }


    const createUser = async (e) => {
        e.preventDefault()

        const { error } = await supabase
        .from('User')
        .insert({ 
            name: create.name , 
            email: create.email , 
            password : create.password
        })

        setCreate({
            name : '',
            email : '',
            password : ''
        })
    }

    const updateUser = async (e) => {
        e.preventDefault()

        const { error } = await supabase
        .from('User')
        .update({ 
            name: update.name,
            email : update.email,
            password : update.password
        })
        .eq('id', update.id)

        setUpdate({
            id : '',
            name : '',
            email : '',
            password : ''
        })
    }

  
    const hapusUser = async (idUser) => {
        const response = await supabase
        .from('User')
        .delete()
        .eq('id', idUser)
    }
        


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
            <h1>Selamat Datang {token?.user.user_metadata.name}</h1>
            <table className='table-auto'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {getUserv?.map((user) => (
                        <tr key={user.id}>
                            <td 
                                className='border-2 text-center p-4'
                                >{user.id}
                            </td>
                            <td 
                                className='border-2 text-center p-4'
                                >{user.name}
                            </td>
                            <td 
                                className='border-2 text-center p-4'
                                >{user.email}
                            </td>
                            <td 
                                className='border-2 text-center p-4'
                                >{user.password}
                            </td>
                            <td 
                                className='border-2 text-center p-4'>
                                <button onClick={() => hapusUser(user.id)} className='border-2 p-2'>Hapus</button>
                                <button onClick={() => getId(user.id)} className='border-2 p-2'>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex">
                <form onSubmit={createUser} className='m-4'>
                    <h1 className='text-center'>Create</h1>
                    <div className="flex-row">
                        <div className="w-2xs">
                            <label htmlFor="name">Name : </label>
                            <input type="text" name='name' className="border-2" value={create.name} onChange={handleCreate}/>
                        </div>
                        <div className="w-2xs">
                            <label htmlFor="email">Email :</label>
                            <input type="email" name='email' className="border-2" value={create.email} onChange={handleCreate}/>
                        </div>

                        <div className="w-2xs">
                            <label htmlFor="password">Password : </label>
                            <input type="password" name='password' className="border-2" value={create.password} onChange={handleCreate}/>
                        </div>
                    </div>
                    <button type='submit' className='border-2' >Kirim</button>
                </form>

                <form onSubmit={updateUser} className='m-4'>
                    <h1 className='text-center'>Update</h1>
                    <div className="flex-row">
                        <div className="w-2xs">
                            <label htmlFor="name">Name : </label>
                            <input type="text" name='name' className='border-2' value={update.name} onChange={handleUpdate}/>
                        </div>

                        <div className="w-2xs">
                            <label htmlFor="email">Email :</label>
                            <input type="email" name='email' className='border-2' value={update.email} onChange={handleUpdate}/>
                        </div>

                        <div className="w-2xs">
                            <label htmlFor="password">Password : </label>
                            <input type="password" name='password' className='border-2' value={update.password} onChange={handleUpdate}/>
                        </div>
                    </div>

                    <button type='submit' className='border-2'>Update</button>
                </form>
            </div>
        </>
    )
}