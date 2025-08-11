"use client";
import Image from 'next/image';
import React from "react";
import { useRouter } from 'next/navigation';

type SkillsButtonProps = {
    tujuan?: string;
    text?: string;
    namaFoto?: string;
    texts?: string[];
};

export default function SkillsButton(
    {
        tujuan='competitive-programming',
        text = "",
        namaFoto = "",
        texts = [""],
    }: SkillsButtonProps
) {
    const router = useRouter();
    return (
        <>
            <a
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                    router.push(`/${tujuan}`);
                }}
                className="bg-tulisanBiru/10 hover:bg-tulisanBiru/12 drop-shadow-[0_0_10px_#00006E] backdrop-blur-xs rounded-[20px] max-md:scale-90 size-full inline-block transition-transform duration-300 hover:scale-102"
            >
                <div className="absolute pt-[17px] w-full h-auto">
                    <div className="flex pl-[49px]">
                        <div className="w-[60px]">
                            <Image
                                src={`/${namaFoto}.png`}
                                alt="github"
                                height={60}
                                width={60}
                                className="w-[60px] object-cover object-center"
                            />
                        </div>
                        <div className="ml-[24px] flex items-center w-[200px] h-[60px]">
                            <h1 className="text-putih leading-tight text-[28px] font-medium">
                                {text}
                            </h1>
                        </div>
                    </div>
                    <div className="pl-[49px] w-full h-[173px]">
                        <div className="w-[320px] mt-[14px] h-[140px]">
                            <div className="h-[22px] flex items-center">
                                <h1 className="text-putih font-medium text-[22px]">
                                    Skills:
                                </h1>
                            </div>
                            <div className="h-[118px] mt-1 flex">
                                <ul className="text-putih font-extralight text-[clamp(18px,2vw,20px)] leading-[1.1] list-disc pl-5 space-y-0">
                                    {texts.map((t, index) => (
                                        <li key={index}>
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
} 