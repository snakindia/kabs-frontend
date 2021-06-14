import React from 'react';
import { connect } from 'react-redux';
import { addTask } from './store/Actions';
import { Form, Input,Select,Card } from 'antd';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
const { Option } = Select;
class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();

    }

    onFinish = (data) => {
        let { user } = this.props;
        const user_id = user && user.id ? user.id : null
        this.props.addTask({...data,created_by:user_id})
    }


    submit = (e) => {
        e.preventDefault();
        if (this.formRef && this.formRef.current) {
            this.formRef.current.submit()
        }
    }
    


    render() {

        let { users, user, loading } = this.props;
        const user_id = user && user.id ? user.id : null
        

        return (

            <div className="page-content fade-in-up pt-4">
                {loading && <Loader />}
                <div className="ibox mb-2">
                <Card>
                        <Link className="btn btn-primary btn-rounded" to="/tasks" ><i className="ti-angle-left mr-3"></i>
                            Back to Tasks
                        </Link>
                    </Card>
                    <div className="ibox-body">
                        <Form
                            ref={this.formRef}
                            name="quoteform"
                            className="form-horizontal" id="login-form"
                            initialValues={{
                                title: "",
                                description: "",
                                created_by: user_id,
                                assigned_to: "",
                            }}
                            onFinish={this.onFinish}
                        >
                            <div className="cart-container pt-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group ">
                                            <Form.Item label="Title" labelCol={{ span: 8 }} name="title" labelAlign="left" colon={false}
                                            hasFeedback
                                            rules={[{
                                                required: true,
                                                message: 'Title is required'
                                            }]}
                                            required
                                            >
                                                <Input placeholder="" />
                                            </Form.Item>
                                        </div>
                                        <div className="form-group ">
                                            <Form.Item label="Description" labelCol={{ span: 8 }} name="description" labelAlign="left" colon={false}
                                            hasFeedback
                                            rules={[{
                                                required: true,
                                                message: 'Description is required'
                                            }]}
                                            required>
                                                <Input.TextArea placeholder=""  />
                                            </Form.Item>

                                        </div>
                                        
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group ">
                                            <Form.Item label="Assign To" labelCol={{ span: 8 }} name="assigned_to" labelAlign="left" colon={false}
                                            hasFeedback
                                            rules={[{
                                                required: true,
                                                message: 'Assign to is required'
                                            }]}
                                            required>
                                                 <Select style={{ width: 250 }} placeholder="Assign To">
                                    {users.map(u => <Option key={u.id} disabled={u.id === user_id} value={u.id}>{u.name}</Option>)}
                                </Select>
                                            </Form.Item>

                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="row mt-4 pb-2">
                                <div className="col-lg-12 text-sm-right">

                                    <a onClick={this.submit}
                                        className="btn btn-success btn-rounded">Submit
                                    </a>
                                </div>
                            </div>
                            </div>
                        </Form>
                    </div>
                </div>
               
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.tasks.loading,
    user: state.auth.user,
    users: state.auth.users
});

const mapDispatchToProps = dispatch => ({
    addTask: (payload) => dispatch(addTask(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTask); 