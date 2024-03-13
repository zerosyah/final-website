import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PiStudentBold } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { Datepicker, Dropdown, Select } from "flowbite-react";
import { SlOptionsVertical } from "react-icons/sl";
import ProgressBar from "@ramonak/react-progress-bar";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Checkbox, Table } from "flowbite-react";
import logo from "../assets/image2.jpg";
import { PiExam } from "react-icons/pi";

export default function DashComponent() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/user/getUsers?limit=5");
      const data = await res.json();
      if (res.ok) {
        setUsers(data.users);
        setTotalUsers(data.totalUsers);
        setLastMonthUsers(data.lastMonthUsers);
      }
    };
    const fetchComments = async () => {
      const res = await fetch("/api/comment/comments?limit=5");
      const data = await res.json();
      if (res.ok) {
        setComments(data.comments);
        setTotalComments(data.totalComments);
      }
    };
    const fetchPosts = async () => {
      const res = await fetch("/api/post/posts?limit=5");
      const data = await res.json();
      if (res.ok) {
        setPosts(data.posts);
        setTotalPosts(data.totalPosts);
      }
    };
    if (currentUser.isAdmin) {
      fetchUsers();
      fetchComments();
      fetchPosts();
    }
  }, [currentUser]);

  return (
    <div className="m-4 gap-4 flex flex-col">
      <div className="">
        <div className="flex gap-5">
          <div
            className={`flex justify-between items-center gap-6 border border-gray-300 w-64 px-4 py-3 rounded bg-indigo-200 h-20`}
          >
            <div className={``}>
              <h3 className="text-left text-xs text-gray-900">Students</h3>
              <p className={`text-lg font-semibold text-gray-900`}>
                {totalUsers}
              </p>
            </div>
            <PiStudentBold size={40} className="text-indigo-400" />
          </div>

          <div
            className={`flex justify-between items-center gap-6 border border-gray-300 w-64 px-4 py-3 rounded bg-sky-200 h-20`}
          >
            <div className={``}>
              <h3 className="text-left text-xs text-gray-900">Teachers</h3>
              <p className={`text-lg font-semibold text-gray-900`}>
                {totalComments}
              </p>
            </div>
            <HiOutlineUserGroup size={40} className="text-sky-400" />
          </div>

          <div
            className={`flex justify-between items-center gap-6 border border-gray-300 w-64 px-4 py-3 rounded bg-orange-100 h-20`}
          >
            <div className={``}>
              <h3 className="text-left text-xs text-gray-900">Posts</h3>
              <p className={`text-lg font-semibold text-gray-900`}>
                {totalPosts}
              </p>
            </div>
            <PiStudentBold size={40} className="text-orange-300" />
          </div>
          <div className="w-64 bg-sky-200 h-20 rounded ">
            <flowbiteCalendar />
          </div>
        </div>
      </div>

      {/*second section */}
      <div>
        <div className="flex gap-4">
          {/*first left section */}
          <div className="flex flex-col gap-4">
            {/*class routine */}
            <div className="w-fit bg-purple-50 dark:text-black h-fit py-2 rounded">
              <h3 className="mx-3">Class Routine</h3>
              <div className="flex gap-3 mx-3 mt-1">
                <Dropdown
                  label="select your day"
                  color="transparent"
                  size={"xs"}
                  className=" text-black"
                >
                  <Dropdown.Item>Monday</Dropdown.Item>
                  <Dropdown.Item>Tuesday</Dropdown.Item>
                  <Dropdown.Item>Wensday</Dropdown.Item>
                  <Dropdown.Item>Thursday</Dropdown.Item>
                  <Dropdown.Item>Friday</Dropdown.Item>
                </Dropdown>
                <Dropdown
                  label="select your Grade"
                  color="transparent"
                  size={"xs"}
                  className="p-0"
                ></Dropdown>
                <Dropdown
                  label="section"
                  size={"xs"}
                  color="transparent"
                  className="p-0"
                ></Dropdown>
              </div>

              {/*time table */}
              <div className="flex justify-between mx-3 mt-3">
                <div className="px-2 py-2 bg-white rounded">
                  <div className="flex justify-between items-center">
                    <MdOutlineCalendarMonth size={20} />
                    <SlOptionsVertical size={15} />
                  </div>
                  <h3 className="mt-1 text-sm font-semibold mb-1">
                    October, 2023
                  </h3>
                  <ProgressBar
                    completed={60}
                    maxCompleted={100}
                    bgColor="blue"
                    labelSize="10px"
                    baseBgColor="lightblue"
                    height="12px"
                    width="160px"
                    borderRadius={"50px"}
                  />
                  <p className="text-xs font-normal text-gray-600">
                    your class Routine is here
                  </p>
                </div>

                <div className="px-2 py-2 bg-white rounded">
                  <div className="flex justify-between items-center">
                    <MdOutlineCalendarMonth size={20} />
                    <SlOptionsVertical size={15} />
                  </div>
                  <h3 className="mt-1 text-sm font-semibold mb-1">
                    November, 2023
                  </h3>
                  <ProgressBar
                    completed={90}
                    maxCompleted={100}
                    bgColor="blue"
                    labelSize="10px"
                    baseBgColor="lightblue"
                    height="12px"
                    width="160px"
                    borderRadius={"50px"}
                  />
                  <p className="text-xs font-normal text-gray-600">
                    your class Routine is here
                  </p>
                </div>
              </div>
            </div>
            {/*end of class routine */}

            {/*top students */}
            <div className="bg-purple-50 max-w-min h-fit py-2 px-1.5 rounded w-fit">
              <div className="flex justify-between items-center">
                <h3 className="text-md font-semibold my-2">Top Students</h3>
                <SlOptionsVertical
                  size={15}
                  className="text-md font-semibold my-2"
                />
              </div>
              <div className="overflow-x-auto w-96">
                <Table className="bg-purple-50">
                  <Table.Head className="bg-purple-50">
                    <Table.HeadCell className="bg-purple-50">
                      Product name
                    </Table.HeadCell>
                    <Table.HeadCell className="bg-purple-50">
                      Color
                    </Table.HeadCell>
                    <Table.HeadCell className="bg-purple-50">
                      Category
                    </Table.HeadCell>
                    <Table.HeadCell className="bg-purple-50">
                      Price
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y bg-purple-50">
                    <Table.Row className="bg-purple-50 dark:border-gray-700 dark:bg-gray-800 w-fit">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 min-w-min dark:text-white">
                        {'Apple MacBook Pro 17"'}
                      </Table.Cell>
                      <Table.Cell className="bg-purple-50">Sliver</Table.Cell>
                      <Table.Cell className="bg-purple-50">Laptop</Table.Cell>
                      <Table.Cell className="bg-purple-50">$2999</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-purple-50 dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Microsoft Surface Pro
                      </Table.Cell>
                      <Table.Cell>White</Table.Cell>
                      <Table.Cell>Laptop PC</Table.Cell>
                      <Table.Cell>$1999</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-purple-50 dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Magic Mouse 2
                      </Table.Cell>
                      <Table.Cell>Black</Table.Cell>
                      <Table.Cell>Accessories</Table.Cell>
                      <Table.Cell>$99</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </div>
            {/*end of top students */}
          </div>
          {/*end of first left section */}

          {/*second middle section */}
          <div className="flex flex-col gap-4">
            {/*New Applications */}
            <div className="bg-purple-50 w-80 rounded">
              <div className="flex items-center justify-between px-3 pt-2">
                <h3 className="">New Application</h3>
                <SlOptionsVertical
                  size={15}
                  className="text-md font-semibold my-2"
                />
              </div>
              <div className="bg-purple-50 h-24 max-h-24">
                <Table className="h-24">
                  <Table.Head>
                    <Table.HeadCell className="bg-purple-50 w-5 py-0">Appy Date</Table.HeadCell>
                    <Table.HeadCell className="bg-purple-50 py-0">Name</Table.HeadCell>
                  </Table.Head>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell className="bg-purple-50 h-3 py-0">11/11/2023</Table.Cell>
                      <Table.Cell className="bg-purple-50 items-center flex gap-1 py-2"><img src={logo} alt="image" className="w-5 h-5 rounded-full"/>Ahmed</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="bg-purple-50 h-3 py-0">11/11/2023</Table.Cell>
                      <Table.Cell className="bg-purple-50 items-center flex gap-1 py-2"><img src={logo} alt="image" className="w-5 h-5 rounded-full"/>Ahmed</Table.Cell>
                    </Table.Row>
                    
                    
                  </Table.Body>
                </Table>
              </div>
            </div>
            {/*end of New Applications */}

            {/*Exams */}
            <div className="bg-purple-50 w-80 py-2 rounded">
              <div className="flex items-center justify-between px-3">
                <h3 className="text-md font-semibold">Total Exams</h3>
                <SlOptionsVertical size={15} className="text-md font-semibold my-2"/>
              </div>
              <div className="flex justify-between items-center px-4">
                <p className="font-bold text-3xl pb-2">233</p>
                <PiExam size={30} className="font-bold pb-2"/>
              </div>
              <div className="">
                <Table>
                  <Table.Head>
                    <Table.HeadCell className="bg-purple-50 w-5 py-0">Passed</Table.HeadCell>
                    <Table.HeadCell className="bg-purple-50 w-5 py-0">failed</Table.HeadCell>
                  </Table.Head>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell className="bg-purple-50 h-3 py-0">200</Table.Cell>
                      <Table.Cell className="bg-purple-50 h-3 py-0">33</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </div>
            {/*end of Exams */}

            {/*starts*/}
            <div className="w-80 h-44 bg-purple-50">
              <h3>Starts</h3>
            </div>
            {/*end of starts */}
          </div>
          {/*end of second middle section */}

          {/*right section */}
          <div className="flex flex-col gap-4">
            {/*right top section */}
            <div className="w-80 h-80 bg-purple-50"></div>
            <div className="w-80 h-32 bg-purple-50"></div>
            
          </div>
          
        </div>

        {/*third section */}

        <div className=""></div>
      </div>
    </div>
  );
}
