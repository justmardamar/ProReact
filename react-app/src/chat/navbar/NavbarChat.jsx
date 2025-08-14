import Chat from "./content/Chat"
import Status from "./content/Status"
import { supabase } from "../Data"
import { handleLogout } from './content/Logout'

export default function NavbarChat(){

    

    return(
        <div className="flex justify-center items-center ">
            <div className="p-4 flex justify-center items-center rounded-2xl w-2xl shadow-lg bg-white text-slate-600">
                <div className="m-2">
                    <a href="/home">Chat</a>
                </div>
                <div className="m-2">
                    <a href="/status">Status</a>
                </div>
                <div className="m-2">
                    <a href="/comunity">Comunity</a>
                </div>
                <div className="m-2">
                    <a href="/">Login</a>
                </div>
                <div className="m-2">
                    <a href="/logout">Logout</a>
                </div>
                <div className="m-2"><a onClick={handleLogout}>Register</a></div>
            </div>
        </div>
    )
}