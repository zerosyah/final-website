import { TextInput } from 'flowbite-react';
import React from 'react'
import { SlOptions } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { Table, Avatar } from 'flowbite-react';
import LineChart from "./PieChart"


export default function DashUser() {
  return (
    <div className='Main-div flex gap-4 m-4'>
        <div className="Sub-Main-Div px-2 py-2 w-fit h-fit flex flex-col gap-2 rounded bg-teal-100">
            <div className="header-options flex justify-between text-black font-semibold items-center">
                <h3 className="">Students</h3>
                <SlOptions/>
            </div>
            <div className="px-2">
                <TextInput placeholder='search for students or ID' icon={HiOutlineSearch}/>
            </div>
            <div className="List-students">
                <Table hoverable className='bg-transparent text-xs'>
                    <Table.Head className='text-xs bg-transparent'>
                        <Table.HeadCell className='px-0 bg-transparent lowercase'>Photo</Table.HeadCell>
                        <Table.HeadCell className='pl-0 bg-transparent lowercase'>Name</Table.HeadCell>
                        <Table.HeadCell className='pl-4 bg-transparent lowercase'>Id</Table.HeadCell>
                        <Table.HeadCell className='pl-0 pr-0 bg-transparent lowercase'>year</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell className='pl-0 py-1'><Avatar size={"xs"} rounded className='px-0'/></Table.Cell>
                            <Table.Cell className='pl-0 py-1 text-xs'>Siyamthanda maphumulo</Table.Cell>
                            <Table.Cell className='pl-4 py-1 text-xs'>E-4t3400</Table.Cell>
                            <Table.Cell className='pl-0 pr-0 py-1'>2023</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className='pl-0 py-1'><Avatar size={"xs"} rounded className='px-0'/></Table.Cell>
                            <Table.Cell className='pl-0 py-1 text-xs'>Siyamthanda maphumulo</Table.Cell>
                            <Table.Cell className='pl-4 py-1 text-xs'>E-4t3400</Table.Cell>
                            <Table.Cell className='pl-0 pr-0 py-1'>2023</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className='pl-0 py-1'><Avatar size={"xs"} rounded className='px-0'/></Table.Cell>
                            <Table.Cell className='pl-0 py-1 text-xs'>Siyamthanda maphumulo</Table.Cell>
                            <Table.Cell className='pl-4 py-1 text-xs'>E-4t3400</Table.Cell>
                            <Table.Cell className='pl-0 pr-0 py-1'>2023</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className='pl-0 py-1'><Avatar size={"xs"} rounded className='px-0'/></Table.Cell>
                            <Table.Cell className='pl-0 py-1 text-xs'>Siyamthanda maphumulo</Table.Cell>
                            <Table.Cell className='pl-4 py-1 text-xs'>E-4t3400</Table.Cell>
                            <Table.Cell className='pl-0 pr-0 py-1'>2023</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className='pl-0 py-1'><Avatar size={"xs"} rounded className='px-0'/></Table.Cell>
                            <Table.Cell className='pl-0 py-1 text-xs'>Siyamthanda maphumulo</Table.Cell>
                            <Table.Cell className='pl-4 py-1 text-xs'>E-4t3400</Table.Cell>
                            <Table.Cell className='pl-0 pr-0 py-1'>2023</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className='pl-0 py-1'><Avatar size={"xs"} rounded className='px-0'/></Table.Cell>
                            <Table.Cell className='pl-0 py-1 text-xs'>Siyamthanda maphumulo</Table.Cell>
                            <Table.Cell className='pl-4 py-1 text-xs'>E-4t3400</Table.Cell>
                            <Table.Cell className='pl-0 pr-0 py-1'>2023</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className='pl-0 py-1'><Avatar size={"xs"} rounded className='px-0'/></Table.Cell>
                            <Table.Cell className='pl-0 py-1 text-xs'>Siyamthanda maphumulo</Table.Cell>
                            <Table.Cell className='pl-4 py-1 text-xs'>E-4t3400</Table.Cell>
                            <Table.Cell className='pl-0 pr-0 py-1'>2023</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className='pl-0 py-1'><Avatar size={"xs"} rounded className='px-0'/></Table.Cell>
                            <Table.Cell className='pl-0 py-1 text-xs'>Siyamthanda maphumulo</Table.Cell>
                            <Table.Cell className='pl-4 py-1 text-xs'>E-4t3400</Table.Cell>
                            <Table.Cell className='pl-0 pr-0 py-1'>2023</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className='pl-0 py-1'><Avatar size={"xs"} rounded className='px-0'/></Table.Cell>
                            <Table.Cell className='pl-0 py-1 text-xs'>Siyamthanda maphumulo</Table.Cell>
                            <Table.Cell className='pl-4 py-1 text-xs'>E-4t3400</Table.Cell>
                            <Table.Cell className='pl-0 pr-0 py-1'>2023</Table.Cell>
                        </Table.Row>
                        
                        
                    </Table.Body>
                </Table>
            </div>
        </div>
        <div className="Sub-Main-Div w-full mb-3 pb-3 h-fit bg-stone-700 rounded">
            <div className="herd flex gap-5 items-center bg-slate-500 px-4 py-4 rounded">
                <Avatar size={"lg"} rounded className='' bordered/>
                <div className="Name-Id">
                    <p className='text-white text-lg font-semibold'>Siyamthanda Maphumulo</p>
                    <div className="flex gap-2 text-sm text-gray-400">
                        <span>Grade 9</span><span>|</span><span>student ID:  E-4t3400</span>
                    </div>
                </div>
            </div>

            <div className="details mx-3 mt-3 border rounded">
                <div className="">
                <h3 className="px-4 mt-2">Basic Details</h3>
                <div className="flex gap-20 px-4 mt-2">
                    <div className="gender">
                        <p className="text-xs text-gray-400">Gender</p>
                        <p className=" font-semibold">Male</p>
                    </div>
                    <div className="Dob">
                        <p className="text-xs text-gray-400">Date Of Birth</p>
                        <p className=" font-semibold">29-09-2001</p>
                    </div>
                    <div className="">
                        <p className="text-xs text-gray-400">Religion</p>
                        <p className=" font-semibold">Christian</p>
                    </div>
                    <div className="">
                        <p className="text-xs text-gray-400"> Disabilty</p>
                        <p className=" font-semibold">No</p>
                    </div>
                </div>
                </div>

                <div className="pb-3">
                <div className="flex gap-20 px-4 mt-2">
                    <div className="gender">
                        <p className="text-xs text-gray-400">Address</p>
                        <p className=" font-semibold text-sm pb-0 mb-0 truncate  w-32">50802 Mntoyedwa road, umbumbulu 4105</p>
                    </div>
                    <div className="Dob">
                        <p className="text-xs text-gray-400">Father</p>
                        <p className=" font-semibold">0123456789</p>
                    </div>
                    <div className="">
                        <p className="text-xs text-gray-400">Mother</p>
                        <p className=" font-semibold">0123456789</p>
                    </div>
                    <div className="">
                        <p className="text-xs text-gray-400">Class Teacher</p>
                        <p className=" font-semibold">No</p>
                    </div>
                </div>
                </div>

            </div>
            <div className="pt-3 px-3">
                <LineChart/>
            </div>
        </div>

    </div>
  )
}
