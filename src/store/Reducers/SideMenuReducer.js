import { createSlice } from "@reduxjs/toolkit";

export const SideMenu = createSlice({
    name : "sidemenu",
    initialState : false,
    reducers : {
        showSidemenu : (state,action)=>{
            return state = action.payload
        }
    }
})


export const {showSidemenu} = SideMenu.actions
export default SideMenu.reducer