
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import defaultAvatar from "../assets/image.png";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  const handleCardClick = (user) => {
    navigate(`/user/${user.id}`, { state: user });
  };

  return (
    <div className="w-[1100px] mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map(user => (
        <div 
          key={user.id} 
          className=" p-6 rounded-lg shadow-lg border border-green-300 cursor-pointer hover:bg-green-200 transition"
          onClick={() => handleCardClick(user)}
        >
          <img src={defaultAvatar} alt="User Avatar" className="w-16 h-16 rounded-full mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-700 mb-2 text-center">{user.name}</h3>
          <p className=" text-center"><strong>Username:</strong> {user.username}</p>
          <p className=" text-center"><strong>Email:</strong> {user.email}</p>
          <p className=" text-center"><strong>Phone:</strong> {user.phone}</p>
          <p className=" text-center">
            <strong>Website:</strong> 
            <a href={`http://${user.website}`} className="text-green-600 font-semibold underline" target="_blank" rel="noopener noreferrer"> {user.website}</a>
          </p>
        </div>
      ))}
    </div>
  );
}

