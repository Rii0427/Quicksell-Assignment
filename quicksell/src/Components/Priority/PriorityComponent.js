import React from 'react'
import '../Status/status.css';
import Hp from '../../assets/hp.svg'
import Lp from '../../assets/lp.svg'
import Mp from '../../assets/mp.svg'
import Np from '../../assets/np.svg'
import Up from '../../assets/up.svg'
import Add from '../../assets/add.svg'
import Dot from '../../assets/3dot.svg'

const PriorityComponent = ({ TicketData, priority }) => {
    return (
        <div className='status-comp'>
            <div className='status-top'>
                <div className='status-top-1'>
                    {priority === 0 && <img src={Np} />}
                    {priority === 1 && <img src={Lp} />}
                    {priority === 2 && <img src={Mp} />}
                    {priority === 3 && <img src={Hp} />}
                    {priority === 4 && <img src={Up} />}
                    <span>
                        {(priority === 0 && "No priority") ||
                            (priority === 1 && "Low") ||
                            (priority === 2 && "Medium") ||
                            (priority === 3 && "High") ||
                            (priority === 4 && "Urgent")}
                    </span>
                    <span>{TicketData?.length}</span>
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

export default PriorityComponent