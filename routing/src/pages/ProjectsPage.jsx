import projectsData from "./../projects-data.json"
import { Link } from 'react-router-dom'

function ProjectsPage() {

    return (
        <div>
            <h2>Projects</h2>
            {
                projectsData.map((project) => {
                    return (
                        <div key={project._id} className="project">
                            <h3>{project.name}</h3>
                            <p>{project.technologies}</p>
                            <Link to={`/proyectos/${project._id}`}>Ver detalles</Link>
                            <hr />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ProjectsPage;
