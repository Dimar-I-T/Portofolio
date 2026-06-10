'use client'
import { Project } from "@/utils/types";
import SkillDeskripsi from "./deskripsi"
import Projects from '@/app/homepage/projects/Projects';
import Links from "./links"

interface Data {
    "s_id": string,
    "judul": string,
    "logo": string,
    "deskripsi": string
}

interface DataTools {
    "s_id": string,
    "s_judul": string,
    "s_logo": string,
}

interface DataLinks {
    "id": string,
    "tujuan": string,
    "l_logo": string,
    "l_judul": string,
    "keterangan": string,
}

type SkillProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    skill_id: string
    data: Data,
    dataTools: DataTools[],
    dataLinks: DataLinks[],
    projects: Project[]
};

interface ID {
    "competitive-programming": number,
    "web-development": number,
    "game-development": number,
    "mathematics": number,
}

export default function SkillClient({ skill_id, data, dataTools, dataLinks, projects }: SkillProps) {
    const id: ID = {
        'competitive-programming': 1,
        'web-development': 2,
        'game-development': 3,
        'mathematics': 4
    }

    const param_id = () => {
        if (typeof skill_id === 'string' && skill_id in id) {
            return id[skill_id as keyof ID];
        }
    }

    return (
        <div className="bg-[black] w-full min-h-screen flex flex-col items-center">
            <div className="flex w-full h-auto justify-center">
                <SkillDeskripsi
                    judul={data.judul}
                    logo={data.logo}
                    deskripsi={data.deskripsi}
                    tools={dataTools}
                ></SkillDeskripsi>
            </div>
            <Links
                links={dataLinks}
                id={String(param_id())}>
            </Links>
            <div className="max-[1300px]:w-full items-center flex flex-col gap-2 w-[1300px] h-auto px-3 z-50">
                <Projects projects={projects} />
            </div>
        </div>
    )
}