'use client';

import Deskripsi from './homepage/deskripsi/page'
import Skills from './homepage/skills/page'

export default function Home() {
  return (
    <div className="w-full bg-[black] h-auto flex justify-center">
      <div className="max-[942px]:w-full items-center flex flex-col gap-2 w-[947px] h-auto px-3 z-50">
        <Deskripsi />
        <Skills />
      </div>
    </div>
  );
}
