// contexts/MyContext.tsx
"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  message: string;
}

// Define the shape of your context data
interface MyContextData {
  openUserForm: Boolean;
  setOpenUserForm: React.Dispatch<React.SetStateAction<Boolean>>;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  searchUser: User[];
  setSearchUser: React.Dispatch<React.SetStateAction<User[]>>;
}

// Create the context
const MyContext = createContext<MyContextData | undefined>(undefined);

// Create a provider component
export const MyContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [openUserForm, setOpenUserForm] = useState<Boolean>(false); // Initial state

  const [users, setUsers] = useState<User[]>([]);

  const [searchUser, setSearchUser] = useState<User[]>([]);

  return (
    <MyContext.Provider
      value={{
        openUserForm,
        setOpenUserForm,
        users,
        setUsers,
        searchUser,
        setSearchUser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to use the context
export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};
