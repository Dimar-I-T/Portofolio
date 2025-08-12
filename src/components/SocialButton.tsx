"use client";
import { px } from 'framer-motion';
import Image from 'next/image';
import React from "react";
type SocialButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  text?: string;
  tujuan?: string;
  namaFoto?: string;
  bagi?: number;
};

export default function SocialButton({
  tujuan = "",
  text = "",
  namaFoto = "",
  bagi=10
}: SocialButtonProps) {
    let textt = text;
    if (text.length > 12){
        textt = text.substring(0, 6) + " " + text.substring(6, text.length);
    }

    return (
        <>
            <a
                href={`${tujuan}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-tulisanBiru/${bagi} hover:bg-tulisanBiru/${bagi + 2} md2:drop-shadow-[0_0_100px_#00006E] backdrop-blur-xs rounded-[20px] size-full inline-block text-center transition-transform duration-300 hover:scale-105`}
            >
                <div className="absolute border-white size-full">
                    <div className="max-md:ml-3 ml-1 relative grid grid-cols-3 size-full">
                        <div className="flex justify-center items-center">
                            <Image
                                src={namaFoto}
                                alt="github"
                                height={41}
                                width={41}
                                className="w-[55%] object-cover object-center"
                            />
                        </div>
                        <div className="col-span-2 flex justify-center items-center">
                            <h1 className={`pointer-events-none select-none text-putih font-light leading-tight text-[25px] max-md:text-[15px] max-md:mr-7 mr-10`}>
                                {textt}
                            </h1>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
} 