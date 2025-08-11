'use client'
import dynamic from "next/dynamic"
import SkillsButton from '@/components/SkillsButton';
const MotionSection = dynamic(() => import("@/components/MotionSection"), { ssr: false })

const skills = () => {
    return (
        <MotionSection className="relative max-[900px]:mt-[50px] flex flex-col w-[800px] h-auto mt-[109px] justify-center max-[900px]:w-full">
            <div className="flex justify-center items-center w-full h-[55px]">
                <h1 className="text-[55px] max-[900px]:text-[35px] text-putih font-semibold">
                    Skills & Projects
                </h1>
            </div>

            <div className="w-full h-auto mt-[28px] grid grid-rows-2 max-[870px]:gap-[5px] gap-[21px]">
                <div className="transition-transform duration-300 h-auto grid min-[870px]:grid-cols-2 max-[870px]:gap-[5px] max-[870px]:grid-rows-2 max-[870px]:justify-items-center gap-[21px]">
                    <div className="relative max-[500px]:w-full w-[390px] h-[200px]">
                        <SkillsButton
                            tujuan='competitive-programming'
                            namaFoto="cpp"
                            text="Competitive Programming"
                            texts={['C++, C, Python', 'Algorithms', 'Data Structure']}>
                        </SkillsButton>
                    </div>
                    <div className="relative max-[500px]:w-full w-[390px] h-[200px]">
                        <SkillsButton
                            tujuan='web-development'
                            namaFoto="react"
                            text="Web Development"
                            texts={['TypeScript, SQL', 'React.js, Next.js', 'Tailwind CSS']}>
                        </SkillsButton>
                    </div>
                </div>
                <div className="w-full transition-transform duration-300 h-auto grid min-[870px]:grid-cols-2 max-[870px]:gap-[5px] max-[870px]:grid-rows-2 max-[870px]:justify-items-center gap-[21px]">
                    <div className="relative max-[500px]:w-full w-[390px] h-[200px]">
                        <SkillsButton
                            tujuan='game-development'
                            namaFoto="unity"
                            text="Game Development"
                            texts={['C#, Java', 'Unity', 'Object Oriented Programming']}>
                        </SkillsButton>
                    </div>
                    <div className="relative max-[500px]:w-full w-[390px] h-[200px]">
                        <SkillsButton
                            tujuan='mathematics'
                            namaFoto="math"
                            text="Mathematics"
                            texts={['Calculus', 'Discrete Mathematics', 'Linear Algebra']}>
                        </SkillsButton>
                    </div>
                </div>
            </div>
        </MotionSection>
    )
}

export default skills