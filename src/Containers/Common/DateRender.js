import React from 'react'
import moment from 'moment'
const DateRender = ({ date,format,...rest }) => {
    format = format ? format :'MMM, DD YYYY, hh:mm A'
    if(date && moment(date).isValid()){
        return moment(date).format(format).toString()
    }
    return ''
};
export default DateRender