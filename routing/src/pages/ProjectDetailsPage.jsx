import { Navigate, useParams } from "react-router-dom"
import projectsData from "./../projects-data.json"


const ProjectDetailsPage = () => {

    const { project_id } = useParams()

    const foundProject = projectsData.find((elm) => {
        return elm._id === project_id
    })

    if (!foundProject) return <Navigate to="/bye" />

    return (
        <>
            <h1>Aqui van los detalles del proyecto {project_id} </h1>
            <p>El proyecto es de las technologies {foundProject.technologies}</p>
        </>
    )
}

export default ProjectDetailsPage