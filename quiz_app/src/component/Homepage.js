import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/homepage.css'
import VideoBack from '../assets/images/mixkit-exploding-ink-underwater-105-medium.mp4'
import axios from 'axios';


function Homepage() {

    useEffect(() => {
        textapi();

    }, [])
    const options = {
        method: 'POST',
        url: 'https://chat-gpt26.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '705187f821msha236ffeb69497a4p17624djsnd06f5ffb3546',
            'X-RapidAPI-Host': 'chat-gpt26.p.rapidapi.com'
        },
        data: {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: '10 objective type questions of java'
                }
            ]
        }
    };


    const textapi = async () => {
        try {
            const response = await axios.request(options);
            console.log(response.data.choices[0].message.content);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='col-md-12 p-4'>
            <div className='main-section position-relative'>
                <video autoPlay muted loop id="video-background" className="position-absolute top-0 left-0 w-100">
                    <source src={VideoBack} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className='navbar px-5'>
                    <div className='logo'>Logo</div>

                {/* <ul className='list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul> */}

                    <div className='buttons'>
                        <Link to="/login">
                            <button className='btn btn-light mx-3'>Login</button>
                        </Link>

                        <Link to="/register">
                            <button className='btn btn-light'>Register</button>
                        </Link>
                    </div>
                </div>

                <div className='text-section'>
                    <div className='text'>Terra Quiz App</div>
                    <p className='text-desc'>Explore, Learn, Conquer! Dive into geography,<br /> nature, and global cultures. Test your wits, unlock achievements, and unearth the wonders <br /> of our planet!</p>
                    <Link to="/dashboard">

                        <button className='btn btn-light getstart px-5'>Get Start</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Homepage