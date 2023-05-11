import './index.scss';
import { useState,useEffect } from 'react';
import AnimatedLetter from '../AnimatedLetters';
import angular from '../../assets/images/angular.png';
import javascript from '../../assets/images/javascript.png';
import typescript from '../../assets/images/typescript.png';
import Loader from 'react-loaders';
import react from '../../assets/images/react.png';

import css from '../../assets/images/css.png';
import rxjs from '../../assets/images/rxjs.png';
const Tip = () => {
    const [letterClass , setLetterClass] = useState("text-animate");
    
    const myFunction = () => {
        setTimeout(() => {
           setLetterClass('text-animate-hover')
       },3000)
    }
   useEffect(() => myFunction(),[])
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetter letterClass={letterClass} strArray={['F','r','o','n','t','e','n','d' , ' ' ,'T','i','p','s']}
                        idx={15} />
                    </h1>
                    <p className='tips-logo-cont'>
                        <a rel='tips-logo' href='tips/javascript/javascript.html' >
                            <img rel='tips-logo' src={javascript} alt='javascript' />
                        </a>
                        <a rel='tips-logo' href='tips/typescript/typescript.html'>
                            <img rel='tips-logo' src={typescript} alt='typescript' />
                        </a>
                        <a rel='tips-logo' href='tips/angular/angular.html'>
                            <img rel='tips-logo'  src={angular} alt='angular'/>
                        </a>
                        <a rel='tips-logo' href='tips/react/react.html'>
                            <img rel='tips-logo'  src={react} alt='react'/>
                        </a>
                        <a rel='tips-logo' href='tips/css/css.html'>
                            <img rel='tips-logo'  src={css} alt='css'/>
                        </a>
                        <a rel='tips-logo' href='tips/rxjs/rxjs.html'>
                            <img rel='tips-logo'  src={rxjs} alt='rxjs'/>
                        </a>
                    </p>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Tip;