import React from 'react'
import UserComponent from './UserComponent';

const User = ({ data, order }) => {

  const getData = (data) => {
    const userData = data.reduce((temp, ticket) => {
      const { userId } = ticket;
      if (!temp[userId]) {
        temp[userId] = {
          userId: userId,
          userName: ticket.userName || "Unknown",
          tickets: [],
        };
      }
      temp[userId].tickets.push(ticket);
      return temp;
    }, {});
    return Object.values(userData);
  }
  const userData = getData(data);
  console.log("userData", userData);

  function sortDataBy(data, byKey) {
    let sortedData;
    if (byKey == 'title') {
      sortedData = data.sort(function (a, b) {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        if (x > y) { return 1; }
        if (x < y) { return -1; }
        return 0;
      });
    } else {
      sortedData = data.sort(function (a, b) {
        return b.priority - a.priority;
      })
    }
    return sortedData;
  }

  const sortdatabyorder = (userData, order) => {
    {
      userData?.map((user) => {
        sortDataBy(user.tickets, order === "priority" ? "priority" : "title");
      })
    };
  }

  sortdatabyorder(userData, order);


  return (
    <div className='status'>
      {userData?.map((user) => (
        <UserComponent userId={user.userId} userName={user.userName} TicketData={user.tickets} />
      ))}
    </div>
  )
}

export default User