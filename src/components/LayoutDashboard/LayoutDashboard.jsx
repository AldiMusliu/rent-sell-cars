import React from 'react'
import Router from '../../routes/Router'
import Sidebar from '../SideBar/SidBar'
import TopNav from '../TopNav/TopNav'

const LayoutDashboard = () => {
    return <div className="LayoutDashboard">
        <Sidebar/>
        <div className="main_layout">
            <TopNav/>
            <div className="content">
                <Router/>
            </div>
        </div>
    </div>
}

export default LayoutDashboard;