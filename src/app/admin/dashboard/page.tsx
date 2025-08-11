'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();
    useEffect(() => {
        const f = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                alert("Unauthorized!");
                router.push('/admin/login');

                return;
            }
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-admin/dashboard/`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            const data = await response.json();
            if (data.success) {
            } else {
                alert(data.message);
                router.push('/admin/login');
            }
        }

        f();
    }, [])

    return (
        <>
            <div className="bg-black bg-cover w-full min-h-screen flex justify-center items-center">
                <div className="bg-tulisanBiru/10 py-5 w-[800px] h-auto min-h-[200px] flex flex-col rounded-2xl items-center">
                    <div className="w-full h-auto">
                        <h1 className="text-[40px] text-center font-bold">
                            Pilih Section
                        </h1>
                    </div>

                    <div className="w-full h-auto mt-3 flex flex-col items-center">
                        <div className="w-[500px] h-auto">
                            <button 
                            onClick={() => {router.push('/admin/dashboard/skill-dashboard')}}
                            className="h-10 w-full bg-[white]/50 rounded-2xl hover:bg-[white]/55">
                                <div className="w-full h-full flex justify-center items-center">
                                    <h1 className="text-[30px] font-medium text-[white]">
                                        Skills
                                    </h1>
                                </div>
                            </button>
                            <button className="h-10 w-full bg-[white]/50 rounded-2xl hover:bg-[white]/55 mt-5 mb-5">
                                <div className="w-full h-full flex justify-center items-center">
                                    <h1 className="text-[30px] font-medium text-[white]">
                                        Experience
                                    </h1>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}