import React,{useState,useEffect} from "react"
import axios from "axios";
import Navbar from './Components/Navbar/Navbar'
import Priority from "./Components/Priority/Priority";
import Status from "./Components/Status/Status";
import User from "./Components/User/User";

function App() {
  const [data,setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
      // console.log("data",response.data);
      setData(response.data);
    } 
    getData();
  },[]);

  const getTicketAndUsers = (data) => {
    if (!data || !data.tickets || !data.users) {
      return []; // return an empty array if data is not structured as expected
    }
  
    const { tickets, users } = data;
  
    const usermap = users.reduce((temp, user) => {
      temp[user.id] = user.name;
      return temp;
    }, {});
  
    const ticketmergeuser = tickets.map((ticket) => ({
      ...ticket,
      userName: usermap[ticket.userId] ? usermap[ticket.userId] : "Unknown User",
    }));
  
    return ticketmergeuser;
  } 

  const result = getTicketAndUsers(data);
  // console.log("result",result);

  const [mode, setMode] = useState(() => localStorage.getItem("group") || "status");
  const [ord, setOrd] = useState(() => localStorage.getItem("order") || "title");

  return (
    <div>
      <Navbar mode={mode} setMode={setMode} ord={ord} setOrd={setOrd}/>
      {mode==="priority" && <Priority data={result} order={ord}/>}
      {mode==="status" && <Status data={result} order={ord}/>}
      {mode==="user" && <User data={result} order={ord}/>}
    </div>
  );
}

export default App;
