import { useNavigate } from "react-router-dom"
import React,{useState} from "react"

export default function NavbarChat(){

    const navigate = useNavigate()

    const [IsLog,setLog] = useState(false)
    

    function handleLogout(){
        sessionStorage.removeItem('token')
        navigate('/')
    }
    

    return(
        <div className="flex justify-center items-center ">
            <div className="p-4 flex justify-center items-center rounded-2xl w-2xl shadow-lg bg-white text-slate-600">
                <div className="m-2">
                    <a href="/home" >Chat</a>
                </div>
                <div className="m-2">
                    <a href="/add">Add Convertation</a>
                </div>
                <div className="m-2">
                    <a href="/">Login</a>
                </div>
                <div className="m-2">
                    <a href="/SignUp">Sign In</a>
                </div>
                <div className="m-2"><a onClick={handleLogout}>Log Out</a></div>
            </div>
        </div>
    )
}