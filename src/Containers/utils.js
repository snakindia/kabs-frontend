import {notification  as antdNotification} from 'antd';
const notification = (type, message) => {
  antdNotification[type]({
    message, top:10,duration:3
    
  });
};


export { notification}; 