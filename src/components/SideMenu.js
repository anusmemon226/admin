import React from 'react'
import "../assets/css/SideMenu.css"
import { faClose,faDashboard,faShop, faUser,faClipboardQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch,useSelector } from 'react-redux'
import { showSidemenu } from '../store/Reducers/SideMenuReducer'
import logo from "../assets/images/web-logo.png"
import { Link, useLocation } from 'react-router-dom'
function SideMenu() {
  const sidemenu = useSelector((state)=>state.showSidemenu)
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const handleClose = ()=>{
    dispatch(showSidemenu(false))
  }
  const closeMenu = ()=>{
    dispatch(showSidemenu(false))
  }
  return (
    <>
      <div className="sidemenu">
        <div className="close-btn">
          <FontAwesomeIcon icon={faClose} onClick={handleClose}/>
        </div>
        <div className="sidemenu-content">
          <div className="sidebar-logo">
            <img src={logo} alt="web-logo" />
          </div>
          <div className="sidebar-links">
              <div className={`link ${pathname==="/admin/"?"active":""}`} onClick={closeMenu}>
                <FontAwesomeIcon icon={faDashboard}/>
                <Link to={"/admin/"}>DashBoard</Link>
              </div>
              <div className={`link ${pathname==="/admin/products"?"active":""}`} onClick={closeMenu}>
                <FontAwesomeIcon icon={faShop}/>
                <Link to={"/admin/products"}>Products</Link>
              </div>
              <div className={`link ${pathname==="/admin/orders"?"active":""}`} onClick={closeMenu}>
                <FontAwesomeIcon icon={faShop}/>
                <Link to={"/admin/orders"}>Orders</Link>
              </div>
              <div className={`link ${pathname==="/admin/queries"?"active":""}`} onClick={closeMenu}>
                <FontAwesomeIcon icon={faClipboardQuestion}/>
                <Link to={"/admin/queries"}>Queries</Link>
              </div>
              <div className={`link ${pathname==="/admin/users"?"active":""}`} onClick={closeMenu}>
                <FontAwesomeIcon icon={faUser}/>
                <Link to={"/admin/users"}>User</Link>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideMenu
