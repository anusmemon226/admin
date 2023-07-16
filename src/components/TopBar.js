import React, { useState } from 'react'
import "../assets/css/TopBar.css"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import {showSidemenu} from '../store/Reducers/SideMenuReducer'
function TopBar() {
    const show = useSelector((state)=>state.showSidemenu)
    const dispatch = useDispatch()

    const handleMenuBar = ()=>{
        dispatch(showSidemenu(!show))
    }

    window.onresize = ()=>{
        if(window.innerWidth<=767){
            dispatch(showSidemenu(false))
        }else{
            dispatch(showSidemenu(true))
        }
      }
    return (
        <>
            <div className="container-fluid topbar-section">
                <div className="topbar-controller">
                    <div className="topbar-left" onClick={handleMenuBar}>
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
                    <div className="topbar-right">
                        <p>Hi! Anas Memon</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar
