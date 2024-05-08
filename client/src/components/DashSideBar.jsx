import { Sidebar } from "flowbite-react";
import { HiArrowRight, HiDocumentText, HiOutlineUserGroup, HiUser } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
Sidebar;
import { signOut } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdEmojiEvents } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { BiMessageSquareDetail } from "react-icons/bi";

export default function DashSideBar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const urlParms = new URLSearchParams(location.search);
    const tabFromUrl = urlParms.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  const handleSignOutAccount = async () => {
    try {
      await fetch("/api/auth/signout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Sidebar className="w-full mid:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1">
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={currentUser.isAdmin ? "Admin" : "Student"}
              labelColor="dark"
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>
          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=posts">
              <Sidebar.Item
                active={tab === "posts"}
                icon={HiDocumentText}
                as="div"
              >
                Posts
              </Sidebar.Item>
            </Link>
          )}
          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=users">
              <Sidebar.Item
                active={tab === "users"}
                icon={HiOutlineUserGroup}
                as="div"
              >
                Users
              </Sidebar.Item>
            </Link>
          )}
          
          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=search">
              <Sidebar.Item
                active={tab === "search"}
                icon={FaRegCalendarCheck}
                as="div"
              >
                Student details
              </Sidebar.Item>
            </Link>
          )}
          
          <Sidebar.Item active={tab === "/dashboard?tab=livechat"} icon={TiMessages}>
            Live Chat
          </Sidebar.Item>
          <Sidebar.Item active={tab === "/dashboard?tab=comments"} icon={BiMessageSquareDetail}>
            Comments
          </Sidebar.Item>

          <Sidebar.Item
            icon={HiArrowRight}
            onClick={handleSignOutAccount}
            className="cursor-pointer"
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
