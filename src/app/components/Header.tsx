"use client";
import { useMyContext } from "./MyContext";

const Header: React.FC = () => {
  const { openUserForm, setOpenUserForm } = useMyContext();
  return (
    <header className="sticky top-0 flex items-center bg-gray-800 text-white p-4 justify-between">
      <h1 className="text-2xl font-bold max-sm:hidden">Data Management</h1>
      <h1 className="text-2xl font-bold hidden max-sm:block">M</h1>
      <div className="flex gap-5">
        <button
          className="bg-slate-300 p-2 rounded-sm text-black"
          onClick={() => setOpenUserForm(!openUserForm)}
        >
          Add new user
        </button>
      </div>
    </header>
  );
};

export default Header;
