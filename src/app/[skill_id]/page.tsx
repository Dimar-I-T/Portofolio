'use client'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import SkillDeskripsi from "./comps/deskripsi"
import Links from "./comps/links"
import Image from "next/image"

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
    const [dataTools, setDataTools] = useState<DataTools[]>([]);
    const [dataLinks, setDataLinks] = useState<DataLinks[]>([]);

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
        const idValue = param_id();
        if (!idValue) {
            alert("Invalid skill_id param");
            setLoading(false);
            return;
        }

        const fetchAllData = async () => {
            try {
                const [descRes, toolsRes, linksRes] = await Promise.all([
                    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-user/skills/?id=${idValue}`),
                    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-user/skills-tools/?id=${idValue}`),
                    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-user/links/?id=${idValue}`)
                ]);

                const descData = await descRes.json();
                const toolsData = await toolsRes.json();
                const linksData = await linksRes.json();

                if (descData.success) setData(descData.data);
                else alert(descData.message);

                if (toolsData.success) setDataTools(toolsData.data);
                else alert(toolsData.message);

                if (linksData.success) setDataLinks(linksData.data);
                else alert(linksData.message);
            } catch {
                alert("Failed to fetch data");
            } finally {
                setLoading(false);
            }
        }

        fetchAllData();
    }, [params]);

    if (loading) {
        return (
            <div className="bg-[black] w-full min-h-screen flex justify-center items-center">
                <Image
                    src="/sLogo.png"
                    alt="sLogo"
                    width={64}
                    height={64}
                    className="rounded-full object-cover animate-spin"
                />
            </div>
        );
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
        </div>
    )
} 