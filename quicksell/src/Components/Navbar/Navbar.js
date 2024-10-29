import React, { useState } from 'react'
import './Navbar.css'
import display from '../../assets/Display.svg'
import down from '../../assets/down.svg'

const Navbar = ({mode,setMode,ord,setOrd}) => {
    const [show, setShow] = useState(false);
    const [group, setGroup] = useState(mode);
    const [order, setOrder] = useState(ord);
    const handleChange = (e) => {
        setMode(e);
        setGroup(e);
        localStorage.setItem("group",e);
    };
    const handleChangeOrder = (e) => {
        setOrd(e);
        setOrder(e);
        localStorage.setItem("order",e);
    };

    return (
        <>
            <div className='navbar'>
                <div className='drop-up' onClick={() => setShow(!show)}>
                    <img src={display} />
                    <span>Display</span>
                    <img src={down} />
                </div>
                {show && (
                    <div className='dropdown-content'>
                        <div className='row1'>
                            <span>Grouping</span>{" "}
                            <select
                                value={group}
                                onChange={(e) => handleChange(e.target.value)}
                                className="dropdown-content_option__select"
                            >
                                <option value="priority">Priority</option>
                                <option value="status">Status</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                        <div className='row1'>
                            <span>Ordering</span>{" "}
                            <select
                                value={order}
                                onChange={(e) => handleChangeOrder(e.target.value)}
                                className="dropdown-content_option__select"
                            >
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar