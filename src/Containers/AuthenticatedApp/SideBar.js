import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { SnippetsOutlined,DiffOutlined } from '@ant-design/icons';
const SideBar = () => {
    
    return (
        <nav className="page-sidebar" id="sidebar">
            <div id="sidebar-collapse" >
                <ul className="side-menu metismenu">
                  
                    <li className="">
                        <Link to="/"><SnippetsOutlined  style={{fontSize:25, marginRight:10}}/>
                            <span className="nav-label">Tasks</span></Link>
                    </li>
                    <li className="">
                        <Link to="/task/add"><DiffOutlined   style={{fontSize:25, marginRight:10}}/>
                            <span className="nav-label">Add Task</span></Link>
                    </li>
                   
                   
                </ul>
               
            </div>
        </nav>
    )
}


export default withRouter(SideBar);