'use client'
import dynamic from "next/dynamic"
const MotionSection = dynamic(() => import("@/components/MotionSection"), { ssr: false })
import { Project } from "@/utils/types";
import ProjectCard from '@/app/components/ProjectCard';
import { useMemo, useState } from "react";

type ProjectsProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    projects: Project[],
};

const SORT_OPTIONS = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
    { value: "relevance", label: "Relevance" },
];

const Projects = ({ projects }: ProjectsProps) => {
    const [sort, setSort] = useState<string>("relevance");
    const sortedProjects = useMemo(() => {
        const projectsCopy = [...projects];

        switch (sort) {
            case 'newest':
                return projectsCopy.sort((a, b) => new Date(b.tanggalNum).getTime() - new Date(a.tanggalNum).getTime());
            case 'oldest':
                return projectsCopy.sort((a, b) => new Date(a.tanggalNum).getTime() - new Date(b.tanggalNum).getTime());
            case 'relevance':
            default:
                return projectsCopy.sort((a, b) => b.relevance_rate - a.relevance_rate);
        }
    }, [projects, sort]);

    return (
        <div className="relative max-[900px]:mt-[50px] flex flex-col w-full h-auto mt-[109px] gap-10 justify-center max-[900px]:w-fullz">
            <div
                className="flex justify-center items-center w-full h-[55px]">
                <h1 className="text-[55px] max-[900px]:text-[35px] text-putih font-semibold">
                    My Projects
                </h1>
            </div>

            <div
                className="flex justify-center items-center flex-col w-full">
                <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center mb-8 gap-5 md:gap-0">
                    <div className="text-putih text-sm md:text-base font-medium tracking-wide">
                        Showing <span className="text-tulisanBiru font-semibold">{sortedProjects.length}</span> projects
                    </div>

                    <div className="flex items-center gap-1 bg-tulisanBiru/10 p-1.5 rounded-[32px] backdrop-blur-md shadow-lg">
                        {SORT_OPTIONS.map((o) => {
                            const isActive = sort === o.value;
                            return (
                                <button
                                    key={o.value}
                                    onClick={() => setSort(o.value)}
                                    className={`flex items-center justify-center px-5 py-2 rounded-[32px] text-sm md:text-base font-medium transition-all duration-300 ${isActive
                                        ? "bg-tulisanBiru/20 text-putih shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {isActive && (
                                        <span className="w-1.5 h-1.5 rounded-[32px] bg-putih mr-2 shadow-[0_0_5px_#22d3ee]"></span>
                                    )}
                                    {o.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="w-full flex flex-col gap-12">
                    {sortedProjects.map((isi, index) => (
                        <MotionSection
                            key={index}
                            initX={index % 2 == 0 ? 40 : -40}
                            initY={0}
                            durationAnim={0.5}
                        >
                            <ProjectCard isi={isi} key={index} />
                        </MotionSection>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects