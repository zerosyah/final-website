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
import { ArcElement } from "chart.js/auto";
import PieChart from "./PieChart";

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
              <h3 className="mx-3 font-semibold dark:text-black">Class Routine</h3>
              <div className="flex gap-3 mx-3 mt-2">
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
                >
                  <Dropdown.Item>Grade 8</Dropdown.Item>
                  <Dropdown.Item>Grade 9</Dropdown.Item>
                  <Dropdown.Item>Grade 10</Dropdown.Item>
                  <Dropdown.Item>Grade 11</Dropdown.Item>
                  <Dropdown.Item>Grade 12</Dropdown.Item>
                </Dropdown>
                <Dropdown
                  label="section"
                  size={"xs"}
                  color="transparent"
                  className="p-0"
                >
                  <Dropdown.Item>A</Dropdown.Item>
                  <Dropdown.Item>B</Dropdown.Item>
                  <Dropdown.Item>C</Dropdown.Item>
                  <Dropdown.Item>D</Dropdown.Item>
                  <Dropdown.Item>E</Dropdown.Item>
                </Dropdown>
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
                <h3 className="text-md font-semibold dark:text-black pl-2">Top Students</h3>
                <SlOptionsVertical
                  size={15}
                  className="text-md font-semibold my-2 dark:text-black"
                />
              </div>
              <div className="overflow-x-auto py-0 w-96">
                <Table className="bg-purple-50">
                  <Table.Head className="bg-purple-50">
                    <Table.HeadCell className="bg-purple-50">
                      Name
                    </Table.HeadCell>
                    <Table.HeadCell className="bg-purple-50">
                      Grade
                    </Table.HeadCell>
                    <Table.HeadCell className="bg-purple-50">
                      Marks
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y bg-purple-50 py-0">
                    <Table.Row className="bg-purple-50 py-0 dark:border-gray-700 dark:bg-gray-800 w-fit">
                      <Table.Cell className="whitespace-nowrap py-0 font-medium text-gray-900 min-w-min dark:text-white">
                        Zamani
                      </Table.Cell>
                      <Table.Cell className="py-1">12B</Table.Cell>
                      <Table.Cell className="py-1">100</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-purple-50 dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap py-0 font-medium text-gray-900 dark:text-white">
                        Asanda
                      </Table.Cell>
                      <Table.Cell className="py-1">11A</Table.Cell>
                      <Table.Cell className="py-1">98</Table.Cell>
                      
                    </Table.Row>
                    <Table.Row className="bg-purple-50 dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap py-1 font-medium text-gray-900 dark:text-white">
                        Samuel
                      </Table.Cell>
                      <Table.Cell className="py-1">10C</Table.Cell>
                      <Table.Cell className="py-1">99</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-purple-50 dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap py-1 font-medium text-gray-900 dark:text-white">
                        Zanele
                      </Table.Cell>
                      <Table.Cell className="py-1">9C</Table.Cell>
                      <Table.Cell className="py-1">99</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-purple-50 dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap py-1 font-medium text-gray-900 dark:text-white">
                        Nombikayise
                      </Table.Cell>
                      <Table.Cell className="py-1">8C</Table.Cell>
                      <Table.Cell className="py-1">99</Table.Cell>
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
            <div className="bg-purple-50 w-56 rounded">
              <div className="flex items-center justify-between px-3 pt-1 pb-0">
                <h3 className="font-semibold dark:text-black">New Application</h3>
                <SlOptionsVertical
                  size={15}
                  className="text-md font-semibold"
                />
              </div>
              <div className="bg-purple-50 w-52 pr-2 overflow-hidden">
                <Table className="h-0">
                  <Table.Head className="p-0">
                    <Table.HeadCell className="bg-purple-50 w-2 pl-2">Date</Table.HeadCell>
                    <Table.HeadCell className="bg-purple-50 pl-0 ">Name</Table.HeadCell>
                  </Table.Head>
                  <Table.Body>
                    <Table.Row className="h-0 py-0">
                      <Table.Cell className="bg-purple-50 h-0 py-0 pl-2">11/23</Table.Cell>
                      <Table.Cell className="bg-purple-50 h-0 py-0 pl-0">Ahmedgfgfhgfh</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="bg-purple-50 h-3 py-0 pl-2">11/23</Table.Cell>
                      <Table.Cell className="bg-purple-50 items-center flex gap-1 py-2 pl-0">Ahmed</Table.Cell>
                    </Table.Row>
                    
                    
                  </Table.Body>
                </Table>
              </div>
            </div>
            {/*end of New Applications */}

            {/*Exams */}
            <div className="bg-purple-50 w-56 rounded">
              <div className="flex items-center justify-between px-3">
                <h3 className="text-md font-semibold pt-2">Total Exams</h3>
                <SlOptionsVertical size={15} className="text-md font-semibold my-2"/>
              </div>
              <div className="flex justify-between items-center px-4">
                <p className="font-bold text-3xl pb-2">233</p>
                <PiExam size={30} className="font-bold pb-2"/>
              </div>
              <div className="pb-2">
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
            <div className="w-56 h-36 rounded mt-2 bg-purple-50">
              <h3 className="text- font-semibold pt-2 px-2">Starts</h3>
            </div>
            {/*end of starts */}
          </div>
          {/*end of second middle section */}

          {/*right section */}
          <div className="flex flex-col gap-4">
            {/*right top section */}
            <div className="w-min h-fit rounded pb-3 bg-purple-50">
              <div className="flex justify-between items-center px-4 pt-2">
                <h3 className="">Course Stats</h3>
                <SlOptionsVertical/>
              </div>
              <div className="">
                <PieChart />
              </div>
            </div>
            <div className="w-64 h-36 mt-3 rounded bg-purple-50">
              <div className="">
                <h3 className="px-3 pt-2">Notifications</h3>
              </div>
            </div>
            
          </div>
          {/*end of right section */}

          <div className="w-40 bg-purple-50 rounded">
            <div className="flex pt-2 items-center px-2 justify-between">
              <h3 className="">lists</h3>
              <SlOptionsVertical/>
            </div>
          </div>
          
        </div>
        {/*third section */}
      </div>
    </div>
  );
}
