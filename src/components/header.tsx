"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar: FC = () => {
    const router = useRouter();
    const [ditekan, setDitekan] = useState<boolean>(false);
    const tujuan = ['', 'Competitive Programming', 'Web Development', 'Game Development', 'Mathematics'];
    const tujuanAsli = ['competitive-programming', 'web-development', 'game-development', 'mathematics'];

    const handleClick = () => {
        setDitekan(prev => !prev);
    }

    return (
        <div className="fixed max-w-[1300px] w-full h-16 px-5 top-[23px] left-1/2 transform -translate-x-1/2 z-100">
            <div className="rounded-2xl flex justify-between items-center h-full w-full bg-objekBiru">
                <div className="flex ml-3 justify-center items-center w-[45px] h-[45px]">
                    <Link href="/">
                        <Image
                            src="/sLogo.png"
                            alt="sLogo"
                            width={45}
                            height={45}
                            className="rounded-full object-cover"
                        />
                    </Link>
                </div>

                <div className="w-[220px] max-md:mr-5 max-md:items-end max-md:w-[180px] md:mr-10 scale-111 h-auto flex flex-col items-center">
                    <button
                        onClick={handleClick}
                        className="rounded-2xl px-3 w-[115px] max-md:scale-90 flex 
                    justify-between h-[35px] bg-tulisanBiru/20 hover:bg-tulisanBiru/22">
                        <div className="w-auto h-full flex items-center">
                            <h1 className="text-[20px] font-medium text-putih">
                                Skills
                            </h1>
                        </div>
                        <div className="w-auto scale-x-180 mr-1 h-auto mb-[2px] flex items-center">
                            <h1 className="text-[20px] font-light text-[putih]">
                                v
                            </h1>
                        </div>
                    </button>

                    {ditekan && <div className="absolute mt-11 py-2 w-full bg-tulisanBiru/20 backdrop-blur-xs rounded-[20px] size-full inline-block text-center transition-transform duration-300 h-auto">
                        <div className="w-full gap-y-1 h-auto flex flex-col">
                            {tujuan.map((isi, indeks) => (
                                <button key={indeks} 
                                onClick={() => {
                                    router.push(`/${tujuanAsli[indeks - 1]}`)
                                    setDitekan(false);
                                }}

                                className="hover:bg-tulisanBiru/20 rounded-[20px] size-full inline-block drop-shadow-2xl text-center transition-transform duration-300 hover:scale-105">
                                    <h1 className="text-[17px] max-md:text-[13px] font-medium text-putih">
                                        {isi}
                                    </h1>
                                </button>
                            ))}
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Navbar;