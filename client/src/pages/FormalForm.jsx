import React from 'react'
import { motion } from 'framer-motion'
import { Label, TextInput, Dropdown, Select, Datepicker } from 'flowbite-react'

export default function FormalForm() {
  return (
    <div className='m-2 flex flex-col gap-2'>
        <div className="pl-2 border">
            <h3 className="uppercase text-lg font-semibold">School registration form</h3>
        </div>
        <div className="px-2 border">
            <p className="uppercase text-red-400">
                the following form must be completed in full. All changes to be initiated or signed by parents/guardian. compliting the form doess not neccessarily signify acceptance of the school.
            </p>
        </div>
        <div className="px-2 border py-2 flex flex-col w-full md:justify-evenly md:flex-row">
            <div className="w-full justify-between px-2 py-1 flex border items-center">
                <Label className='whitespace-nowrap px-2'>grade applied for:</Label>
                <Select sizing={"sm"}>
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                </Select>   
            </div>
            <div className="w-full justify-between px-2 py-1 flex border items-center">
                <Label className='whitespace-nowrap px-2'>Highest Grade passed:</Label>
                <Select sizing={"sm"}>
                    
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                </Select>   
            </div>
            <div className="w-full justify-between px-2 py-1 flex border items-center">
                <Label className='whitespace-nowrap px-2'>Year Grade was passed:</Label>
                <Datepicker minDate={new Date(2023, 0, 1)} maxDate={new Date(2023, 3, 30)} sizing={"sm"} />   
            </div>
            <div className="w-full justify-between px-2 py-1 flex border items-center">
                <Label className='whitespace-nowrap px-2'>grade applied for:</Label>
                <Select sizing={"sm"}>
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                    <option>Grade 12</option>
                </Select>   
            </div>    
        </div>
        <div className="parent flex justify-evenly">
            <div className="child-1 border p-2 w-full flex flex-col gap-1">
            <div className="flex items-center border p-1 w-full gap-9">
                    <label htmlFor='lastName' className='font-semibold whitespace-nowrap'>Last Name:</label>
                    <TextInput className='w-full pl-6' placeholder='Mazibuko' id='lastName' sizing={"xs"}/>
                </div>
                <div className="flex items-center border p-1 w-full gap-9">
                    <label htmlFor='firstName' className='font-semibold whitespace-nowrap'>First Name:</label>
                    <TextInput className='w-full pl-6' placeholder='Siyamthanda' id='firstName' sizing={"xs"}/>
                </div>
                <div className="flex items-center border p-1 w-full gap-9">
                    <label htmlFor='dateOfBirth' className='font-semibold whitespace-nowrap'>Date of Birth:</label>
                    <Datepicker id='dateOfBirth' minDate={new Date(2023, 0, 1)} maxDate={new Date(2023, 3, 30)} sizing={"xs"} className='w-full pl-6'/>
                </div>
                <div className="flex items-center border p-1 w-full gap-9">
                    <label htmlFor='race' className='font-semibold'>Surname:</label>
                    <TextInput className='w-full pl-6' id='race' placeholder='Black' sizing={"xs"}/>
                </div>
            </div>
            <div className="child-2 border p-2 w-full flex flex-col gap-1">
            <div className="flex items-center border p-1 w-full gap-9">
                    <label htmlFor='nickName' className='font-semibold whitespace-nowrap'>Nickname:</label>
                    <TextInput className='w-full pl-6' placeholder='Mazibuko...' id='nickName' sizing={"xs"}/>
                </div>
                <div className="flex items-center border p-1 w-full gap-9">
                    <label htmlFor='otherName' className='font-semibold whitespace-nowrap'>Other Name:</label>
                    <TextInput className='w-full pl-6' placeholder='Siyamthanda...' id='otherName' sizing={"xs"}/>
                </div>
                <div className="flex items-center border p-1 w-full gap-9">
                    <label htmlFor='gender' className='font-semibold whitespace-nowrap'>Gender:</label>
                    <TextInput className='w-full pl-6' placeholder='Male...' id='gender' sizing={"xs"}/>
                </div>
                <div className="flex items-center border p-1 w-full gap-9">
                    <label htmlFor='idNumber' className='font-semibold whitespace-nowrap'>ID Number:</label>
                    <TextInput className='w-full pl-6' id='idNumber' placeholder='012345678909876' sizing={"xs"}/>
                </div>
            </div>
        </div>
    </div>
  )
}
