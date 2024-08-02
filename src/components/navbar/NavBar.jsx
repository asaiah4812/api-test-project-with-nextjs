import React from 'react'
import style from './navBar.module.css' 

const links = [
    { label: "Home", url: "/" },
    { label: "User", url: "/users" },
    { label: "Blog", url: "/blog/" },

]

const NavBar = () => {
  return (
    <div className={style.nav}>
        <ul>
            {
                links.map((link, i)=>{
                    return(<li key={i}><a href={link.url}>{link.label}</a></li>)
                })
            }
            
        </ul>
    </div>
  )
}

export default NavBar