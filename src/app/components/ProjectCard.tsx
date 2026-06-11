"use client"
import { useState } from 'react';
import NextImage from 'next/image';
import { optimizeUrl } from '@/utils/cloudinary'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ProjectCard({ isi }: any) {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasManyImages = isi.image_url.length > 1;
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div
            className={`group relative w-full flex flex-col lg:flex-row gap-10 bg-tulisanBiru/10 md:drop-shadow-[0_0_80px_rgba(0,0,110,0.3)] backdrop-blur-md rounded-[32px] p-6 md:p-10 lg:p-12 overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[3000px]' : 'max-h-[600px]'
                }`}
        >

            <div className="w-full lg:w-5/12 flex flex-col justify-between gap-8 z-10 relative">
                <div className="flex flex-col gap-6">
                    <h1 className="text-3xl md:text-[48px] font-bold text-putih leading-tight">
                        {isi.judul}
                    </h1>

                    <div className="flex flex-wrap gap-4">
                        <a
                            className="px-6 py-2.5 rounded-full bg-tulisanBiru/20 hover:bg-tulisanBiru/40 text-putih text-sm md:text-base font-medium transition-all hover:-translate-y-1 backdrop-blur-sm"
                            href={isi.link_production}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Live Demo
                        </a>
                        <a
                            className="px-6 py-2.5 rounded-full bg-tulisanBiru/20 hover:bg-tulisanBiru/40 text-putih text-sm md:text-base font-medium transition-all hover:-translate-y-1 backdrop-blur-sm"
                            href={isi.link_code}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Code
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-2">
                        {isi.tool_logo_url.map((logo: any, index1: any) => (
                            <div key={index1} className="p-2 bg-putih/5 rounded-xl backdrop-blur-md">
                                <NextImage
                                    blurDataURL={optimizeUrl(logo)}
                                    placeholder='blur'
                                    src={optimizeUrl(logo)}
                                    alt="tech-logo"
                                    height={40}
                                    width={40}
                                    className="object-contain size-[30px] md:size-[35px]"
                                />
                            </div>
                        ))}
                    </div>

                    <p className="text-justify text-base md:text-[18px] text-gray-300 leading-relaxed mt-4">
                        {isi.deskripsi}
                    </p>

                    {isi.kontribusi && isi.kontribusi.length > 0 && (
                        <div className="flex flex-col gap-3 mt-2">
                            <h2 className="text-putih text-[18px] font-semibold tracking-wide">
                                Key Contributions
                            </h2>
                            <ul className="flex flex-col gap-3">
                                {isi.kontribusi.map((poin: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-3 group/item">
                                        <span className="flex-shrink-0 text-tulisanBiru font-mono font-bold text-[18px] mt-[1px]">
                                            &gt;
                                        </span>
                                        <span className="text-gray-300 text-base md:text-[17px] leading-relaxed">
                                            {poin}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="mt-4 inline-block pb-8">
                    <span className="px-5 py-2 rounded-full bg-putih/10 text-putih text-sm font-semibold tracking-widest uppercase">
                        {isi.tanggal}
                    </span>
                </div>
            </div>

            <div className="w-full lg:w-7/12 flex flex-col sm:grid sm:grid-cols-2 gap-4 relative">
                {isi.image_url.map((url: any, index1: any) => {
                    const isFirst = index1 === 0;

                    return (
                        <button
                            key={index1}
                            onClick={() => {
                                setCurrentIndex(index1);
                                setOpen(true);
                            }}
                            className={`relative overflow-hidden rounded-[24px] border border-putih/10 transition-colors ${isFirst ? 'sm:col-span-2 h-[250px] lg:h-[350px]' : 'sm:col-span-1 h-[200px] lg:h-[250px]'}`}
                        >
                            <NextImage
                                blurDataURL={optimizeUrl(url)}
                                placeholder='blur'
                                src={optimizeUrl(url)}
                                alt={`Screenshot ${index1 + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </button>
                    );
                })}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={currentIndex}
                slides={isi.image_url.map((url: string) => ({ src: optimizeUrl(url) }))}
            />

            {hasManyImages && (
                <>
                    {!isExpanded && (
                        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0a0f24] via-[#0a0f24]/80 to-transparent z-20 pointer-events-none rounded-b-[32px]"></div>
                    )}

                    <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-30">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-putih/10 hover:bg-putih/20 text-putih text-sm md:text-base font-semibold backdrop-blur-lg transition-all hover:scale-105"
                        >
                            {isExpanded ? (
                                <>Show Less <span className="text-xl">↑</span></>
                            ) : (
                                <>View Full Details <span className="text-xl">↓</span></>
                            )}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}