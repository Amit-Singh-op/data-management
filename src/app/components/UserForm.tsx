"use client";
import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User, useMyContext } from "./MyContext";

const UserForm: React.FC = () => {
  const { users, setUsers, setOpenUserForm, openUserForm } = useMyContext();
  const [data, setData] = useState({});

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const len = users.length;
    const newUser = { ...data, id: len + 1 };
    setOpenUserForm(!openUserForm);
    setUsers((prev: any) => [...prev, newUser]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center rounded shadow-md"
    >
      <div className="absolute max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
        <h2 className="flex justify-between text-2xl font-semibold mb-4 text-black">
          Add new user
          <FontAwesomeIcon
            icon={faTimes}
            className="mr-2 cursor-pointer"
            onClick={() => setOpenUserForm(!openUserForm)}
          />
        </h2>

        {/* Input Fields */}

        <div>
          <label
            htmlFor="input1"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            required
            className="mt-1 mb-4 p-2 border rounded w-full text-black"
          />
        </div>
        <div>
          <label
            htmlFor="input2"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            required
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            className="mt-1 mb-4 p-2 border rounded w-full text-black"
          />
        </div>
        <div>
          <label
            htmlFor="input3"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            required
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            className="mt-1 mb-4 p-2 border rounded w-full text-black"
          />
        </div>

        {/* Submit Button */}
        <div className="w-full text-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add user
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
