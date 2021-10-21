import React from "react";

const ProjectCard = ({ project }) => {
    const { imgPath, projectName, projectDescription, technologies, link } = project;

    let buttonText = 'GitHub Repo';
    let buttonColor = 'btn-primary';
    let isDisabled = '';

    if (link === '') {
        buttonText = 'Repo Not Available';
        buttonColor = 'btn-danger';
        isDisabled = 'disabled';
    }

    const technologiesUsed = () => {
        return technologies.join(', ');
    }

    return <div className='card m-5' style={{ width: `${20}em` }}>
        <img className='card-img-top img-thumbnail' src={process.env.PUBLIC_URL + imgPath} alt={projectName} />
        <div className='card-body'>
            <h5 className='card-title border border-dark border-2 p-1 text-center'><b>{projectName}</b></h5>
            <p className='card-text border border-2 p-1'>
                &emsp;&ensp;{projectDescription}<br /><br />
                <small>
                    <span className=''>Technologies:</span>
                    <br />
                    {technologiesUsed()}
                </small>
            </p>
            <a href={link} target='_blank' rel='noreferrer' className={'btn mx-auto d-block ' + buttonColor + ' ' + isDisabled}>{buttonText}</a>
        </div>
    </div>
}

export default ProjectCard;