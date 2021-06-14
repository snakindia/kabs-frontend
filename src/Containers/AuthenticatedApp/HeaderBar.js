import React from 'react';
import { notification } from 'antd';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Popconfirm, } from 'antd';
import {doLogout} from './store/Actions'
const HeaderBar = (props) => {
    const logout = (e) => {
        e.preventDefault();
        props.doLogout()
    }
   
    const { pathname } = props.location;

    const pages = {
        '/': 'Tasks',
        '/task':'Task Detail',
        '/add':'Add Task Detail',
        
    };
   

    const { user} = props;
    const cancel=(e)=> {
    }
      
    return (
        <>
            <div className="page-brand">
                <Link to="/">
                    <span className="brand">Kabs</span>
                    <span className="brand-mini">Kabs</span>
                </Link>
            </div>
            <div className="flexbox flex-1" >
                <ul className="nav navbar-toolbar">
                    <li>
                        <a className="nav-link sidebar-toggler js-sidebar-toggler" >
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </a>
                    </li>
                    <li>

                        <span style={{ fontSize: '1.5rem' }}>
                            {pathname && pages[pathname] ? pages[pathname] : 'Tasks'}
                        </span>
                    </li>
                </ul>

                <ul className="nav navbar-toolbar">
                   
                  
                    <li className="dropdown dropdown-user">
                        <a className="nav-link dropdown-toggle link" data-toggle="dropdown" aria-expanded="false">
                            <span>
                                {user ? <> {user.name ? `${user.name} ` : ''}</> : 'loading..'}
                            </span>
                           
                        </a>

                    </li>
                    <li>
                        <Popconfirm
                            title="Are you sure to lohout"
                            onConfirm={logout}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="Cancel"
                            cancelButtonProps={{
                                className:'btn btn-circle ant-btn-dangerous logoutconfitm',
                                shape:'',
                                size:''
                            }}                           
                            placement="leftBottom"
                            overlayClassName="logout-warning"
                        >
                            <a className="nav-link quick-sidebar-toggler">
                                <i  className="ti-power-off" title="Logout"></i>
                            </a>
                        </Popconfirm>
                    </li>

                </ul>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    loading: state.auth.loading,
    user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
    doLogout:()=>dispatch(doLogout())
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderBar));

