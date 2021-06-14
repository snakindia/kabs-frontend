import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AuthenticatedApp from './Containers/AuthenticatedApp/AuthenticatedApp';
import Login from './Containers/Login/Login';
import { setAuth, setUser } from './Containers/AuthenticatedApp/store/Actions';
import './assets/css/antd.css';

const App = ({ authenticated, setAuth, setUser }) => {
  useEffect(() => {
    try {
      let hasUser = localStorage.getItem('kabsAuth')
      hasUser = hasUser ? JSON.parse(hasUser) : null;
      if (hasUser) {
        setAuth(true)
        setUser(hasUser)
      }
    } catch (e) {

    }
  }, [])
  return (
    <>
      {
        authenticated ? <AuthenticatedApp /> : <Login />
      }

    </>
  )
}
const mapStateToProps = ({ auth }) => ({
  authenticated: auth.authenticated,
});

const mapDispatchToProps = dispatch => ({
  setUser: (payload) => dispatch(setUser(payload)),
  setAuth: (payload) => dispatch(setAuth(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
