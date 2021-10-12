import React from 'react'
import './ProjectPage.scss'
import { Redirect, useHistory } from 'react-router';
import Navbar from '../header/navbar';
import './ProjectPage.scss'
import { useParams } from 'react-router';
import LineBreak from '../LineBreak/LineBreak';

export default function ProjectPage(props) {

    // if(!!!props.location.state){
    //     return <Redirect to='/'/>;
    // }


    const data = props.data;
    const { id } = useParams();
    const myData = data[id];
    const { projectName, projectDescription, projectImage, projectGithub, projectLink, projectTasks, projectVideo, projectSummary, codeSnippets, color } = myData;
    if (!!!myData) {
        return <Redirect to='/not-found' />
    }
    console.log(color);
    return (
        <div id='project-container'>
            <Navbar />
            <div id='project-contents' style={{backgroundColor:`${color}`}}>
                <div id='news-thing'>
                    {/* 
                        Title
                        Image
                        P1
                        Video/Image
                        P2
                        Video/Image
                        P3
                    */}
                    <h1>{projectName}</h1>
                    <img src={projectImage} alt="image of project" />
                    <LineBreak line={`What is ${projectName}?`} />
                    <p>{projectDescription}</p>
                    <div id='project-video'>
                        {!!projectVideo && <iframe width="480" height="270" src={projectVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id='project-video'></iframe>}
                    </div>
                    <LineBreak line={`Where did I come in?`} />
                    <p>{projectSummary}</p>
                    <LineBreak line={`Things I did!`} />
                    <div id='task-list'>
                        <ul>
                            {projectTasks.map((element, index) => {
                                return <li key={index}>{element}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
