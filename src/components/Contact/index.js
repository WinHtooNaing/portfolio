import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetter from '../AnimatedLetters'
import { useState,useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
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
                        <AnimatedLetter letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ' , 'm' ,'e']}
                        idx={15} />
                    </h1>
                    <p>
                        I am interested in freelance opportunites - especially ambitious or 
                        large projects. However, if you have other request or question, 
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form >
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li >
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Win Htoo Naing,
                    <br/>
                    near highway 115 miles,
                    <br/>
                    Dyne Tayar village , Pyu Township,<br/>
                    Bago Region, Myanmar <br/>
                    <span>winhtoonaing2003@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[18.512091, 96.399780]} zoom={13}>
                        <TileLayer url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={[18.512091, 96.399780]}>
                            <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;