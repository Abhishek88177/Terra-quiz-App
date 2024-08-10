import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../assets/homepage.css'

function Register() {

    const navigate = useNavigate();

  const [registration , setRegistration] = useState({
    name : "",
    username : "",
    email : "",
    mobileNo : "",
    password : "",
    address : ""
  }) 

  const {name,username,email,mobileNo,password,address} = registration;

  const handleOnChange=(e)=>{
      setRegistration({
        ...registration , [e.target.name] : e.target.value
      });
  }

  const customConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    console.log(registration)
    axios.post("http://localhost:8083/api/v1/auth/register",registration,customConfig).then(function(response){
      console.log(response.data);
      navigate('/login')
    },(error)=>{
      console.log("Error Occured")
  })
  }

  return (
    <>
      <div className="col-md-12 p-3"
    //  style={{backgroundImage: "url('https://t4.ftcdn.net/jpg/05/36/23/57/360_F_536235793_wlduO29kZpQNvC0P4qaoe3oRzAalZ0LI.jpg')",backgroundSize : 'cover'}}
    >
    <div className='main-section position-relative bg-dark py-3'>

      {/* <Link className="ms-4 h4" to='/'><i className="fa fa-arrow-left"></i></Link> */}
        <div className="col-lg-4 col-10 mx-auto border rounded register-box bg-light">
      
          <h4 className="text-center pt-2" style={{ color: 'rgb(232, 0, 113)' }}>Register</h4>

          <hr />
          <form className="text-center p-3" onSubmit={submitHandler}>

          <div class="form-outline col-md-8 mx-auto mb-4">
              <input type="text" id="form2Example2" class="form-control" placeholder="Name" name="name" value={registration.name} onChange={handleOnChange}/>
              {/* <label class="form-label" for="form2Example2">Password</label> */}
            </div>


            <div class="form-outline col-md-8 mx-auto mb-4">
              <input type="text" id="form2Example2" class="form-control" placeholder="UserName" name="username" value={registration.username} onChange={handleOnChange}/>
              {/* <label class="form-label" for="form2Example2">Password</label> */}
            </div>



            <div class="form-outline col-md-8 mx-auto mb-4">
              <input type="email" id="form2Example1" class="form-control" placeholder="Email" name="email" value={registration.email} onChange={handleOnChange}/>
              {/* <label class="form-label" for="form2Example1">Email address</label> */}
            </div>

            <div class="form-outline col-md-8 mx-auto mb-4">
              <input type="mobileNo" id="form2Example1" class="form-control" placeholder="Mobile Number" name="mobileNo" value={registration.mobileNo} onChange={handleOnChange}/>
              {/* <label class="form-label" for="form2Example1">Email address</label> */}
            </div>

            <div class="form-outline col-md-8 mx-auto mb-4">
              <input type="password" id="form2Example2" class="form-control" placeholder="Password" name="password" value={registration.password} onChange={handleOnChange}/>
              {/* <label class="form-label" for="form2Example2">Password</label> */}
            </div>

            <div class="form-outline col-md-8 mx-auto mb-4">
              <input type="text" id="form2Example2" class="form-control" placeholder="Address" name="address" value={registration.address} onChange={handleOnChange}/>
              {/* <label class="form-label" for="form2Example2">Password</label> */}
            </div>



            {/* <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div> */}


            <button type="submit" class="btn btn-block text-white" style={{ background: 'rgb(232, 0, 113)' }}>Register</button>

            <div class="text-center mb-2">
              <p>Already Member? <Link to='/login'>Login</Link></p>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default Register;