import React from 'react';
import { connect } from 'react-redux';
import { doLogin } from './store/Actions';
import './login.css';
import { Form, Input, } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Loader from '../Loader/Loader';
import { Redirect } from 'react-router-dom';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }

    onFinish =(data)=>{
        this.props.doLogin(data)
    }


    render() {
       
        const {loading,authenticated} =this.props;
        if(authenticated){
            return <Redirect to="/" />
        }
        return (
            <>{loading && <Loader />}
            <div className="loginContainer">
                <div className="cover"></div>
                <div className="ibox login-content">
                    <div className="text-center">
                        <span className="auth-head-icon"><i className="la la-user"></i></span>
                    </div>
                    <Form
                        ref={this.formRef}
                        name="normal_login"
                        className="ibox-body" id="login-form"
                        initialValues={{
                            //remember: true,
                        }}
                    onFinish={this.onFinish}
                    > 
                    <h1 className="font-strong text-center mb-5">Kabs</h1>
                    
                        <Form.Item 
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Email is required",
                                },
                            ]}
                        >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} className="mb-3" placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Password is required",
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                className="mb-3"
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        
                        
                        <Form.Item>
                            <div className="text-center mb-4">
                                <div className="text-center mb-4 pr-1">
                                    <button className="btn btn-primary btn-rounded w-100">Login</button>
                                </div>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    loading: state.auth.loading,
    authenticated: state.auth.authenticated,
});

const mapDispatchToProps = dispatch => ({
    doLogin: (payload) => dispatch(doLogin(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
