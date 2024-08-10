import './App.css';
import Login from './component/Login';
import QuestionsPage from './component/QuestionsPage';
import Register from './component/Register';
import { BrowserRouter, Routes, Route, Router, Navigate } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import Questions from './component/Questions';
import Homepage from './component/Homepage';
import SkillsPage from './component/SkillsPage';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const {userAuthentication,token} = useContext(AuthContext);

  const [isAuthentication , setIsAuthentication] = useState(false)

  useEffect(() => {
    setIsAuthentication(localStorage.getItem('authentication'))
  },[])
  return (
    <>
    {/* <Register /> */}
    {/* <Login /> */}
    {/* <SideNavbar /> */}

    {/* <QuestionsPage /> */}

    <Routes>
        <Route>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          {/* {
            token ?  */}
            <Route path='/dashboard' element={<SkillsPage />}/> 
            {/* :
            <Route path="/dashboard" element={<Navigate to="/" replace />} />
          }  */}

          {
            userAuthentication ? 
            <Route path='/questions/:id' element={<QuestionsPage/>}/> 
           :
            <Route path="/questions/:id" element={<Navigate to="/login" replace />} />
          }
          
          {
            userAuthentication ? 
            <Route path='/result/:skill' element={<Questions/>}/> 
 
            :
            <Route path="/result/:skill" element={<Navigate to="/login" replace />} />
          } 

        </Route>
      </Routes>
    </>
  );
}

export default App;
