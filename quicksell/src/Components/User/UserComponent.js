import React from 'react'
import '../Status/status.css';
import Add from '../../assets/add.svg'
import Dot from '../../assets/3dot.svg'

const UserComponent = ({userId,userName,TicketData}) => {
  return (
    <div className='status-comp'>
        <div className='status-top'>
            <div className='status-top-1'>
            <span className='status-bottom-1-1'>{userName.substring(0, 2).toUpperCase()}</span>
                <span>{userName}</span>
                <span>{TicketData.length}</span>
            </div>
            <div className='status-top-1'>
                <img src={Add} />
                <img src={Dot} />
            </div>
        </div>
        {TicketData?.map((ticket) => (
            <div key={ticket.id} className='status-bottom'>
                <div className='status-bottom-1'>
                    <span>{ticket.id}</span>
                </div>
                <span className='status-bottom-1-2'>{ticket.title}</span>
                <div className='status-bottom-2'>
                    <img src={Dot} />
                    <div className='status-bottom-2-1'>
                        {ticket.tag[0]}
                    </div>  
                </div>
            </div>
        ))}
    </div>
)
}

export default UserComponent