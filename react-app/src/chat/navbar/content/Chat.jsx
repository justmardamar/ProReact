import { supabase } from "../../Data"
import { useNavigate } from "react-router-dom"

export default function Chat({token}){

    const navigate = useNavigate()

    async function check() {
        const { data, error } = await supabase.auth.getSession()
        if(!data.session){
            navigate('/')
        }
    }
    check()

    return(
        <div className="mt-4">
            <div className="flex w-full">
                {/* Sidebar daftar chat */}
                <div className="p-2 w-1/4 space-y-3">
                    <div className="bg-amber-50 p-4 rounded-lg">
                        <h1 className="mb-2 font-semibold">Name</h1>
                        <div className="flex items-center">
                            <p className="mr-3">Selamat Pagi</p>
                            <span className="px-2 py-1 bg-red-500 text-white rounded-full text-sm">5</span>
                        </div>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                        <h1 className="mb-2 font-semibold">Name</h1>
                        <div className="flex items-center">
                            <p className="mr-3">Selamat Pagi</p>
                            <span className="px-2 py-1 bg-red-500 text-white rounded-full text-sm">5</span>
                        </div>
                    </div>
                </div>

                {/* Chat window */}
                <div className="flex h-160 flex-col w-3/4 bg-amber-300">
                {/* Header chat */}
                    <div className="p-3 bg-amber-50 font-semibold">Name</div>
                    
                    {/* Isi pesan */}
                    <div className="flex flex-col flex-grow p-4 space-y-2">
                        {/* Pesan dari orang lain */}
                        <div className="self-start bg-amber-400 rounded-2xl px-4 py-2 max-w-[70%]">
                        Halo selamat pagi
                        </div>
                        {/* Pesan user sendiri */}
                        <div className="self-end bg-amber-500 text-white rounded-2xl px-4 py-2 max-w-[70%]">
                            Halo selamat pagi
                        </div>
                    </div>

                    {/* Input pesan */}
                    <div className="flex p-3 gap-2 bg-amber-200">
                        <input
                        type="text"
                        placeholder="Tulis pesan..."
                        className="flex-grow px-3 py-2 rounded-lg border border-gray-300 focus:outline-none"
                        />
                        <button className="px-4 py-2 bg-amber-500 text-white rounded-lg">
                            Kirim
                        </button>
                    </div>
                </div>
                
            </div>
        </div>

    )
}