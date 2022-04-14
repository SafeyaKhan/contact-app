import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const ContactDetails = (props) => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    const LOCAL_STORAGE_KEY = "contacts";

    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveContacts){
            const contact = retriveContacts.find(contact => contact.id === id);
            setUser(contact);
        }
    }, [id])

    // const randomNum = () => Math.floor(Math.random() * 99) + 1;

    return (
        <div className='main' style={{marginTop: '60px'}}>
            <div className='ui card centered'>
                <div className='image'>
                    {/* <img src={`https://randomuser.me/api/portraits/women/${randomNum()}.jpg`} alt="user" /> */}
                     <img src={user.img_url} alt="user" /> 

                </div>
                <div className="content">
                    <div className="header">{user.name}</div>
                    <div className="description">{user.email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to='/'>
                    <button className="ui violet button">Back</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactDetails