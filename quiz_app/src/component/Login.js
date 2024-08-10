import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import '../assets/homepage.css'

function Login() {

    const { login, setUsername } = useContext(AuthContext);
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }


    const submitHandler = (e) => {
        e.preventDefault();
        console.log(userData);

        axios.post('http://localhost:8083/api/v1/auth/login', userData).then((response) => {
            login(response.data.token);
            console.log(response.data);
            console.log(response.data.user);
            // setUserDetails(response.data.user)
            setUsername(userData.username);
            navigate('/dashboard')

            //         if(response.data !== ""){
            //             navigate('/dashboard')
            //         }else{
            // navigate('/')
            //             toast.warning("User Not Found!");

            //         }
        });

    }


    return (
        <>
            <div className="col-md-12 bg-light p-3">
                <div className='main-section position-relative bg-dark py-3'>
                    {/* <Link className="ms-4 h4" to='/'><i className="fa fa-arrow-left"></i></Link> */}
                    <h1 className="col-md-4 text-center mb-3 bg-light mx-auto" style={{ color: 'rgb(232, 0, 113)', borderRadius: '20px' }}>QUIZ APP</h1>
                    <div className="col-lg-4 col-10 mx-auto border rounded bg-light mb-3">


                        <h4 className="text-center pt-2" style={{ color: 'rgb(232, 0, 113)' }}>Login</h4>

                        <hr />
                        <form className="text-center p-3" onSubmit={submitHandler}>

                            <div class="form-outline col-md-8 mx-auto mb-4">
                                <input type="text" id="form2Example1" class="form-control" placeholder="UserName" name="username" value={userData.username} onChange={changeHandler} />
                                {/* <label class="form-label" for="form2Example1">Email address</label> */}
                            </div>

                            <div class="form-outline col-md-8 mx-auto mb-4">
                                <input type="password" id="form2Example2" class="form-control" placeholder="Password" name="password" value={userData.password} onChange={changeHandler} />
                                {/* <label class="form-label" for="form2Example2">Password</label> */}
                            </div>

                            {/* <Link to='/'> */}
                            <button type="submit" class="btn btn-block my-4 text-white" style={{ background: 'rgb(232, 0, 113)' }}>Login</button>
                            {/* </Link> */}
                            <div class="text-center mb-5">

                                <p>Not a Member? <Link to='/register'>Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;