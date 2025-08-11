'use client'
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
const MotionSection = dynamic(() => import("@/components/MotionSection"), { ssr: false })

interface Tools {
    s_id: string,
    s_judul: string,
    s_logo: string,
}

type SkillDeskripsi =  {
    judul: string,
    logo: string,
    deskripsi: string,
    tools: Tools[],
};

export default function SkillDeskripsi( 
    {
        judul = "",
        logo = "",
        deskripsi = "",
        tools = [],
    }: SkillDeskripsi
) {
    const [keteken, setKeteken] = useState<boolean>(false);
    const klik = () => {
        setKeteken(prev => !prev);
    }

    return (
        <MotionSection className="flex flex-col h-auto md:w-[1000px] mt-[140px] w-full px-5">
            <div className="flex flex-row w-full h-auto items-center">
                <div className="w-[181px] h-auto">
                    {logo && <Image
                        src={`${logo}`}
                        alt="img"
                        height={170}
                        width={170}
                        className="object-cover size-[170px] object-center z-50"
                    />}
                </div>
                <div className="w-[740px] ml-[55px] flex flex-col items-start">
                    <div className="w-full h-auto">
                        <h1 className="text-[60px] text-putih font-extrabold">
                            {judul}
                        </h1>
                    </div>
                    <div className="w-full h-auto">
                        <h1 className="text-[20px] font-medium text-justify leading-tight text-tulisanBiru">
                            {deskripsi}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="ml-[225px]">
                {tools.length > 0 && <button
                    onClick={() => klik()}
                    className={`w-auto max-w-[700px] p-[15px] flex flex-wrap gap-3 mt-5 h-auto bg-tulisanBiru/10 hover:bg-tulisanBiru/12 drop-shadow-[0_0_10px_#00006E] backdrop-blur-xs rounded-[20px] max-md:scale-90 transition-transform duration-300 ease-in-out hover:scale-102`}>
                    {/* map s_logo yang dipass dari page.tsx dari backend */}
                    {tools.map((isi, indeks) => (
                        <div key={indeks} className={`flex flex-row items-center transition-all duration-300 ease-in-out`}>
                            <Image
                                src={isi.s_logo}
                                alt="img"
                                height={35}
                                width={35}
                                className="object-cover size-[35px] object-center z-50"
                            />
                            {keteken && <h1 className="text-putih text-[20px] ml-3 mr-2 transition-opacity duration-500 ease-in-out opacity-100">
                                {isi.s_judul}
                            </h1>}
                        </div>
                    ))}
                </button>}
            </div>
        </MotionSection>
    )
}