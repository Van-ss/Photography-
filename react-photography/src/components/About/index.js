import './index.scss'
import Loader from 'react-loaders'
import {useState } from 'react'
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import AnimatedLetters from '../AnimatedLetters'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                     letterClass={letterClass}
                    strArray={['M','y',' ','p','h','o','t','o','s']}
                    idx={15}
                    />
                </h1>
                <p>
                    HI
                </p>
                <p>
                    HI
                </p>
                <p>
                    HI
                </p>
            </div>
            <Gallery photos={photos} margin={0} />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About