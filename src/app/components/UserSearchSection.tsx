// components/TitleSearchSection.tsx
import React, { useState } from "react";
import { useMyContext } from "./MyContext";

const UserSearchSection: React.FC = () => {
  const { users, setSearchUser } = useMyContext();

  const handleChange = (e: any) => {
    const value = e.target.value;
    const usersObj = users.filter((user) => {
      if (
        user.name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value)
      ) {
        return user;
      }
    });
    if (usersObj.length === 0) {
      setSearchUser([
        { message: "No record", id: 0, email: " ", name: " ", phone: "" },
      ]);
    } else {
      setSearchUser(usersObj);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold mb-4">User Search</h2>
      <input
        type="text"
        placeholder="Search for your favourite movie..."
        onChange={handleChange}
        className="w-2/5 max-md:w-4/5 p-2 border rounded text-black"
      />
    </div>
  );
};

export default UserSearchSection;
