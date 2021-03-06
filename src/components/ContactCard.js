import React from 'react'
import user from "../images/user.png";
import { Link } from 'react-router-dom'

const ContactCard = (props) => {
    const { id, name, email,img_url } = props.contact;

    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <Link to={{ pathname: `/contact/${id}`}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                    <div>{img_url}</div>
                </Link>
            </div>
            <i
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px" }}
                onClick={() => props.clickHander(id)}
            ></i>
        </div>
    )
}

export default ContactCard