import React, { useEffect, useState } from "react";
import PriorityComponent from "./PriorityComponent";
import '../Status/status.css';

const Priority = ({ data,order }) => {
  const [ticketData, setTicketData] = useState({
    0: { priority: 0, tickets: [] },
    1: { priority: 1, tickets: [] },
    2: { priority: 2, tickets: [] },
    3: { priority: 3, tickets: [] },
    4: { priority: 4, tickets: [] },
  });

  useEffect(() => {
    const newticketData = {
      0: { priority: 0, tickets: [] },
      1: { priority: 1, tickets: [] },
      2: { priority: 2, tickets: [] },
      3: { priority: 3, tickets: [] },
      4: { priority: 4, tickets: [] },
    };

    data?.forEach((item) => {
      const { priority } = item;
      if (newticketData[priority]) {
        newticketData[priority].tickets.push(item);
      }
    });

    setTicketData(newticketData);
  }, [data]);

  console.log("ticketData",ticketData);

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

sortDataBy(ticketData[0].tickets,order==="priority"?"priority":"title");
sortDataBy(ticketData[1].tickets,order==="priority"?"priority":"title");
sortDataBy(ticketData[2].tickets,order==="priority"?"priority":"title");
sortDataBy(ticketData[3].tickets,order==="priority"?"priority":"title");
sortDataBy(ticketData[4].tickets,order==="priority"?"priority":"title");

  return (
    <div className="status">
      <PriorityComponent TicketData={ticketData[0]?.tickets} priority={0} />
      <PriorityComponent TicketData={ticketData[4]?.tickets} priority={4} />
      <PriorityComponent TicketData={ticketData[3]?.tickets} priority={3} />
      <PriorityComponent TicketData={ticketData[2]?.tickets} priority={2} />
      <PriorityComponent TicketData={ticketData[1]?.tickets} priority={1} />
    </div>
  )
}

export default Priority