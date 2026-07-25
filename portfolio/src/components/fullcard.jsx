import { useState } from 'react'
import './fullcard.css'

function FullCard() {
  return (
    <div className='fullcard'>

        <img src='profile.webp' alt="pixel art of marianne"/>

        <div className='description'>
            <p className='small-text'>01. about me/how i work</p>
            <h1>marianne a.</h1>
            <p className='description'>is a <strong>computer science student & communications</strong> student at the university of ottawa.</p>
            <p className='description'>how she works: she uses user-focused principles to create prototypes in figma or with react.js. when designing, she likes to balance accessibility with visual appeal.</p>
        </div>

    </div>
  )
}

export default FullCard;
