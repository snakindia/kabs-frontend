import React from 'react';
import { Table} from 'antd';
import DateRender from '../Common/DateRender'
import {Link} from 'react-router-dom'
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
function Plotter(props) {
   

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Created By',
            dataIndex: 'created_by',
            key: 'created_by',
           

        },
        {
            title: 'Assigned to',
            dataIndex: 'assigned_to',
            key: 'assigned_to',
           

        },

        {
            title: 'Created At',
            dataIndex: 'create_date',
            key: 'create_date',
            render: date => <DateRender date={date} />

        },
        {
            title: 'Updated At',
            dataIndex: 'update_date',
            key: 'update_date',
            render: date => <DateRender date={date} />

        }, 
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'action',
            render: id => <div>
                <Link to={`/tasks/${id}`} ><EyeOutlined className="site-form-item-icon" /></Link>
                <Link to={`/tasks/edit/${id}`} ><EditOutlined className="site-form-item-icon" /></Link>

                </div>

        },
    ];

    let { data ,loading} = props;
    return (
        <>

            <Table
                loading={loading}
                className="components-table-demo-nested"
                columns={columns}
              
                dataSource={data}
            />
           
           


        </>
    );
}

export default Plotter;