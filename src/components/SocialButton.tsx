"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import React from "react";

export default function SocialButton({ children, tujuan = "", className = "", text = "", namaFoto = "", durationAnim = 1, initY = 40, ...props }: any) {
    return (
        <>



            <a
                href={`${tujuan}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tulisanBiru/10 hover:bg-tulisanBiru/12 rounded-[20px] size-full inline-block text-center transition-transform duration-300 hover:scale-105"
            >
                <div className="absolute border-white size-full">
                    <div className="max-md:ml-3 ml-1 relative grid grid-cols-3 size-full">
                        <div className="flex justify-center items-center">
                            <Image
                                src={`/${namaFoto}.png`}
                                alt="github"
                                height={41}
                                width={41}
                                className="w-[55%] object-cover object-center"
                            />
                        </div>
                        <div className="col-span-2 flex justify-center items-center">
                            <h1 className="pointer-events-none select-none text-putih font-light text-[25px] max-md:text-[15px] max-md:mr-7 mr-10">
                                {text}
                            </h1>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
} 