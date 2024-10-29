import React from 'react';
import './status.css';
import Backlog from '../../assets/Backlog.svg'
import Todo from '../../assets/To-do.svg'
import In_Progress from '../../assets/in-progress.svg'
import Done from '../../assets/Done.svg'
import Cancelled from '../../assets/Cancelled.svg'
import Add from '../../assets/add.svg'
import Dot from '../../assets/3dot.svg'

const StatusComponent = ({ type, data }) => {
    const TicketData = data[type] || [];
    return (
        <div className='status-comp'>
            <div className='status-top'>
                <div className='status-top-1'>
                    {type==="Backlog" && <img src={Backlog} />}
                    {type==="Todo" && <img src={Todo} />}
                    {type==="In_Progress" && <img src={In_Progress} />}
                    {type==="Done" && <img src={Done} />}
                    {type==="Cancelled" && <img src={Cancelled} />}
                    <span>{type}</span>
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
                        <span className='status-bottom-1-1'>
                            {ticket.userName.substring(0, 2).toUpperCase()}
                        </span>
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

export default StatusComponent