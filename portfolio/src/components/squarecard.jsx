import { useState } from 'react'
import './squarecard.css'

function SquareCard({ project }) {
    {/*function specifically for the languages buttons*/}
    function returnLanguages(){
        var languages = [];
        for (var i = 0; i < project.languages.length; i++){
            var current = project.languages[i];
            languages.push(<span key={i} className='language-tag'>{current}</span>);
        }
        return languages;
    }

  return (
    <div className='squarecard'>

        <div className='squarecard-img'>
            <img src={project.image} alt={project.title}/>
            <button name="open-project" id="project-link" onClick={() => window.location.href = project.link}>
                <svg fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 385.756 385.756" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M377.816,7.492C372.504,2.148,366.088,0,358.608,0H98.544c-15.44,0-29.08,10.988-29.08,26.428v23.724 c0,15.44,13.64,29.848,29.08,29.848h152.924L8.464,322.08c-5.268,5.272-8.172,11.84-8.176,19.34c0,7.5,2.908,14.296,8.176,19.568 L25.24,377.64c5.264,5.272,12.296,8.116,19.796,8.116s13.768-2.928,19.036-8.2l241.392-242.172v151.124 c0,15.444,14.084,29.492,29.52,29.492h23.732c15.432,0,26.752-14.048,26.752-29.492V26.52 C385.464,19.048,383.144,12.788,377.816,7.492z"></path> </g> </g> </g></svg>
                <p className='visually-hidden'>open project in new tab</p>
            </button>
        </div>

        {/*description*/}

        <div className='squarecard-description'>
            <p className='small-text'>02. projects</p>
            <h2>{project.title}</h2>

            <div className='languages'>
                {/*use for loop to load everythiign in*/}
                {returnLanguages()}
            </div>

            <p className='project-description'>{project.description}</p>
        </div>

    </div>
  )
}

export default SquareCard;
