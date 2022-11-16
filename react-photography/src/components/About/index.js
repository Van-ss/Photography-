import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'


const About = () => {
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    strArray={['A','b','o','u','t',' ','m','e']}
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

        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About