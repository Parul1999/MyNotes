
import React from 'react'
import '../../commonstyles/Globalstyles.css'
import './style.css'
import notes from '../../assets/img/note.png'
import { Link, NavLink } from 'react-router-dom'
import Authentication from '../../auth/authentication'
const Homepage = (props) => {
    return (

        <div className='content-flexspace flex-wrap  container-wrap' >

            <div>
                <img src={notes} alt="notes" className='dashboard-img'/>
            </div>

            <div className='text-container'>
                <h1 className='heading'>
                <span className='color-lightblue'>My</span>Notes
                </h1>
                <p className='sub-heading'>
                    Manage your daily tasks and workflows in a modern way and boost your efficiency without any efforts.
                </p>

                <div className='flex-col margin-top'>
                    <NavLink to='/auth' >
                <button className='button'>
              Start making notes
                </button>
                </NavLink>
                </div>
            </div>


        </div>
    

    )
}

export default Homepage