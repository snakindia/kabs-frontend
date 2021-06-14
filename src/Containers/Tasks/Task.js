import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getTaskDetail } from './store/Actions';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Loader from '../Loader/Loader'
const { TextArea } = Input;
class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }


    componentDidMount() {
        const { match } = this.props;
        const { params: { id } } = match;
        if (id) {
            this.setState({ id });
            this.props.getTaskDetail(id)
        }

    }

    componentDidUpdate(prevProps) {
        const { match } = this.props;
        const { params: { id } } = match;
        if (id !== prevProps.match.params.id) {
            if (id) {
                this.setState({ id });
                this.props.getTaskDetail(id)
            }
        }
    }

    render() {

        let { loading, user, data } = this.props;
        const { id } = this.state;
        const disabled = id ? true : false;


        return (
            <>{loading ? <Loader /> :

                <div className="page-content fade-in-up pt-4">
                    <Card>
                        <Link className="btn btn-primary btn-rounded" to="/tasks" ><i className="ti-angle-left mr-3"></i>
                            Back to Tasks
                        </Link>
                    </Card>
                    {
                        data &&
                        <div className="ibox mb-2">
                            <div className="ibox-body">
                                <Form
                                    name="quoteform"
                                    className="form-horizontal" id="login-form"
                                    initialValues={{
                                        id: data && data.id ? data.id : "",
                                        create_date: data && data.create_date ? moment(data.create_date).format('DD/MM/YYYY hh:mm:ss A').toString() : "",
                                        update_date: data && data.update_date ? moment(data.update_date).format('DD/MM/YYYY hh:mm:ss A').toString() : '',
                                        title: data && data.title ? data.title : "",
                                        description: data && data.description ? data.description : "",
                                        status: data && data.status ? data.status : "",
                                        assigned_to: data && data.assigned_to ? data.assigned_to : "",
                                        created_by: data && data.created_by ? data.created_by : "",
                                    }}

                                >

                                    <div className="cart-container pt-4">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group ">
                                                    <Form.Item label="Title" labelCol={{ span: 8 }} name="title" labelAlign="left" colon={false}>
                                                        <Input placeholder="" disabled={true} />
                                                    </Form.Item>
                                                </div>
                                                <div className="form-group ">
                                                    <Form.Item label="Created Date" labelCol={{ span: 8 }} name="create_date" labelAlign="left" colon={false}>
                                                        <Input placeholder="" disabled={true} />
                                                    </Form.Item>

                                                </div>
                                                <div className="form-group">
                                                    <Form.Item label="Updated Date" labelCol={{ span: 8 }} name="update_date" labelAlign="left" colon={false} >
                                                        <Input placeholder="" disabled={true} />
                                                    </Form.Item>

                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group ">
                                                    <Form.Item label="Status" labelCol={{ span: 8 }} name="status" labelAlign="left" colon={false}  >
                                                        <Input placeholder="" disabled={true} />
                                                    </Form.Item>

                                                </div>
                                                <div className="form-group ">
                                                    <Form.Item label="Created By" labelCol={{ span: 8 }} name="created_by" labelAlign="left" colon={false}>
                                                        <Input placeholder="" disabled={true} />
                                                    </Form.Item>

                                                </div>
                                                <div className="form-group ">
                                                    <Form.Item label="Assigned To" labelCol={{ span: 8 }} name="assigned_to" labelAlign="left" colon={false}>
                                                        <Input placeholder="" type="" disabled={true} />
                                                    </Form.Item>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">

                                                <div className="form-group ">
                                                    <Form.Item label="Description" labelCol={{ span: 8 }} name="description" labelAlign="left" colon={false} >
                                                        <TextArea placeholder="Address" autoSize={{ minRows: 2, maxRows: 16 }} disabled={disabled} />
                                                    </Form.Item>

                                                </div>
                                            </div>
                                            <div className="col-md-6">

                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-lg-12 text-sm-right">
                                                <Link to={`/tasks/edit/${data ? data.id : ''}`} >
                                                    <Button type="primary" shape="round" icon={<EditOutlined />} size="small">
                                                        Edit
                                                    </Button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    }

                </div>
            }
            </>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.tasks.qLoading,
    data: state.tasks.task,
    user: state
});

const mapDispatchToProps = dispatch => ({
    getTaskDetail: (id) => dispatch(getTaskDetail(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Task);