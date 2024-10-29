import React, { useEffect, useState } from "react";
import StatusComponent from "./StatusComponent";

const Status = ({ data, order }) => {
    const [ticketData, setTicketData] = useState({
        Backlog: [],
        Todo: [],
        In_Progress: [],
        Done: [],
        Cancelled: [],
    });

    useEffect(() => {
        const newticketData = {
            Backlog: [],
            Todo: [],
            In_Progress: [],
            Done: [],
            Cancelled: [],
        };
        data?.forEach((item) => {
            if (item.Status === "Backlog") newticketData.Backlog.push(item);
            if (item.status === "Todo") newticketData.Todo.push(item);
            if (item.status === "In progress") newticketData.In_Progress.push(item);
            if (item.status === "Done") newticketData.Done.push(item);
            if (item.status === "Cancelled") newticketData.Cancelled.push(item);
        });
        setTicketData(newticketData);
    }, [data]);

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

    sortDataBy(ticketData.Backlog,order==="priority"?"priority":"title");
    sortDataBy(ticketData.Todo,order==="priority"?"priority":"title");
    sortDataBy(ticketData.In_Progress,order==="priority"?"priority":"title");
    sortDataBy(ticketData.Done,order==="priority"?"priority":"title");
    sortDataBy(ticketData.Cancelled,order==="priority"?"priority":"title");

    return (
        <div className="status">
            <StatusComponent type="Backlog" data={ticketData} />
            <StatusComponent type="Todo" data={ticketData} />
            <StatusComponent type="In_Progress" data={ticketData} />
            <StatusComponent type="Done" data={ticketData} />
            <StatusComponent type="Cancelled" data={ticketData} />
        </div>
    )
}

export default Status;