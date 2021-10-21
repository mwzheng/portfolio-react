import React from "react";
import allProjects from '../allProjects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
    let projectList = allProjects;

    const createProjectCards = () => {
        return projectList.map(project => {
            return <ProjectCard key={project.projectName} project={project} />
        })
    }

    return <div className='m-3 d-flex flex-wrap justify-content-around'>
        {createProjectCards()}
    </div>
}

export default Projects;