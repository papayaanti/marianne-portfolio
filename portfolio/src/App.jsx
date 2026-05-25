import { useState } from 'react'
import './App.css'
import projects from './projects.json'
import SquareCard from './components/squarecard.jsx'
import FullCard from './components/fullcard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="about">
        {<FullCard/>}
      </section>
      <section id='projects'>
        {
          projects.map(
            (project) => (<SquareCard key={project.id} project={project} />)
          )
        }
      </section>
    </>
  )
}

export default App
