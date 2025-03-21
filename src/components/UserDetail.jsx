
import React from "react";
import { useLocation } from "react-router-dom";
import defaultAvatar from "../assets/image.png";

export default function UserDetail() {
  const { state: user } = useLocation();

  if (!user) return <p className="text-center text-red-500">User not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg border border-green-300 mt-[100px]">
      <div className="flex flex-col items-center">
        <img src={defaultAvatar} alt="User Avatar" className="w-24 h-24 rounded-full mb-4" />
        <h2 className="text-3xl font-bold text-green-800 mb-2">{user.name}</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> <a href={`http://${user.website}`} className="text-green-600 underline" target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
        <p><strong>Business:</strong> {user.company.bs}</p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        <p><strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
      </div>
    </div>
  );
}
