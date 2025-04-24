import profile from "@/assets/profile.webp";
import { API_HOST } from "@/lib/constants";
import axios from "axios";
import { useState } from "react";

function UserMenu() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  function handleShowUserMenu() {
    setShowUserMenu((prev) => !prev);
  }

  async function handleLogout() {
    try {
      await axios.post(`${API_HOST}/api/logout`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") ?? ''}`,
        }
      })

      window.location.href = "/";
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <div className="relative" onClick={handleShowUserMenu}>
    <div className="p-0.5 hover:bg-neutral-300 rounded-full cursor-pointer">
      <img src={profile} className="size-9 rounded-full object-cover" />
    </div>
      <div className={`${!showUserMenu ? 'hidden' : ''} absolute top-full right-0 bg-white shadow`}>
        <button onClick={handleLogout} className="cursor-pointer hover:bg-neutral-200 p-2">Logout</button>
      </div>
    </div>
  )
}

export default UserMenu