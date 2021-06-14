import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Tasks from '../Tasks/Tasks'
import Task from '../Tasks/Task'
import AddTask from '../Tasks/AddTask'
import HeaderBar from './HeaderBar'
import SideBar from './SideBar';
import './antdIntegration.css'

import { connect } from 'react-redux';
import { getUsers } from './store/Actions';
import UpdateTask from '../Tasks/UpdateTask';

const { Header, Content, Sider } = Layout;
class AuthenticateApp extends React.Component {

  componentDidMount(){
    this.props.getUsers()
  }

  render() {
    const { authenticated, location, logout } = this.props;
    const publicPath = ['/login', '/logout',]


    if (!authenticated) {
      return <Redirect to="/login" />
    }
    if (location && location.pathname && publicPath.includes(location.pathname)) {
      return <Redirect to="/" />
    }
    if (authenticated) {
      return (
        <div className="page-wrapper">
          <Layout>
            <Header style={{ position: 'fixed', zIndex: 1002, width: '100%' }} className="header">

              <HeaderBar logout={logout} />

            </Header>
            <Layout>

              <Sider width={230} style={{ minHeight: '100vh' }}>
                <SideBar location={this.props.pathname} />
              </Sider>


              <Content style={{marginTop:50}}>
                <div className="site-layout-background" >
                  <div className="content-wrapper" >
                    <Switch>

                      <Route path="/tasks/edit/:id" component={UpdateTask} />
                      <Route path="/tasks/:id" component={Task} />
                      <Route path="/task/add" component={AddTask} />
                      <Route path="/tasks" component={Tasks} />
                      <Route path="/" component={Tasks} />
                    </Switch>
                  </div>
                </div>
              </Content>
            </Layout>
          </Layout>
        </div>
      )
    }
  }
}
const mapStateToProps = ({ auth }) => ({
  authenticated: auth.authenticated,
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticateApp); 
