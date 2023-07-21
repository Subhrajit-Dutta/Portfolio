import { useEffect, useState } from 'react'
import {
  faDocker,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I'm an incredibly ambitious and passionate Full-Stack developer, seeking an opportunity to join an established IT company that fosters innovation and allows me to work with cutting-edge technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
          My confidence and curiosity drive me to continuously improve my skills, tackling design problems head-on and embracing each challenge as an opportunity for growth.
          </p>
          <p>
          With an unwavering passion for technology and a commitment to excellence, I'm eager to collaborate with like-minded professionals to create impactful solutions and drive innovation in the IT landscape.<br></br>
          <br></br>
          Let's connect and explore the possibilities of working together on exciting ventures that push boundaries and make a difference!
          </p>
          
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faDocker} color="#099cec" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
