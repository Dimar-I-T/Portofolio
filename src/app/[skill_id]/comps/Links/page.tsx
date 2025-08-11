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
        <MotionSection className="w-[870px] flex flex-row h-auto mt-[50px] items-start">
            <div className="w-[220px] h-auto flex flex-col">
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

            <div className={`flex flex-wrap w-[620px] h-auto ml-[70px] ${links.length <= 2 ? 'mt-9' : ''} gap-[44px]`}>
                {links.map((isi, indeks) => (
                    <div key={indeks} className="w-[270px] h-[84px]">
                        <SocialButton
                            namaFoto={isi.l_logo}
                            text={isi.l_judul}
                            tujuan={isi.tujuan}>
                        </SocialButton>
                    </div>
                ))}
            </div>
        </MotionSection>
    )
}

export default Links;