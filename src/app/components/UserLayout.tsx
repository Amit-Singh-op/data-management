"use client";
import React, { useState, useEffect } from "react";
import api from "../utils/api";
import UserSearchSection from "./UserSearchSection";
import UserCard from "./UserCard";
import { User, useMyContext } from "./MyContext";
import NoUser from "./NoUser";
import UserForm from "./UserForm";

const UserLayout: React.FC = () => {
  const { users, setUsers, searchUser, setSearchUser, openUserForm } =
    useMyContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<User[]>("/");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {!users.length ? (
        <NoUser />
      ) : searchUser.length > 0 ? (
        <div className="container mx-auto p-8">
          <UserSearchSection />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchUser[0]?.message ? (
              <div className="container mx-auto text-center font-black">
                No Record
              </div>
            ) : (
              searchUser.map((user, index) => (
                <UserCard key={index} {...user} />
              ))
            )}
          </div>
        </div>
      ) : (
        <div className="container mx-auto p-8">
          <UserSearchSection />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {users.map((movie, index) => (
              <UserCard key={index} {...movie} />
            ))}
          </div>
        </div>
      )}
      {openUserForm && <UserForm />}
    </>
  );
};

export default UserLayout;
