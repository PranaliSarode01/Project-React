import React from 'react';
import {Link} from 'react-router-dom'
import img from '../images/img.jpg';

const ContactDetail = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div className="main">
        <div className="ui card centered">
            <div className="image">
                <img src={img} alt="img"/>
            </div>
            <div className="content">
                <div className="header">{name}</div>
                <div className="description">{email}</div>
            </div>
            <div className="centre-div">
                <Link to="/">
                <button className="ui button blue centre">
                    Back to contact List
                    </button>
                </Link>
            </div>
        </div>
    </div>
  );

};
export default ContactDetail;