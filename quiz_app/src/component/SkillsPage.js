import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/homepage.css'
import Navbar from './Navbar'
import SkillsCard from './SkillsCard'

function SkillsPage() {
  return (
    <div className='col-md-12 p-4'>
    <div className='main-section position-relative bg-dark'>
    <Navbar />   

        <div className='container mt-5'>
            <div className='row justify-content-center'>
            <SkillsCard />
            </div>
        </div>

    </div>

</div>
  )
}

export default SkillsPage