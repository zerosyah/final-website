import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PiStudentBold } from "react-icons/pi";
import { HiBookOpen, HiOutlineUserGroup } from "react-icons/hi2";
import { SlOptionsVertical } from "react-icons/sl";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  Checkbox,
  Label,
  Table,
  Avatar,
  Badge,
  List,
  Dropdown,
} from "flowbite-react";
import logo from "../assets/image2.jpg";
import { PiExam } from "react-icons/pi";
import { ArcElement } from "chart.js/auto";
import PieChart from "./PieChart";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaEdit, FaLongArrowAltRight } from "react-icons/fa";

export default function DashComponent() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const { currentUser } = useSelector((state) => state.user);
  const teacher =
    "https://pikwizard.com/pw/small/fe895262fcddf4c758f76566e0f41103.jpg";
  const staff =
    "https://www.shutterstock.com/image-photo/business-team-standing-over-dark-260nw-181166018.jpg";
  const student =
    "https://img.pikbest.com/ai/illus_our/20230414/593b2c90239e6d9710e4471b4823d69a.jpg!w700wp";
  const mothevent =
    "https://floatiekings.com/cdn/shop/articles/creative-school-event-ideas.jpg?v=1703670883&width=2000";
  const tablebg =
    "https://law.udmercy.edu/_files/images/students/studentbanner/Student-Directory.jpg";
  const tableChamp =
    "https://t4.ftcdn.net/jpg/06/03/94/97/360_F_603949786_1JqD1nWoCDK0Fvo0t2D2dYVMSl0FPiv8.jpg";
  const libraryImg =
    "https://png.pngtree.com/thumb_back/fh260/background/20230526/pngtree-an-old-bookcase-in-a-library-image_2642908.jpg";
  const [interval, setInterval] = useState("Month");

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
    console.log(currentUser);
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
              <h3 className="text-left text-xs text-gray-900">Working Stuff</h3>
              <p className={`text-lg font-semibold text-gray-900`}>
                {totalPosts}
              </p>
            </div>
            <PiStudentBold size={40} className="text-orange-300" />
          </div>
          <div className="w-64 bg-sky-200 h-20 rounded "></div>
        </div>
      </div>

      {/* second row */}

      {currentUser.isAdmin ? (
        <div className="container flex flex-col gap-4">
          <div className="Attendent-list flex gap-4">
            <div
              className="bg-gray-200 w-48 px-2 rounded bg-cover border hover:shadow-lg hover:shadow-black hover:scale-105 duration-300 ease-in"
              style={{
                backgroundImage: `url(${student})`,
              }}
            >
              <h3 className="text-white text-1xl font-semibold text-shadow-lg">
                Student Attendance
              </h3>
              <div className="flex gap-4 items-center mt-2 justify-between font-extralight">
                <div className="">
                  <p className="text-xs text-white font-semibold">
                    Present No.
                  </p>
                  <h2 className="font-semibold text-sm text-white">4782</h2>
                  <p className="text-xs text-white font-semibold">Absent No.</p>
                  <h2 className="font-semibold text-sm text-white">437</h2>
                </div>
                <div className="relative self-center">
                  <CircularProgressbar
                    value={(4782 / 5219) * 100}
                    text={Math.floor((4782 / 5219) * 100) + "%"}
                    className="text-white"
                    strokeWidth={10}
                    styles={{
                      root: {
                        width: "60",
                        height: "60",
                        position: "relative",
                        top: 0,
                        left: 0,
                        color: "white",
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            {/* teacher attendance */}

            <div
              className="bg-gray-200 w-48 px-2 rounded bg-cover border hover:shadow-lg hover:shadow-black hover:scale-105 duration-300 ease-in"
              style={{
                backgroundImage: `url(${teacher})`,
              }}
            >
              <h3 className="text-white text-1xl font-semibold text-shadow-lg">
                Teacher Attendance
              </h3>
              <div className="flex gap-4 items-center mt-2 justify-between font-extralight">
                <div className="">
                  <p className="text-xs text-white font-semibold">
                    Present No.
                  </p>
                  <h2 className="font-semibold text-sm text-white">4782</h2>
                  <p className="text-xs text-white font-semibold">Absent No.</p>
                  <h2 className="font-semibold text-sm text-white">437</h2>
                </div>
                <div className="relative self-center">
                  <CircularProgressbar
                    value={(1234 / 1456) * 100}
                    text={Math.floor((1234 / 1456) * 100) + "%"}
                    className="text-white"
                    strokeWidth={10}
                    styles={{
                      root: {
                        width: "60",
                        height: "60",
                        position: "relative",
                        top: 0,
                        left: 0,
                        color: "white",
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            {/* working stuff attendance */}

            <div
              className="bg-gray-200 w-48 px-2 rounded bg-cover border hover:shadow-lg hover:shadow-black hover:scale-105 duration-300 ease-in"
              style={{
                backgroundImage: `url(${staff})`,
              }}
            >
              <h3 className="text-white text-1xl font-semibold text-shadow-lg">
                Staff Attendance
              </h3>
              <div className="flex gap-4 items-center mt-2 justify-between font-extralight">
                <div className="">
                  <p className="text-xs text-white font-semibold">
                    Present No.
                  </p>
                  <h2 className="font-semibold text-sm text-white">472</h2>
                  <p className="text-xs text-white font-semibold">Absent No.</p>
                  <h2 className="font-semibold text-sm text-white">47</h2>
                </div>
                <div className="relative self-center">
                  <CircularProgressbar
                    value={(302 / 519) * 100}
                    text={Math.floor((302 / 519) * 100) + "%"}
                    className="text-white"
                    strokeWidth={10}
                    styles={{
                      root: {
                        width: "60",
                        height: "60",
                        position: "relative",
                        top: 0,
                        left: 0,
                        color: "white",
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            {/* this Month events */}
            <div
              className="bg-gray-200 w-48 px-2 rounded bg-cover border hover:shadow-lg hover:shadow-black hover:scale-105 duration-300 ease-in"
              style={{
                backgroundImage: `url(${mothevent})`,
              }}
            >
              <h3 className="text-white text-1xl font-semibold text-shadow-lg">
                This Month Events
              </h3>
              <div className="flex gap-4 items-center mt-2 justify-between font-extralight">
                <div className="">
                  <p className="text-xs text-white font-semibold">All Events</p>
                  <h2 className="font-semibold text-sm text-white">40</h2>
                  <p className="text-xs text-white font-semibold">Completed.</p>
                  <h2 className="font-semibold text-sm text-white">7</h2>
                </div>
                <div className="relative self-center">
                  <CircularProgressbar
                    value={(7 / 40) * 100}
                    text={Math.floor((7 / 40) * 100) + "%"}
                    className="text-white"
                    strokeWidth={10}
                    styles={{
                      root: {
                        width: "60",
                        height: "60",
                        position: "relative",
                        top: 0,
                        left: 0,
                        color: "white",
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            {/* new applicants */}
            <div
              className="bg-gray-200 w-56 px-2 rounded bg-cover border hover:shadow-lg hover:shadow-black hover:scale-105 duration-300 ease-in"
              style={{
                backgroundImage: `url(${mothevent})`,
              }}
            >
              <h3 className="text-white text-1xl font-semibold text-shadow-lg">
                New Applications
              </h3>
              <div className="flex gap-4 items-center mt-2 justify-between font-extralight">
                <div className="">
                  <p className="text-xs text-white font-semibold">
                    All Applications
                  </p>
                  <h2 className="font-semibold text-sm text-white">40</h2>
                  <p className="text-xs text-white font-semibold">Completed.</p>
                  <h2 className="font-semibold text-sm text-white">7</h2>
                </div>
                <div className="relative self-center">
                  <CircularProgressbar
                    value={(7 / 40) * 100}
                    text={Math.floor((7 / 40) * 100) + "%"}
                    className="text-white"
                    strokeWidth={10}
                    styles={{
                      root: {
                        width: "60",
                        height: "60",
                        position: "relative",
                        top: 0,
                        left: 0,
                        color: "white",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/*Student Directory  */}

          <div className="secContainer flex flex-col gap-4">
            {/*best performers */}
            <div className="flex gap-8">
              <div
                className="bestPeformers w-max rounded border"
                style={{
                  backgroundImage: `url(${tableChamp})`,
                  width: "730px",
                }}
              >
                <div className="flex justify-between py-2 px-2 text-white">
                  <h3>Best Performers</h3>
                  <SlOptionsVertical />
                </div>
                <div className="select intevla flex gap-7 pl-7 text-white">
                  <p
                    className={` cursor-pointer ${
                      interval === "Month"
                        ? "active border-b border-red-700 scale-105 text-red-600 duration-150"
                        : "border-b border-spacing-0"
                    }`}
                    onClick={() => {
                      setInterval("Month");
                    }}
                  >
                    Month
                  </p>
                  <p
                    className={` cursor-pointer ${
                      interval === "Year"
                        ? "active border-b border-red-700 scale-105 text-red-600 duration-150"
                        : "border-b border-spacing-0"
                    }`}
                    onClick={() => {
                      setInterval("Year");
                    }}
                  >
                    Year
                  </p>
                </div>
                {interval === "Month" ? (
                  <div className="Table p-2">
                    <Table className="divide-y">
                      <Table.Head className=" text-white">
                        <Table.HeadCell className="py-1 pl-0 pr-0 w-min bg-transparent dark:bg-transparent">
                          Photo
                        </Table.HeadCell>
                        <Table.HeadCell className="py-1 pl-0 left-0 w-32 bg-transparent overflow-hidden truncate dark:bg-transparent">
                          Student Name
                        </Table.HeadCell>
                        <Table.HeadCell className="py-1 pl-2 w-32 bg-transparent dark:bg-transparent">
                          Email
                        </Table.HeadCell>
                        <Table.HeadCell className="py-1 pl-2 w-32 bg-transparent dark:bg-transparent">
                          Standard
                        </Table.HeadCell>
                        <Table.HeadCell className="py-1 pl-2 w-32 bg-transparent dark:bg-transparent">
                          Rank
                        </Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="text-white">
                        <Table.Row>
                          <Table.Cell className="pl-2 py-1">
                            <Avatar
                              size="xs"
                              img={currentUser.profilePicture}
                              rounded
                              className=" rounded"
                            />
                          </Table.Cell>
                          <Table.Cell className="pl-0 py-1 w-32 whitespace-nowrap overflow-hidden text-white font-medium">
                            {currentUser.firstName} {currentUser.lastName}
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1 text-gray-200 font-mono">
                            {currentUser.email}
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1 text-gray-50 font-mono">
                            10th Grade
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1">
                            <ProgressBar
                              completed={75}
                              bgColor="gold"
                              customLabelStyles={{ color: "black" }}
                              maxCompleted={100}
                              customLabel="75%"
                              height="10px"
                              width="200px"
                              labelSize="10px"
                              barContainerClassName="bg-white rounded w-40 h-fit"
                            />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell className="pl-2 py-1">
                            <Avatar
                              size="xs"
                              img={currentUser.profilePicture}
                              rounded
                              className=""
                            />
                          </Table.Cell>
                          <Table.Cell className="pl-0 py-1 w-32 whitespace-nowrap overflow-hidden text-white font-medium">
                            {currentUser.firstName} {currentUser.lastName}
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1 text-gray-200 font-mono">
                            {currentUser.email}
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1 text-gray-50 font-mono">
                            12th Grade
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1">
                            <ProgressBar
                              completed={98}
                              bgColor="gold"
                              customLabelStyles={{ color: "black" }}
                              maxCompleted={100}
                              customLabel="98%"
                              height="10px"
                              width="200px"
                              labelSize="10px"
                              barContainerClassName="bg-white rounded w-40 h-fit"
                            />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell className="pl-2 py-1">
                            <Avatar size="xs" img={logo} rounded className="" />
                          </Table.Cell>
                          <Table.Cell className="pl-0 py-1 w-32 whitespace-nowrap overflow-hidden text-white font-medium">
                            {currentUser.firstName} {currentUser.lastName}
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1 text-gray-200 font-mono">
                            {currentUser.email}
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1 text-gray-50 font-mono">
                            8th Grade
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1">
                            <ProgressBar
                              completed={85}
                              maxCompleted={100}
                              bgColor="gold"
                              customLabelStyles={{ color: "black" }}
                              customLabel="85%"
                              height="10px"
                              width="200px"
                              labelSize="10px"
                              barContainerClassName="bg-white rounded w-40 h-fit"
                            />
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </div>
                ) : (
                  <div className="Table p-2">
                    <Table className="divide-y">
                      <Table.Head className=" text-white">
                        <Table.HeadCell className="py-1 pl-0 pr-0 w-min bg-transparent dark:bg-transparent">
                          Photo
                        </Table.HeadCell>
                        <Table.HeadCell className="py-1 pl-0 left-0 w-32 bg-transparent overflow-hidden truncate dark:bg-transparent">
                          Student Name
                        </Table.HeadCell>
                        <Table.HeadCell className="py-1 pl-2 w-32 bg-transparent dark:bg-transparent">
                          Email
                        </Table.HeadCell>
                        <Table.HeadCell className="py-1 pl-2 w-32 bg-transparent dark:bg-transparent">
                          Standard
                        </Table.HeadCell>
                        <Table.HeadCell className="py-1 pl-2 w-32 bg-transparent dark:bg-transparent">
                          Rank
                        </Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="text-white">
                        <Table.Row>
                          <Table.Cell className="pl-2 py-1">
                            <Avatar
                              size="xs"
                              img={currentUser.profilePicture}
                              rounded
                              className=" rounded"
                            />
                          </Table.Cell>
                          <Table.Cell className="pl-0 py-1 w-32 whitespace-nowrap overflow-hidden text-white font-medium">
                            {currentUser.firstName} {currentUser.lastName}
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1 text-gray-200 font-mono">
                            {currentUser.email}
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1 text-gray-50 font-mono">
                            10th Grade
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1">
                            <ProgressBar
                              completed={88}
                              bgColor="gold"
                              customLabelStyles={{ color: "black" }}
                              maxCompleted={100}
                              customLabel="75%"
                              height="10px"
                              width="200px"
                              labelSize="10px"
                              barContainerClassName="bg-white rounded w-40 h-fit"
                            />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell className="pl-2 py-1">
                            <Avatar
                              size="xs"
                              img={currentUser.profilePicture}
                              rounded
                              className=""
                            />
                          </Table.Cell>
                          <Table.Cell className="pl-0 py-1 w-32 whitespace-nowrap overflow-hidden text-white font-medium">
                            {currentUser.firstName} {currentUser.lastName}
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1 text-gray-200 font-mono">
                            {currentUser.email}
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1 text-gray-50 font-mono">
                            12th Grade
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1">
                            <ProgressBar
                              completed={90}
                              bgColor="gold"
                              customLabelStyles={{ color: "black" }}
                              maxCompleted={100}
                              customLabel="98%"
                              height="10px"
                              width="200px"
                              labelSize="10px"
                              barContainerClassName="bg-white rounded w-40 h-fit"
                            />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell className="pl-2 py-1">
                            <Avatar size="xs" img={logo} rounded className="" />
                          </Table.Cell>
                          <Table.Cell className="pl-0 py-1 w-32 whitespace-nowrap overflow-hidden text-white font-medium">
                            {currentUser.firstName} {currentUser.lastName}
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1 text-gray-200 font-mono">
                            {currentUser.email}
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1 text-gray-50 font-mono">
                            8th Grade
                          </Table.Cell>
                          <Table.Cell className="pl-2 py-1">
                            <ProgressBar
                              completed={92}
                              maxCompleted={100}
                              bgColor="gold"
                              customLabelStyles={{ color: "black" }}
                              customLabel="85%"
                              height="10px"
                              width="200px"
                              labelSize="10px"
                              barContainerClassName="bg-white rounded w-40 h-fit"
                            />
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </div>
                )}
              </div>

              {/* Library */}
              <div
                className="w-80 rounded bg-slate-100 object-cover border overflow-y-hidden pb-2 h-52"
                style={{ backgroundImage: `url(${libraryImg})` }}
              >
                <div className="flex justify-between py-2 px-2 items-center">
                  <h3 className="font-semibold text-white">Library</h3>
                  <p className="View All text-white text-sm">View All</p>
                </div>
                <div className="px-2">
                  <List unstyled>
                    <List.Item className="w-full h-fit border rounded hover:scale-100 duration-300 ease-in-out scale-95">
                      <div className="flex justify-between items-center px-1 py-1">
                        <div className="for-Avatar-header flex">
                          <Avatar img={logo} size={"sm"} />
                          <div className="for-Header flex flex-col pl-1 text-sm">
                            <h3 className="font-semibold text-white">
                              Literature
                            </h3>
                            <p className="text-xs">10th Grade</p>
                          </div>
                        </div>
                        <p className="text-sm flex gap-1 items-center pr-2 hover:text-white cursor-pointer duration-300 ease-in">
                          <HiBookOpen />
                          read
                        </p>
                      </div>
                    </List.Item>

                    <List.Item className="w-full h-fit border rounded hover:scale-100 duration-300 ease-in-out scale-95">
                      <div className="flex justify-between items-center px-1 py-1">
                        <div className="for-Avatar-header flex">
                          <Avatar img={logo} size={"sm"} />
                          <div className="for-Header flex flex-col pl-1 text-sm">
                            <h3 className="font-semibold text-white">
                              IsiZulu
                            </h3>
                            <p className="text-xs">10th Grade</p>
                          </div>
                        </div>
                        <p className="text-sm flex gap-1 items-center pr-2 hover:text-white cursor-pointer duration-300 ease-in">
                          <HiBookOpen />
                          read
                        </p>
                      </div>
                    </List.Item>

                    <List.Item className="w-full h-fit border rounded hover:scale-100 duration-300 ease-in-out scale-95">
                      <div className="flex justify-between items-center px-1 py-1">
                        <div className="for-Avatar-header flex">
                          <Avatar img={logo} size={"sm"} />
                          <div className="for-Header flex flex-col pl-1 text-sm">
                            <h3 className="font-semibold text-white">
                              Mathematics
                            </h3>
                            <p className="text-xs">10th Grade</p>
                          </div>
                        </div>
                        <p className="text-sm flex gap-1 items-center pr-2 hover:text-white cursor-pointer duration-300 ease-in">
                          <HiBookOpen />
                          read
                        </p>
                      </div>
                    </List.Item>

                    <List.Item className="w-full h-fit border rounded hover:scale-100 duration-300 ease-in-out scale-95">
                      <div className="flex justify-between items-center px-1 py-1">
                        <div className="for-Avatar-header flex">
                          <Avatar img={logo} size={"sm"} />
                          <div className="for-Header flex flex-col pl-1 text-sm">
                            <h3 className="font-semibold text-white">
                              English
                            </h3>
                            <p className="text-xs">10th Grade</p>
                          </div>
                        </div>
                        <p className="text-sm flex gap-1 items-center pr-2 hover:text-white cursor-pointer duration-300 ease-in">
                          <HiBookOpen />
                          read
                        </p>
                      </div>
                    </List.Item>
                  </List>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 px-10">
            <div
              className="w-80 rounded bg-slate-100 object-cover border overflow-y-hidden pb-2 h-52"
              style={{ backgroundImage: `url(${libraryImg})` }}
            >
              <div className="px-2 py-1">
                <h3 className="text-white">Recent Applications</h3>
              </div>
              <div className="px-2 pt-1">
                <List unstyled>
                  <List.Item className="w-full h-fit border rounded hover:scale-100 duration-300 ease-in-out scale-95">
                    <div className="flex justify-between items-center px-1 py-1">
                      <div className="for-Avatar-header flex">
                        <Avatar img={logo} size={"sm"} />
                        <div className="for-Header flex flex-col pl-1 text-sm">
                          <h3 className="font-semibold text-white">
                            {currentUser.firstName}
                          </h3>
                          <p className="text-xs">
                            {new Date(
                              currentUser.createdAt
                            ).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm flex gap-1 items-center pr-2 hover:text-white cursor-pointer duration-300 ease-in">
                        <FaLongArrowAltRight className="text-lg" />
                      </p>
                    </div>
                  </List.Item>

                  <List.Item className="w-full h-fit border rounded hover:scale-100 duration-300 ease-in-out scale-95">
                    <div className="flex justify-between items-center px-1 py-1">
                      <div className="for-Avatar-header flex">
                        <Avatar img={logo} size={"sm"} />
                        <div className="for-Header flex flex-col pl-1 text-sm">
                          <h3 className="font-semibold text-white">
                            Simphiwe
                          </h3>
                          <p className="text-xs">10th Grade</p>
                        </div>
                      </div>
                      <p className="text-sm flex gap-1 items-center pr-2 hover:text-white cursor-pointer duration-300 ease-in">
                        <FaLongArrowAltRight className="text-lg" />
                      </p>
                    </div>
                  </List.Item>

                  <List.Item className="w-full h-fit border rounded hover:scale-100 duration-300 ease-in-out scale-95">
                    <div className="flex justify-between items-center px-1 py-1">
                      <div className="for-Avatar-header flex">
                        <Avatar img={logo} size={"sm"} />
                        <div className="for-Header flex flex-col pl-1 text-sm">
                          <h3 className="font-semibold text-white">
                            Siphosenkosi
                          </h3>
                          <p className="text-xs">10th Grade</p>
                        </div>
                      </div>
                      <p className="text-sm flex gap-1 items-center pr-2 hover:text-white cursor-pointer duration-300 ease-in">
                        <FaLongArrowAltRight className="text-lg" />
                      </p>
                    </div>
                  </List.Item>

                  <List.Item className="w-full h-fit border rounded hover:scale-100 duration-300 ease-in-out scale-95">
                    <div className="flex justify-between items-center px-1 py-1">
                      <div className="for-Avatar-header flex">
                        <Avatar img={logo} size={"sm"} />
                        <div className="for-Header flex flex-col pl-1 text-sm">
                          <h3 className="font-semibold text-white">
                            Amahle
                          </h3>
                          <p className="text-xs">10th Grade</p>
                        </div>
                      </div>
                      <p className="text-sm flex gap-1 items-center pr-2 hover:text-white cursor-pointer duration-300 ease-in">
                        <FaLongArrowAltRight className="text-lg" />
                      </p>
                    </div>
                  </List.Item>
                </List>
              </div>
            </div>
            <div className="w-80 h-52 bg-black rounded border ">
              <div className="h3Element px-2 py-1 flex justify-between items-center font-semibold">
                <h3 className="text-white">class Performance</h3>
                <Dropdown label="select Grade" inline>
                  <Dropdown.Item>grade 8</Dropdown.Item>
                  <Dropdown.Item>grade 9</Dropdown.Item>
                  <Dropdown.Item>grade 10</Dropdown.Item>
                  <Dropdown.Item>grade 11</Dropdown.Item>
                  <Dropdown.Item>grade 12</Dropdown.Item>
                </Dropdown>
              </div>
              <div className="containsbarSide flex justify-between px-5 pt-5 items-center">
                <div className="Bar">
                  <CircularProgressbar
                    value={40}
                    text="40%"
                    strokeWidth={6}
                    className="w-28 pl-3"
                  />
                </div>
                <div className="att flex flex-col gap-2">
                  <div className="py-1 px-1 w-20 text-sm text-white bg-sky-200 rounded items-center flex flex-col justify-center">
                    <p className="text-xs py-0 ">Attendance</p>
                    <p className="text-xs pt-0">Avarage</p>
                    <p className="text-lg font-semibold">95%</p>
                  </div>
                  <div className="py-1 px-1 w-20 text-sm text-white bg-sky-200 rounded flex flex-col justify-center items-center">
                    <p className="text-xs pt-0">Edu. Grade</p>
                    <p className="text-xs pt-0">Avarage</p>
                    <p className="text-lg font-semibold">B+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 h-52 bg-black rounded border"></div>
          </div>
        </div>
      ) : (
        "not admin"
      )}
    </div>
  );
}
/**
  <div className="">
        <div className="bg-gray-200 w-48 px-2 rounded bg-cover" style={{
          backgroundImage: `url(${logo})`
        }}>
          <h3 className="text-white text-1xl font-semibold">Student Attendance</h3>
          <div className="flex gap-4 items-center mt-2 justify-between">
            <div className="">
              <p className="text-xs text-white">Present No.</p>
              <h2 className="font-semibold text-sm text-white">4782</h2>
              <p className="text-xs text-white">Absent No.</p>
              <h2 className="font-semibold text-sm text-white">437</h2>
            </div>
            <div className="relative self-center">
              <CircularProgressbar value={75} text={"75%"} className="text-white" strokeWidth={10} styles={{
                root:{
                  width: '60',
                  height: '60',
                  position: 'relative',
                  top: 0,
                  left: 0,
                  color: 'white',
                }
              }}/>
            </div>
          </div>
        </div>
      </div>
 */
