'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from "next/dynamic"
const MotionSection = dynamic(() => import("@/components/MotionSection"), { ssr: false })
import SocialButton from '@/components/SocialButton';
import SkillsButton from '@/components/SkillsButton';

export default function Home() {
  return (
    <div className="w-full bg-[black] h-auto flex justify-center">
      <motion.div
        className="fixed top-0 left-0 w-full h-[1400px] z-5 bg-code"
        style={{
          backgroundSize: '85% auto',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-[1400px] z-5 bg-code"
        style={{
          backgroundSize: '85% auto',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* <div className="absolute left-[-9px] top-[1px] max-md:top-[4px] size-[300px] max-md:size-[165px]">
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
              </div> */}
      <div className="max-[942px]:w-full items-center flex flex-col gap-2 w-[947px] h-auto px-3 z-50">
        <MotionSection className="max-[942px]:w-full relative flex justify-between max-[900px]:flex-col max-[900px]:items-center w-[947px] mt-[120px] h-auto z-50">
          {/*pp*/}
          <div className="flex justify-center items-center max-md:w-[130px] max-md:h-[130px] w-[250.11px] h-[250.11px]">
            <Image
              src="/profilePicture10.jpg"
              alt="profilePicture10"
              height={210}
              width={210}
              className="rounded-full object-cover object-center"
            />
          </div>

          {/*nama deskripsi*/}
          <div className="max-md:w-full max-md:mt-5 w-[632px] min-[900px]:h-[250.11px] max-[900px]:h-auto min-[900px]:items-center flex">
            <div className="w-[696.89px] h-[174px] max-md:w-full max-md:flex-col max-md:flex max-md:items-center">
              <div className="w-[596px] h-[55px] max-md:h-auto flex items-center max-md:w-full max-[900px]:justify-center">
                <h1 className="text-putih font-extrabold text-[64px] max-[350px]:text-[10px] max-md:text-[29.3px]">
                  Dimar Ilham Tamara
                </h1>
              </div>
              <div className="w-[306px] h-[25px] max-md:h-[18px] md:mt-[8px] flex items-center max-[900px]:w-full max-[900px]:justify-center">
                <h1 className="text-putih font-semibold text-[24px] max-md:text-[18px]">
                  &gt; dimartamara1@gmail
                </h1>
              </div>
              <div className="w-[632px] h-[62px] max-md:h-[auto] max-md:mt-3 md:mt-[24px] flex items-center max-md:max-w-[320px] max-md:w-full">
                <h1 className="text-tulisanBiru font-medium text-[20px] max-md:text-[15px] leading-tight max-[900px]:text-justify">
                  I&apos;m a student at University of Indonesia majoring in Computer Engineering. I have a huge passion in the field of technology, especially in software.
                </h1>
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="relative flex max-md:mt-[15px] mt-[46px] w-[845px] h-[214px] max-[900px]:max-w-[650px] max-md:w-[330px] max-[900px]:w-full">
          <div className="max-[900px]:hidden w-[267px] h-[214px]">
            <div className="h-[47px] flex items-center">
              <h1 className="text-[55px] font-semibold text-putih">
                Socials
              </h1>
            </div>
            <div className="mt-[30px] h-[132px] flex items-center">
              <h1 className="text-[24px] font-semibold text-tulisanBiru">
                You can find me here coding, sharing projects, or just being me online.
              </h1>
            </div>
          </div>
          <div className="absolute right-0 grid grid-rows-2 gap-[44px] w-[548px] h-[214px] max-md:h-[160px] max-[900px]:w-full max-md:gap-[20px]">
            <div className="grid grid-cols-2 gap-[44px] max-md:gap-[20px]">
              <div className="relative">
                <SocialButton
                  namaFoto="github"
                  text="Github"
                  tujuan="https://github.com/Dimar-I-T">
                </SocialButton>
              </div>
              <div className="relative">
                <SocialButton
                  namaFoto="linkedin"
                  text="Linkedin"
                  tujuan="https://linkedin.com/in/dimar-ilham-tamara-b145b7315">
                </SocialButton>
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-[44px] max-md:gap-[20px]">
              <div className="relative">
                <SocialButton
                  namaFoto="leetcode"
                  text="LeetCode"
                  tujuan="https://leetcode.com/u/noobCoderHehe/">
                </SocialButton>
              </div>
              <div className="relative">
                <SocialButton
                  namaFoto="youtube"
                  text="YouTube"
                  tujuan="https://www.youtube.com/@dimartamara1">
                </SocialButton>
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="relative max-[900px]:mt-[80px] flex flex-col w-[800px] h-auto mt-[109px] justify-center max-[900px]:w-full">
          <div className="flex justify-center items-center w-full h-[55px]">
            <h1 className="text-[55px] max-[900px]:text-[35px] text-putih font-semibold">
              Skills & Projects
            </h1>
          </div>

          <div className="w-full h-auto mt-[28px] grid grid-rows-2 max-[870px]:gap-[5px] gap-[21px]">
            <div className="transition-transform duration-300 h-auto grid min-[870px]:grid-cols-2 max-[870px]:gap-[5px] max-[870px]:grid-rows-2 max-[870px]:justify-items-center gap-[21px]">
              <div className="relative max-[500px]:w-full w-[390px] h-[200px]">
                <SkillsButton
                  namaFoto="cpp"
                  text="Competitive Programming"
                  texts={['C++, C, Python', 'Algorithms', 'Data Structure']}>
                </SkillsButton>
              </div>
              <div className="relative max-[500px]:w-full w-[390px] h-[200px]">
                <SkillsButton
                  namaFoto="react"
                  text="Web Development"
                  texts={['TypeScript, SQL', 'React.js, Next.js', 'Tailwind CSS']}>
                </SkillsButton>
              </div>
            </div>
            <div className="w-full transition-transform duration-300 h-auto grid min-[870px]:grid-cols-2 max-[870px]:gap-[5px] max-[870px]:grid-rows-2 max-[870px]:justify-items-center gap-[21px]">
              <div className="relative max-[500px]:w-full w-[390px] h-[200px]">
                <SkillsButton
                  namaFoto="unity"
                  text="Game Development"
                  texts={['C#, Java', 'Unity', 'Object Oriented Programming']}>
                </SkillsButton>
              </div>
              <div className="relative max-[500px]:w-full w-[390px] h-[200px]">
                <SkillsButton
                  namaFoto="math"
                  text="Mathematics"
                  texts={['Calculus', 'Discrete Mathematics', 'Linear Algebra']}>
                </SkillsButton>
              </div>
            </div>
          </div>
        </MotionSection>
        <div className="w-full mt-10 h-15 pt-5">
          <h1 className="text-putih text-center font-extralight text-[15px]">
            &copy; Dimar Ilham Tamara
          </h1>
        </div>
      </div>
    </div>
  );
}
