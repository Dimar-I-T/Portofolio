'use client'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import SkillDeskripsi from "./comps/Deskripsi/page"
import Links from "./comps/Links/page"

interface ID {
    "competitive-programming": number,
    "web-development": number,
    "game-development": number,
    "mathematics": number,
}

interface Data {
    "s_id": string,
    "judul": string,
    "logo": string,
    "deskripsi": string
}

interface DataLinks {
    "id": string,
    "tujuan": string,
    "l_logo": string,
    "l_judul": string,
    "keterangan": string,
}

interface DataTools {
    "s_id": string,
    "s_judul": string,
    "s_logo": string,
}

export default function Skill() {
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const [data, setData] = useState<Data>({
        "s_id": "",
        "judul": "",
        "logo": "",
        "deskripsi": ""
    });
    const [dataTools, setDataTools] = useState<DataTools[]>();
    const [dataLinks, setDataLinks] = useState<DataLinks[]>();

    const id: ID = {
        'competitive-programming': 1,
        'web-development': 2,
        'game-development': 3,
        'mathematics': 4
    }

    const param_id = () => {
        if (typeof params.skill_id === 'string' && params.skill_id in id) {
            return id[params?.skill_id as keyof ID];
        }
    }

    useEffect(() => {
        const ambilDeskripsi = async () => {
            const idValue = param_id();
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-user/skills/?id=${idValue}`, {
                method: 'GET'
            })

            const data = await response.json();
            if (data.success) {
                setData(data.data);
            } else {
                alert(data.message);
            }

            setLoading(false);
        }

        const ambilTools = async () => {
            const idValue = param_id();
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-user/skills-tools/?id=${idValue}`, {
                method: 'GET'
            })

            const data = await response.json();
            if (data.success) {
                setDataTools(data.data);
            } else {
                alert(data.message);
            }

            setLoading(false);
        }

        const ambilLinks = async () => {
            const idValue = param_id();
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-user/links/?id=${idValue}`, {
                method: 'GET'
            })

            const data = await response.json();
            if (data.success) {
                setDataLinks(data.data);
            } else {
                alert(data.message);
            }
        }

        ambilDeskripsi();
        ambilTools();
        ambilLinks();
    }, [])

    if (loading) {
        return (
            <div className="bg-[black] w-full min-h-screen flex justify-center items-center">
                <div className="opacity-50">
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[black] w-full min-h-screen flex flex-col items-center">
            <div className="flex justify-center">
                <SkillDeskripsi
                    judul={data.judul}
                    logo={data.logo}
                    deskripsi={data.deskripsi}
                    tools={dataTools ? dataTools : []}
                ></SkillDeskripsi>
            </div>
            <Links
            links={dataLinks ? dataLinks : []}
            id={String(param_id())}>
            </Links>
        </div>
    )
} 