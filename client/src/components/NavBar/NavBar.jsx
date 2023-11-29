import React, { useState } from 'react'
import style from "./NavBar.module.css"
import {Link} from "react-router-dom"
const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav className={style.containerNav}>
        <label for="check">
        <img onClick={()=>setOpenMenu(!openMenu)} src="https://cdn.discordapp.com/attachments/781222020770693152/1163340795387052072/image.png?ex=653f388b&is=652cc38b&hm=74b20567a50829083df339104ae5d8d1b93b416c6906f00f6b3fbd26b8b979b5&" className={style.checkbtn}/>
        </label>
      <a className={style.link}>
        <img src={"img"} alt="logo-img" className={style.logo}/>
        <label className={style.title}>Videogames</label>
      </a>
      <ul className={style.navIcons}>
        <li onClick={()=>setOpenMenu(false)} className={style.listItem}><Link to="/chechecrack"><label className={style.navLabel}>Home</label></Link></li>
        <li onClick={()=>setOpenMenu(false)} className={style.listItem}><Link to="/home"><label className={style.navLabel}>Home</label></Link></li>
        <li onClick={()=>setOpenMenu(false)} className={style.listItem}><Link to="/form"><label className={style.navLabel}>Create</label></Link></li>
        <li onClick={()=>setOpenMenu(false)} className={style.listItem}><Link to="/favs"><label className={style.navLabel}>Favorites</label></Link></li>
        <li className={style.user}>
          <p>user.userName</p>
          <img src={"pic"} alt="prof-pic" onError={()=>noPicture()} onClick={()=>newProfilePicuture()}/>
        </li>
        <li ><Link className={style.navLink} to="/login"><img className={style.icon} alt="home-icon" src="https://cdn.discordapp.com/attachments/781222020770693152/1138335731643850863/image.png"></img></Link></li>
      </ul>
      <ul className={ openMenu ? style.open : style.menu}>
        <li onClick={()=>setOpenMenu(false)} className={style.listItem}><Link to="/home">Home</Link></li>
        <li onClick={()=>setOpenMenu(false)} className={style.listItem}><Link to="/form">Create</Link></li>
        <li onClick={()=>setOpenMenu(false)} className={style.listItem}><Link to="/favs">Favorites</Link></li>
        <li  className={style.listItem}><Link to="/login">Log Out</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
