import { useRef } from 'react'
import { projectData } from '../src/data/ProjectData'
import { ProjectCard, DesignCard } from '../src/components/ProjectCard'

const Projects = () => {
    const sliderRef = useRef<HTMLDivElement>(null)

    return (
        <section id="projects" className="projects">
            <h2>Projects <span>프로젝트</span></h2>

            <div className="slider-wrap" ref={sliderRef}>
                {projectData.academy.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
                {projectData.company.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={projectData.academy.length + i} />
                ))}
                <DesignCard />
            </div>
        </section>
    )
}

export default Projects