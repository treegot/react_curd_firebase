import React, { useState ,useEffect} from 'react'
import "./Header.css";
import { Link,useLocation } from 'react-router-dom'

const Header = () => {
  const[activeTab,setactiveTAb]=useState("Home");
  const location = useLocation();
  useEffect(()=>{
    if(location.pathname==="/")
    {
      setactiveTAb("Home");
    }
    else if (location.pathname==="/add")
    {
      setactiveTAb("AddContact")
     }
     else if (location.pathname==="/about") {
      setactiveTAb("About")
     }
  },[location]);
  return (
    <div className='header'>
    <p className='logo'>  Contact App</p>
    <div className='header-right'>
    <Link to={'/'}>
      <p className={`${activeTab==="Home" ? "active" : ""}`}
      onClick={()=>setactiveTAb("Home")}>
        Home
      </p>
    </Link>

    <Link to={'/add'}>
      <p className={`${activeTab==="AddContact" ? "active" : ""}`}
      onClick={()=>setactiveTAb("AddContact")}>
        AddContact
      </p>
    </Link>
    <Link to={'/about'}>
      <p className={`${activeTab==="About" ? "active" : ""}`}
      onClick={()=>setactiveTAb("About")}>
        About
      </p>
    </Link>


    </div>
    </div>
  )
}

export default Header