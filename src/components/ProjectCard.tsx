import { useNavigate } from 'react-router-dom'
import '../scss/project.scss'

const ProjectCard = ({ project, index, onClick }: { project: any, index: number, onClick: () => void }) => {
    if (!project) return null

    return (
        <div className="project-card" onClick={onClick}>
            <span className="num">0{index + 1}</span>
            <p className="awards">{project.awards || ""}</p>
            <h4>{project.title}</h4>
            <p className='label'>{project.label}</p>
            <div className="thumb">
                <img src={project.images?.[0]} alt={project.title} />
            </div>
            <ul className="tags">
                {project.tags.map((tag: string) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
            <button className="view-btn">VIEW MORE →</button>
        </div>
    )
}

const DesignCard = () => {
    const navigate = useNavigate()

    return (
        <div className="project-card design-card" onClick={() => navigate('/design-archive')}>
            <span className="label">DESIGN ARCHIVE +</span>
            <p>감각적인 그래픽과 UI<br />작업물들이 더 궁금하다면</p>
            <button className="view-btn">디자인 페이지로 이동 →</button>
        </div>
    )
}

export { ProjectCard, DesignCard }