'use server'
import SkillClient from "./comps/skill_client"
import Image from "next/image"
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

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

interface SkillProps {
    params: Promise<{ skill_id: string }>
}

export default async function Skill({ params }: SkillProps) {
    const paramsBenar = await params;
    const skillId = paramsBenar.skill_id;
    let loading = true;
    let dataTools: DataTools[] = [];
    let dataLinks: DataLinks[] = [];
    let data: Data = {
        s_id: "",
        judul: "",
        logo: "",
        deskripsi: ""
    };

    const id: ID = {
        'competitive-programming': 1,
        'web-development': 2,
        'game-development': 3,
        'mathematics': 4
    }

    const param_id = () => {
        if (typeof skillId === 'string' && skillId in id) {
            return id[skillId as keyof ID];
        }
    }

    const idValue = param_id();

    try {
        const [descRes, toolsRes, linksRes] = await Promise.all([
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-user/skills?id=${idValue}`),
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-user/skills-tools?id=${idValue}`),
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-user/links?id=${idValue}`)
        ]);

        const descData = await descRes.json();
        const toolsData = await toolsRes.json();
        const linksData = await linksRes.json();

        if (descData.success) data = { ...descData.data };
        else console.log(descData.message);

        if (toolsData.success) dataTools = [...toolsData.data];
        else console.log(toolsData.message);

        if (linksData.success) dataLinks = [...linksData.data];
        else console.log(linksData.message);
    } catch {
        console.log("Failed to fetch data");
    } finally {
        loading = false;
    }

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
        <SkillClient
            skill_id={skillId}
            data={data}
            dataTools={dataTools}
            dataLinks={dataLinks}
        />
    )
}

export async function generateStaticParams() {
    const text = 'select judul from main_skills';
    const result = await pool.query(text);
    const data: { judul: string }[] = result.rows;
    for (let x = 0; x < data.length; x++) {
        data[x].judul = data[x].judul.trim().replace(' ', '-').toLowerCase();
    }

    const skills: { skill_id: string }[] = [];
    for (let x = 0; x < data.length; x++) {
        skills.push({
            skill_id: data[x].judul
        });
    }

    return skills;
}

