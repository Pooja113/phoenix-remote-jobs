import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../images/logo.jpg';
import { auth } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import {IconButton, Avatar} from '@mui/material';


const Header = () => {
  const [{user},] = useStateValue();
  const [hover,setHover] = useState();
  const [hoverClass,setHoverClass] = useState('');
  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    }
  }
  const showUserName= () => {
    let displayName = user?.displayName;
    if(displayName !== null){
      return (
        setHoverClass('user__mail'),
        setHover(`${user?.displayName} ${user?.email}`)
       );
    }
    else{
      return (
        setHoverClass('user__mail'),
        setHover(`${user?.email}`)
       );
    }
  }
  const hideUserName= () => {
    return (
      setHoverClass(""),
      setHover(" ")
     );
  }
  return (
    <React.Fragment>
    <nav id="navbar">
      <div id="logo">
      <Link to='/'>
          <img src={logo} alt="Phoenix logo" /> 
        </Link>
      </div>
      <ul>
        <li className="item">
          <Link to='/'>
            Home 
          </Link>
        </li>
        <li className="item">
          <Link to='/joblist'>
            Job Seekers 
          </Link>
        </li>
        <li className="item">
          <Link to='/jobform'>
            Employers 
          </Link>
        </li>
        <li className="item">
          <Link to='/contactus'>
            Help Center 
          </Link>
        </li>
        </ul>
        <div className="item__login">
          {user &&  (
            <div className='user__profile' onMouseEnter={showUserName} onMouseLeave={hideUserName} >
            <div className={hoverClass}>{hover}</div>
              <IconButton>
              {user.photoURL ? (<Avatar src={user.photoURL} />) : (<Avatar src='https://avatars.dicebear.com/api/adventurer/love.svg' />)}
                  
              </IconButton>
            </div>
          )}
          {user ? 
            (<div className="logout__handle"  onClick={handleAuthentication}>
              <Link to='/'>
               Log Out
            </Link>
            </div>) :
            (<div className=" login__handle"  onClick={handleAuthentication}>
              <Link to='/login'>
                  Log In
              </Link>
              </div>)}
          </div>
    </nav>
    </React.Fragment>
  )
}

export default Header
