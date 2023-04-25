import React from 'react'
import ProfileNav from './components/ProfileNav'
import './Profile.css'
import ProfilePieChart from './components/ProfilePieChart'
import ProfileBarChart from './components/ProfileBarChart'
import ProfileTable from './components/ProfileTable'
import ProfileApiKey from './components/ProfileApiKey'

const Profile = () => {
  document.getElementById("title").innerText = "Profile";
  if (localStorage.getItem('access_token') !== null){
    return (
      <>
        <main id="profile-main" className='container'>
          <div className='row' id="user-profile-head">
            <div className='col-1'>
              <img className='profile-imgs' src="/src/account_pages/components/assets/Light Fave_black.png" alt="logo-image" />
            </div>
            <div className='col-3' id='profile-pic'>
              <img className='profile-imgs' src="/src/account_pages/components/assets/john.jpeg" alt="profile-image" />
              <p id='profile-name'>Iman Yousefi</p>
            </div>
          </div>
          <div className='row'>
            <ProfileNav />
          </div>
          <div className='row'>
            <h3 className='col- '>Hi, Iman!
              <button className='col- btn btn-primary m-3'>custom btn</button>
            </h3>
          </div>
          <section id="profile-body">
            <div className='row'>
                <div className='col-4 inline-display pie-chart-box'>
                  <ProfilePieChart value={53} label="Searches Used" bg_color="blue"/>
                </div>
                <div className='col-4 inline-display pie-chart-box'>
                  <ProfilePieChart value={47} label="Domain Searches Used" bg_color="rgb(255, 64, 96)"/>
                </div>
                <div className='col-3' id="remain-days-box">
                  <div className='bg bg-success' id="profile-days-left">Days Left</div>
                  <p id="remain-days-num">234/365</p>
                </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <ProfileBarChart />
              </div>
            </div>
            <div className='row'>
              <div className='col-12 m-4' style={{backgroundColor:"white", width:"65vw"}}>
                <ProfileTable title="Latest Searches" />
              </div> 
            </div>
            <div className='row'>
              <div className='col-3 m-3 p-3' id="api-key-box" style={{backgroundColor:"blue", color:"white"}}>
                <ProfileApiKey />
              </div>
              <div className='col-8 m-3' style={{backgroundColor:"white"}}>
                <ProfileTable title="Filters Cheatsheet" />
              </div>
            </div>
          </section>
        </main>
      </>
    )
  }
  return (
    <>
      {window.location.href='/login'}
    </>
  )
}

export default Profile