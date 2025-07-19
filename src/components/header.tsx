"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Navbar: FC = () => {
    return (
        <div className="fixed max-w-[1300px] w-full h-16 px-5 top-[23px] left-1/2 transform -translate-x-1/2 z-100">
            <div className="rounded-2xl h-full w-full bg-objekBiru">
                <div className="z-20 ml-5 py-2.5">
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
            </div>
        </div>
    )
}

export default Navbar;