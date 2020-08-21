import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation(){
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}
//pathname : url, state: 우리가 route props에 보내줄 데이터. 
export default Navigation;