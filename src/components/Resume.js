import React from "react";
import ProjectCard from "./ProjectCard";
import projects from '../projects.json';

const Resume = () => {
    const technicalSkills = ["JavaScript", "HTML5", "CSS3", "C", "React.js", "Node.js",
        "Express.js", "MongoDb", "Python", "PostgreSQL"];

    const introCourses = ["CMSC122 - Introduction to Computer Programming via Web",
        "CMSC131 - Object-Oriented Programming I", "CMSC132 - Object-Oriented Programming II",
        "CMSC216 - Introduction to Computer Systems", "CMSC250 - Discrete Structures"];

    const intermediateCourses = ["CMSC330 - Organization of Computer Languages",
        "CMSC351 - Algorithms", "CMSC389N - Introduction to JavaScript"];

    const advanceCourses = ["CMSC420 - Data Structures", "CMSC411 - Computer Systems Architecture",
        "CMSC424 - Database Design", "CMSC414 - Computer Network and Security",
        "CMSC434 - Introduction to Human-Computer Interaction",
        "CMSC433 - Programming Language Technologies and Paradigms"];

    const makeUnorderedList = (list) => {
        return <ul className='list-group d-flex flex-wrap list-group-horizontal'>
            {list.map(aSkill => {
                return <li key={aSkill} className='list-group-item border rounded border-1 border-dark my-1 mx-2'>{aSkill}</li>
            })}
        </ul>
    }

    const makeProjectCards = (proj) => {
        return proj.map(aProj => <ProjectCard key={aProj.projectName} project={aProj} />)
    }

    return <div className='overflow-auto'>
        <div className='resumeContainer container'>
            <div className='accordion' id='headingOne'>

                {/* Education Section */}
                <div className='accordion-item' id='headingOne'>
                    <h1 className='accordion-header' id='education'>
                        <button className='accordion-button fs-5' type='button' data-bs-toggle='collapse'
                            data-bs-target='#educationAccordion'>Education</button>
                    </h1>
                    <div id='educationAccordion' className='accordion-collapse collapse show' data-bs-parent='resumeAccordion'>
                        <div className='accordion-body'>
                            <strong className='fs-5'>University of Maryland</strong>
                            <span className='float-end'>College Park, MD</span>
                            <br />
                            <span >B.S. in Computer Science</span>
                            <span className='float-end'>Aug. 2016 - Dec. 2020</span>
                        </div>
                    </div>
                </div>

                {/* Technical Skills Section */}
                <div className='accordion-item' id='headingTwo'>
                    <h1 className='accordion-header' id='skills'>
                        <button className='accordion-button fs-5' type='button' data-bs-toggle='collapse'
                            data-bs-target='#skillsAccordion'>Technical Skills</button>
                    </h1>
                    <div id='skillsAccordion' className='accordion-collapse collapse show' data-bs-parent='resumeAccordion'>
                        <div className='accordion-body'>
                            <div className='container'>
                                {makeUnorderedList(technicalSkills)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects Section */}
                <div className='accordion-item' id='headingThree'>
                    <h1 className='accordion-header' id='projects'>
                        <button className='accordion-button fs-5' type='button' data-bs-toggle='collapse'
                            data-bs-target='#projectsAccordion'>Projects</button>
                    </h1>
                    <div id='projectsAccordion' className='accordion-collapse collapse show' data-bs-parent='resumeAccordion'>
                        <div className='accordion-body d-flex flex-wrap justify-content-between'>
                            {makeProjectCards(projects)}
                        </div>
                    </div>
                </div>

                {/* Coursework Section */}
                <div className='accordion-item' id='headingFour'>
                    <h1 className='accordion-header' id='projects'>
                        <button className='accordion-button fs-5 collapsed' type='button' data-bs-toggle='collapse'
                            data-bs-target='#courseAccordion'>Relevant CourseWork</button>
                    </h1>
                    <div id='courseAccordion' className='accordion-collapse collapse' data-bs-parent='resumeAccordion'>
                        <div className='accordion-body'>
                            <h4 className='fs-5 my-1'>Intro Level Courses</h4>
                            {makeUnorderedList(introCourses)}
                            <h4 className='fs-5 my-1'>Intermediate Level Courses</h4>
                            {makeUnorderedList(intermediateCourses)}
                            <h4 className='fs-5 my-1'>Advance Level Courses</h4>
                            {makeUnorderedList(advanceCourses)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Resume;