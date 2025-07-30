'use client';
import Bg_code from './homepage/bg/page'
import Deskripsi from './homepage/deskripsi/page'
import Skills from './homepage/skills/page'

export default function Home() {
  return (
    <div className="w-full bg-[black] h-auto flex justify-center">
      <Bg_code />
      <div className="max-[942px]:w-full items-center flex flex-col gap-2 w-[947px] h-auto px-3 z-50">
        <Deskripsi />
        <Skills />
        <div className="w-full mt-10 h-15 pt-5">
          <h1 className="text-putih text-center font-extralight text-[15px]">
            &copy; Dimar Ilham Tamara
          </h1>
        </div>
      </div>
    </div>
  );
}
