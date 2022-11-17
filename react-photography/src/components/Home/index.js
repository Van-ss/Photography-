import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/Alex-1.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l','e', 'x']
    const jobArray = ['p','h','o','t','o','g','r','a','p','h','e','r']

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img
                src={LogoTitle}
                alt="JavaScript Developer Name, Web Developer Name"
                />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2> Photographer / Medical Student</h2>
                <Link to="/contact" className='flat-button'> CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type="pacman" />
        </>
    );
}
export default Home