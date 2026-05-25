import { useState } from 'react'
import './fullcard.css'

function FullCard() {
  return (
    <div className='fullcard'>

        <img src='profile.webp' alt="pixel art of marianne"/>

        <div className='description'>
            <p className='small-text'>01. about me</p>
            <h1>marianne a.</h1>
            <p className='description'>is a <strong>computer science student & communications</strong> student at the university of ottawa.</p>
            <p className='description'>she uses her creativity and knowledge of user-focused principles to create approachable and efficient designs.</p>
        </div>

    </div>
  )
}

export default FullCard;
