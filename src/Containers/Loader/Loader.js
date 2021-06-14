import React from 'react'
// import loader from '../../../assets/images/logo.png';
import './Loader.css';
import { Spin } from 'antd';

export default function Loader() {
    return (
        <div className="loader-container">
            <div className="loader">
            <Spin />
            </div>
           
        </div>
    )
}
