import { configureStore } from "@reduxjs/toolkit";
import SideMenu from "./Reducers/SideMenuReducer";
export default configureStore({
    reducer : {
        showSidemenu : SideMenu
    }
})