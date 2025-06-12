'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/header';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <motion.div
        className="absolute top-0 left-0 w-full h-[2713px] z-0 bg-code"
        style={{
          backgroundSize: '85% auto',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{ opacity: [0.5, 1.5, 0.5] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative justify-items-center h-[450px]">
        <div className="absolute z-10 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-wrap max-md:justify-center md:justify-between mt-[150px] md:w-[1000px] w-full min-w-[300px] gap-[20px] h-[300px] left-1/2">
            <div className="relative justify-items-center ml-2 w-[280px] h-[280px] max-md:w-[150px] max-md:h-[150px]">
              <Image
                src="/profilePicture.png"
                alt="profilePicture"
                fill
                className="rounded-full mt-3 object-cover"
              />
              <div className="absolute left-[-9px] top-[1px] max-md:top-[4px] size-[300px] max-md:size-[165px]">
                <motion.img
                  src="/lingkaranPutar4.png"
                  alt="Rotating"
                  animate={{ rotate: 360, opacity: [1.0, 1.5, 1.0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "linear",
                  }}
                />
              </div>
            </div>
            <div className="max-w-[650px] w-full flex-none h-full ml-3 col-span-2">
              <h1 className="max-md:text-[30px] text-[64px] text-putih max-md:text-center font-bold">
                Dimar Ilham Tamara
              </h1>

              <div className="w-full h-full row-span-2">
                <p className="max-md:text-[13px] text-[20px] font-medium max-md:text-center text-tulisanBiru">
                  I'm a student at University of Indonesia majoring in Computer Engineering. I have a huge passion in the field of technology, especially in software. I have skills in C++, C#, C, Python, JavaScript, TypeScript, SQL, Game Development, Back End Development, Web Development, Competitive Programming, Data Structures and Algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative justify-items-center h-[100px] w-[100px] border-2 border-white">

      </div> */}
    </div>
  );
}
