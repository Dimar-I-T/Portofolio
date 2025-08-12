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

type SkillDeskripsi = {
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
        <MotionSection
            initX={40}
            initY={0}
            className="relative flex flex-col items-center h-auto md2:w-[1000px] w-[740px] mt-[130px]  max-md:mt-[105px] px-8">
            <div className="flex flex-row w-full max-md2:flex-col h-auto max-md2:items-center justify-center">
                <div className="w-[181px] max-md2:w-[130px] h-auto">
                    {logo && <Image
                        src={`${logo}`}
                        alt="img"
                        height={170}
                        width={170}
                        className="object-cover size-[170px] max-md2:size-[130px] object-center z-50"
                    />}
                </div>
                <div className="w-[740px] max-md2:w-full max-md2:mt-2 md2:ml-[55px] flex flex-col max-md2:items-center items-start">
                    <div className="w-full h-auto flex max-md2:justify-center">
                        <h1 className="text-[55px] max-md:text-[26px] whitespace-nowrap max-md:text-center text-putih font-extrabold">
                            {judul}
                        </h1>
                    </div>
                    <div className="w-full h-auto">
                        <h1 className="text-[20px] max-md:text-[15px] font-medium text-justify leading-tight text-tulisanBiru">
                            {deskripsi}
                        </h1>
                    </div>
                    <div className="w-auto flex items-center max-md:mt-2 mt-5 h-auto">
                        {tools.length > 0 && <button
                            onClick={() => klik()}
                            className={`w-auto max-md:w-full max-w-[700px] max-md:justify-center p-[15px] flex flex-wrap md:justify-evenly max-md:gap-y-4 gap-3 h-auto bg-tulisanBiru/15 drop-shadow-[0_0_100px_#00006E] backdrop-blur-xs rounded-[20px] max-md:scale-90 transition-transform duration-300 hover:scale-102`}>
                            {/* map s_logo yang dipass dari page.tsx dari backend */}
                            {tools.map((isi, indeks) => (
                                <div key={indeks} className={`flex flex-row items-center transition-all duration-300 ease-in-out`}>
                                    <Image
                                        src={isi.s_logo}
                                        alt="img"
                                        height={35}
                                        width={35}
                                        className="object-cover max-md:size-[25px] size-[35px] object-center z-50"
                                    />
                                    {keteken && <h1 className="text-putih text-[20px] max-md:text-[15px] ml-3 mr-2 transition-opacity duration-500 ease-in-out opacity-100">
                                        {isi.s_judul}
                                    </h1>}
                                </div>
                            ))}
                        </button>}
                    </div>
                </div>
            </div>
        </MotionSection>
    )
}