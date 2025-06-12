"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";

const Navbar: FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fixed max-w-[1300px] w-full h-16 px-5 top-5 left-1/2 transform -translate-x-1/2 z-50">
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