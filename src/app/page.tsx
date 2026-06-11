import { getProjects } from '@/services/projectService';
import Deskripsi from './homepage/deskripsi/page'
import Skills from './homepage/skills/page'
import Projects from './homepage/projects/Projects';
import { Project } from '@/utils/types';

export default async function Home() {
  let projects: Project[] = []
  try {
    projects = await getProjects();
  } catch (error: any) {
    console.error('Cannot fetch ' + error);
  }

  return (
    <div className="w-full bg-[black] h-auto flex justify-center">
      <div className="max-[1300px]:w-full items-center flex flex-col gap-2 w-[1300px] h-auto px-3 z-50">
        <Deskripsi />
        <Skills />
        <div id="projects-section">
          <Projects projects={projects} />
        </div>
      </div>
    </div>
  );
}
