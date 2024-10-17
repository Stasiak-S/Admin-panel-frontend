import React from "react";
import "../styles/TablePage.css";
import {useState, useEffect} from "react";
import NavBar from "../groupElements/Navbar.js";
import Pagiton from "../elements/paginator.jsx";
const UserBody=()=>{
  const page="users"
  const [message, setMessage] = useState([{}]);

  useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:5000/admin/get/allUsers";
  
      try {
        const resp = await fetch (url);
        const data = await resp.json();
        setMessage(data.result);
      } catch (err) {
        console.error(err);
      }
    }
  
    getData();
  }, []);
  return (
    <div>
      <div className="body">
        <NavBar/>
        <Pagiton name="checkbox" CountPages={5} PageInfo={message} Page={page}/>
      </div>
    </div>
  );
}

export default UserBody;