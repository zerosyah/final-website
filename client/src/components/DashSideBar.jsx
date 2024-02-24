import { Sidebar } from "flowbite-react";
import { HiArrowRight, HiUser } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
Sidebar;
import { signOut } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";


export default function DashSideBar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state)=>state.user)

  useEffect(() => {
    const urlParms = new URLSearchParams(location.search);
    const tabFromUrl = urlParms.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  const handleSignOutAccount =async () =>{
    try{
      await fetch('/api/auth/signout')
      dispatch(signOut())
    } catch (error){
      console.log(error)
    }
  }
  return (
    <Sidebar className="w-full mid:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={currentUser.isAdmin ? "Admin" : "Student"}
              labelColor="dark"
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item icon={HiArrowRight} onClick={handleSignOutAccount} className="cursor-pointer">
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
