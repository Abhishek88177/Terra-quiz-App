import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/homepage.css'
import AuthContext from '../context/AuthContext'

function Navbar() {

    const { userAuthentication,setuserAuthentication } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem('authentication', false);
        setuserAuthentication(false)
        navigate('/')

    }

    return (
        <div className='navbar px-5'>

              <div className='logo'>
                <Link to='/' className=''>
                Logo
                </Link>
                </div>

            {
                userAuthentication ?

                    <div className='buttons'>
                            <button className='btn btn-light mx-3' onClick={logout}>Logout</button>
                    </div>
                    :
                    <div className='buttons'>
                        <Link to="/login">
                            <button className='btn btn-light mx-3'>Login</button>
                        </Link>

                        <Link to="/register">
                            <button className='btn btn-light'>Register</button>
                        </Link>
                    </div>
            }


        </div>

    )
}

export default Navbar