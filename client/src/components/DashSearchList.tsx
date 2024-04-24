import { SlOptions } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { Avatar, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DashUserDetails from "./DashUserDetails";

function DashSearchList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const { currentUser } = useSelector((state: any) => state.user);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/user/getUsers");
      const data = await res.json();
      if (res.ok) {
        setUsers(data.users);
      }
    };
    fetchUsers();
  }, [currentUser]);

  return (
    <div className="flex justify-between gap-4">
      <div className="main w-fit rounded bg-teal-300 px-2 py-2 overflow-auto" style={{height: '94.7vh'}}>
        <div className="title flex items-center justify-between font-semibold">
          <p>Students</p>
          <SlOptions />
        </div>
        <TextInput className="py-2" sizing={"sm"} icon={HiOutlineSearch}/>

        <div className="List">
          {currentUser.isAdmin &&
            users.map((user: any) => (
              <ul className="flex flex-col gap-10 mt-1">
                <li className="flex border-b flex-col gap-4" onClick={() => setSelectedUser(user._id)}>
                  <div className="flex justify-between w-full items-center">
                    <div className="flex gap-2 items-center">
                      <Avatar img={user.profilePicture} size={"sm"} className=""/>
                      <div className="text-sm">
                        <h3 className="font-semibold">{user.firstName}</h3>
                        <p className="text-xs">G-8</p>
                      </div>
                    </div>
                    <div className="text-xs pr-2">
                        <p className="text-xs">Male</p>
                        <p className="">Male</p>
                      </div>
                  </div>
                </li>
              </ul>
            ))}
        </div>
      </div>
      <div className="">
      <DashUserDetails selectedUser={selectedUser}/>
      </div>
    </div>
  );
}

export default DashSearchList;
