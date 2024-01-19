// components/MovieCard.tsx
import React from "react";

interface UserCardProps {
  id: number;
  name: string;
  phone: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ id, name, phone, email }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:cursor-pointer">
      <p className="text-black text-end">{id}</p>
      <div className="flex flex-col gap-2">
        <h3 className="text-xxl text-black font-semibold">
          {name.toLocaleUpperCase()}
        </h3>
        <p className="text-black">{email}</p>
        <p className="text-black">{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
