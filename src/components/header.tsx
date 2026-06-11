"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar: FC = () => {
    const router = useRouter();
    const [ditekan, setDitekan] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(true);
    const lastScrollY = useRef<number>(0);
    const tujuan = ['', 'Competitive Programming', 'Web Development', 'Game & App Development', 'Mathematics'];
    const tujuanAsli = ['competitive-programming', 'web-development', 'game-development', 'mathematics'];

    const handleClick = () => {
        setDitekan(prev => !prev);
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY.current) {
                setVisible(true);
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                setVisible(false);
                setDitekan(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed w-[calc(100%-24px)] max-w-[1300px] mx-auto h-16 max-md:h-13 px-5 max-md:px-2 top-[23px] left-1/2 -translate-x-1/2 ${visible ? "translate-y-0" : "-translate-y-[148%]"} transition-transform duration-300 z-100`}>
            <div className="rounded-2xl flex justify-between items-center h-full w-full bg-objekBiru">
                <div className="flex ml-3 justify-center items-center w-[45px] h-[45px] max-md:w-[30px] max-md:h-[30px]">
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

                <div className="flex flex-row gap-8 justify-center items-center">
                    <div className="w-[100px] max-md:items-end max-md:w-[50px] h-auto flex flex-col items-center">
                        <button
                            onClick={() => {
                                const el = document.getElementById('projects-section');
                                el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="rounded-2xl px-3 max-md:px-2 w-[115px] max-md:w-[80px] max-md:scale-90 flex 
justify-between h-[35px] max-md:h-[30px] bg-tulisanBiru/20 hover:bg-tulisanBiru/22">
                            <div className="w-full h-full flex justify-center items-center">
                                <h1 className="text-[20px] text-center font-medium text-putih max-md:text-[15px]">
                                    Projects
                                </h1>
                            </div>
                        </button>
                    </div>

                    <div className="w-[100px] max-md:mr-5 max-md:items-end max-md:w-[50px] md:mr-15 h-auto flex flex-col items-center">
                        <button
                            onClick={handleClick}
                            className="rounded-2xl px-3 w-[115px] max-md:px-1 max-md:scale-90 flex 
                        justify-between max-md:justify-center max-md:gap-2 h-[35px] max-md:h-[30px] bg-tulisanBiru/20 max-md:w-[80px] hover:bg-tulisanBiru/22">
                            <div className="w-auto h-full flex items-center">
                                <h1 className="text-[20px] font-medium text-putih max-md:text-[15px]">
                                    Skills
                                </h1>
                            </div>
                            <div className="w-auto max-md:hidden scale-x-180 mr-1 h-auto mb-[2px] max-md:mb-[1px] flex items-center">
                                <h1 className="text-[20px] font-light text-[putih] max-md:text-[13px]">
                                    v
                                </h1>
                            </div>
                        </button>

                        {ditekan && <div className="absolute mt-11 py-2 w-[220px] max-md:w-[170px] bg-tulisanBiru/20 backdrop-blur-xs rounded-[20px] size-full inline-block text-center transition-transform duration-300 h-auto">
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
        </div>
    )
}

export default Navbar;