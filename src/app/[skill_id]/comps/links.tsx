'use client'
import dynamic from "next/dynamic"
import SocialButton from "@/components/SocialButton"
const MotionSection = dynamic(() => import("@/components/MotionSection"), { ssr: false })

interface DataLinks {
    "id": string,
    "tujuan": string,
    "l_logo": string,
    "l_judul": string,
    "keterangan": string,
}

type SkillDeskripsi = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    links: DataLinks[],
    id: string
};

const Links = ({
    links = [],
    id = ""
}: SkillDeskripsi) => {
    const desk = ['', 'You can find my coding activity here', 'You can find my projects and coding activity here', 'You can download my game here', 'You can watch my math content here']
    return (
        <MotionSection
            initX={-40}
            initY={0}
            className="w-full md2:w-[870px] flex flex-row max-md:px-5 h-auto max-md:mt-[20px] mt-[50px] max-md2:justify-center items-start">
            <div className="w-[220px] max-md2:hidden h-auto flex flex-col">
                <div className="w-full h-[61px] flex items-center">
                    <h1 className="text-[55px] text-putih text-start">
                        Links
                    </h1>
                </div>
                <div className="w-full h-auto mt-[27px]">
                    <h1 className="text-[20px] text-tulisanBiru text-start">
                        {desk[Number(id)]}
                    </h1>
                </div>
            </div>

            <div className={`flex flex-wrap max-md2:justify-center max-md:w-full w-[620px] h-auto md2:ml-[70px] ${links.length <= 2 ? 'mt-9' : ''} max-md:gap-[20px] gap-[44px]`}>
                {links.map((isi, indeks) => (
                    <div key={indeks} className="md:w-[270px] h-[84px] w-[140px] sm2:w-[170px]  max-md:h-[70px]">
                        <SocialButton
                            namaFoto={isi.l_logo}
                            text={isi.l_judul}
                            tujuan={isi.tujuan}
                            bagi={15}>
                        </SocialButton>
                    </div>
                ))}
            </div>
        </MotionSection>
    )
}

export default Links;