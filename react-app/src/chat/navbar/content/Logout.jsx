import React,{useEffect} from "react"
import { supabase } from "../../Data"
import { useNavigate } from "react-router-dom"

export default function Logout(){

    const navigate = useNavigate()

    function handleLogout(){
        sessionStorage.removeItem('token')
        navigate('/')
    }
}