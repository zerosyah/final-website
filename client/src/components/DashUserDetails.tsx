import {useEffect, useState} from 'react'
import { Avatar, Button, Modal, Select } from 'flowbite-react';
import LineChart from "./PieChart"
import { Model } from 'mongoose';

function DashUserDetails({selectedUser}: any) {
    const [user, setUser] = useState({});
    const [details, setDetails] = useState({});
    const [parent, setParent] = useState(false);
    const [school, setSchool] = useState(false);
    const [medic, setMedic] = useState(false);
    const [other, setOther] = useState(false);

    useEffect(() =>{
        // fetch student from more details
        const fetchStudent = async () =>{
            // fetch student from more details using id
            const res = await fetch(`/api/user/getUsersById/${selectedUser}`);

            // get data from database and change to json
            const data = await res.json();
            
            // if response was success
            if(res.ok){
                // set details
                setDetails(data.users);
            }
        }

        // fetch user
        const fetchGet = async () =>{
            // fetch user using id from oirginal database
            const res = await fetch(`/api/user/get/${selectedUser}`);

            // get data from database and change to json
            const data = await res.json();

            // if response was success
            if(res.ok){
                // set user
                setUser(data.users);
            }
        }

        // call the function
        fetchStudent();

        // call the function
        fetchGet();
    }, [selectedUser]);

    const handleParent = () =>{
        setParent(true);
    }
    const handleSchool = () =>{
        setSchool(true);
    }
    const handleMedic = () =>{
        setMedic(true);
    }
    const handleOther = () =>{
        setOther(true);
    }

  return (
    <div className='Main-div'>
        <div className="Sub-Main-Div w-full pb-3 bg-stone-700 rounded" style={{height: '94.7vh'}}>
            <div className="herd flex gap-5 items-center bg-slate-500 px-4 py-4 rounded">
                {/* @ts-ignore */}
                <Avatar size={"lg"} img={user.profilePicture} rounded className='' bordered/>
                <div className="Name-Id">
                    {/* @ts-ignore */}
                    <p className='text-white text-lg font-semibold'>{user.firstName} {user.lastName}</p>
                    <div className="flex gap-2 text-sm text-gray-400">
                        {/* @ts-ignore */}
                        <span>Grade 9</span><span>|</span><span>student ID: {details.idNumber}</span>
                    </div>
                </div>
            </div>
            
            <div className="details mx-3 border rounded mt-2">
                <div className="">
                <h3 className="px-4 mt-2 underline">Basic Details</h3>
                <div className="flex gap-20 px-4 mt-2">
                    <div className="gender">
                        <p className="text-xs text-gray-400">Gender</p>
                        {/* @ts-ignore */}
                        <p className=" font-semibold">{details.gender}</p>
                    </div>
                    <div className="Dob">
                        <p className="text-xs text-gray-400">Date Of Birth</p>
                        {/* @ts-ignore */}
                        <p className=" font-semibold">{details.dob}</p>
                    </div>
                    <div className="">
                        <p className="text-xs text-gray-400">Religion</p>
                        {/* @ts-ignore */}
                        <p className=" font-semibold">{details.studentReligion}</p>
                    </div>
                    <div className="">
                        <p className="text-xs text-gray-400"> Disability</p>
                        {/* @ts-ignore */}
                        <p className=" font-semibold">{details.disability}</p>
                    </div>
                    <div className="">
                        <p className="text-xs text-gray-400"> Emergency</p>
                        {/* @ts-ignore */}
                        <p className=" font-semibold">{details.EmergencyNumber}</p>
                    </div>
                    <div className="">
                        <p className="text-xs text-gray-400"> Phone</p>
                        {/* @ts-ignore */}
                        <p className=" font-semibold">{details.homeNumber}</p>
                    </div>
                    
                </div>
                </div>

                <div className="pb-3">
                <div className="flex gap-20 px-4 mt-2 items-center overflow-x-hidden">
                    <div className="gender">
                        <p className="text-xs text-gray-400">Address</p>
                        {/* @ts-ignore */}
                    <p className="truncate">{details.city}</p>
                    <Modal show={false}>
                        <Modal.Header>Student Address</Modal.Header>
                        <Modal.Body>
                            <p className='underline'>Address:</p>
                            {/* @ts-ignore */}
                            <p className="">{details.streetAddress}</p>
                            {/* @ts-ignore */}
                            <p>{details.city}</p>

                        </Modal.Body>
                    </Modal>
                    </div>
                    <div className="Dob">
                        <p className="text-xs text-gray-400">Race</p>
                        {/* @ts-ignore */}
                        <p className=" font-semibold">{details.race}</p>
                    </div>
                    <div className="">
                        <p className="text-xs text-gray-400">Home Number</p>
                        {/* @ts-ignore */}
                        <p className=" font-semibold">{details.homeNumber}</p>
                    </div>
                    <div className="">
                        <p className="text-xs text-gray-400">Country</p>
                        {/* @ts-ignore */}
                        <p className=" font-semibold">{details.countryOfOrigin}</p>
                    </div>
                    <div className=" truncate">
                        <p className="text-xs text-gray-400">Email</p>
                        {/* @ts-ignore */}
                        <p className=" font-semibold">{user.email}</p>
                    </div>
                </div>
                </div>

            </div>

            <div className="flex border mx-3 mt-2 rounded p-2 gap-4 items-center">
                <Select id='subject' sizing={"xs"}>
                    <option>Accounting</option>
                    <option>Busness Studies</option>
                    <option>Consumer Studies</option>
                    <option>Dreama</option>

                </Select>
                <Select id='Month'>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                </Select>
                <div className="text-xs">
                    <p className="">Showing Subject Marks of January.</p>
                    <p className="">Error wass found here</p>
                </div>
                <div className="">
                    <LineChart/>
                </div>
            </div>
            <div className="border flex flex-col gap-2 mx-3 mt-2 p-2 rounded">
                <h2 className="">
                    Other Details
                </h2>
                <div className="flex gap-4">
                    <Button onClick={handleSchool}>Prev School</Button>
                    <div className="">
                    <Button onClick={handleMedic}>Medical Info</Button>
                    </div>
                    <div className="">
                    <Button onClick={handleParent}>Parents/Gudian</Button>
                    </div>
                    <Button onClick={handleOther}>Other!!</Button>
                </div>
            </div>
        </div>

        <div className="">
        <Modal show={parent} onClose={() => setParent(false)}>
                <Modal.Header>Parents/Guardian Details</Modal.Header>
                <Modal.Body>
                    <div className="flex justify-evenly border">
                    <div className="">
                        <h2 className="underline font-semibold">Title:</h2>
                        {/* @ts-ignore */}
                        <p className="text-sm ">{details.parentTitle}</p>
                    </div>
                    <div className="">
                        <h2 className="underline font-semibold">Initials:</h2>
                        {/* @ts-ignore */}
                        <p className="text-sm ">{details.parentInitials}</p>
                    </div>
                    <div className="">
                        <h2 className="underline font-semibold">Language:</h2>
                        {/* @ts-ignore */}
                        <p className="text-sm ">{details.parentHomeLanguage}</p>
                    </div>
                    </div>

                    <div className="flex justify-evenly border">
                    <div className="">
                        <h2 className="underline font-semibold">First Name:</h2>
                        {/* @ts-ignore */}
                        <p className="text-sm ">{details.parentFirstName}</p>
                    </div>
                    <div className="">
                        <h2 className="underline font-semibold">Second Name:</h2>
                        {/* @ts-ignore */}
                        <p className="text-sm ">{details.parentSecondName}</p>
                    </div>
                    <div className="">
                        <h2 className="underline font-semibold">ID Number:</h2>
                        {/* @ts-ignore */}
                        <p className="text-sm ">{details.parentId}</p>
                    </div>
                    </div>

                    <div className="flex justify-evenly border">
                    <div className="">
                        <h2 className="underline font-semibold">Email:</h2>
                        {/* @ts-ignore */}
                        <p className="text-sm ">{details.parentEmail}</p>
                    </div>
                    <div className="">
                        <h2 className="underline font-semibold">First Number:</h2>
                        {/* @ts-ignore */}
                        <p className="text-sm ">{details.parentSecondName}</p>
                    </div>
                    <div className="">
                        <h2 className="underline font-semibold">Second Number:</h2>
                        {/* @ts-ignore */}
                        <p className="text-sm ">{details.parentId}</p>
                    </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={school} onClose={() => setSchool(false)}>
                <Modal.Header>Previous School Details</Modal.Header>
                <Modal.Body>
                    <h2 className="font-semibold underline text-lg">School Name:</h2>
                    {/* @ts-ignore */}
                    <p className="text-sm">{details.previousSchoolName}</p>

                    <h2 className="font-semibold underline text-lg">School Address:</h2>
                    {/* @ts-ignore */}
                    <p className="text-sm">{details.previousSchoolAddress}</p>

                    <h2 className='font-semibold underline text-lg'>Zip Code:</h2>
                    {/* @ts-ignore */}
                    <p className="text-sm">{details.previousSchoolZipCode}</p>

                    <h2 className="font-semibold underline text-lg">Country:</h2>
                     {/* @ts-ignore */}   
                    <p className="text-sm">{details.previousSchoolProvince}, {details.previousSchoolCountry}</p>
                </Modal.Body>
            </Modal>

            <Modal show={medic} onClose={() => setMedic(false)}>
                <Modal.Header>Medical Details</Modal.Header>
                <Modal.Body>
                    <div className="flex justify-evenly border">
                        <div className="">
                            <h2 className="underline font-semibold">Medical Aid Number:</h2>
                            {/* @ts-ignore */}
                            <p className="text-sm ">{details.medicalAidNumber}</p>
                        </div>
                        <div className="">
                            <h2 className="underline font-semibold">Medical Aid Name:</h2>
                            {/* @ts-ignore */}
                            <p className="text-sm ">{details.medicalAidName}</p>
                        </div>
                        <div className="">
                            <h2 className="underline font-semibold">Medical Aid Member:</h2>
                            {/* @ts-ignore */}
                            <p className="text-sm ">{details.medicalAidMainMember}</p>
                        </div>
                    </div>
                    <div className="flex justify-around border">
                    <div className="">
                            <h2 className="underline font-semibold">Doctor Name:</h2>
                            {/* @ts-ignore */}
                            <p className="text-sm ">{details.medicalAidDoctorName}</p>
                        </div>
                        <div className="">
                            <h2 className="underline font-semibold">Doctor Number:</h2>
                            {/* @ts-ignore */}
                            <p className="text-sm ">{details.medicalAidDoctorNumber}</p>
                        </div>
                        <div className="">
                            <h2 className="underline font-semibold">Doctor Address:</h2>
                            {/* @ts-ignore */}
                            <p className="text-sm ">{details.medicalAidDoctorAddress}</p>
                        </div>
                    </div>
                    <div className="flex justify-around border">
                    <div className="">
                            <h2 className="underline font-semibold">Counseling:</h2>
                            {/* @ts-ignore */}
                            <p className="text-sm uppercase">{details.studentRequiringCounseling}</p>
                        </div>
                        <div className="">
                            <h2 className="underline font-semibold">Medical Condion:</h2>
                            {/* @ts-ignore */}
                            <p className="text-sm uppercase">{details.studentMedicalCondition}</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={other} onClose={() => setOther(false)}>
                <Modal.Header>
                    Other information
                </Modal.Header>
                <Modal.Body>
                    <div className="flex justify-around">
                    <div className="border p-2">
                    <div className="">
                        <h2 className="underline font-semibold">Siblings In School:</h2>
                        {/* @ts-ignore */}
                        <p className="text-sm ">{details.numberOfSiblingsInSchool}</p>
                    </div>
                    <div className="">
                        <h2 className="underline font-semibold">Position In Family:</h2>
                        {/* @ts-ignore */}
                        <p className="text-sm ">{details.positionInTheFamily}</p>
                    </div>
                    <div className="">
                        <h2 className="underline font-semibold">Sibling 1:</h2>
                        {/* @ts-ignore */}
                        <p className="text-sm ">{details.firstSiblingName}</p>
                    </div>
                    <div className="">
                        <h2 className="underline font-semibold">Sibling 2:</h2>
                        {/* @ts-ignore */}
                        <p className="text-sm ">{details.secondSiblingName}</p>
                    </div>
                    <div className="">
                        <h2 className="underline font-semibold">Sibling 3:</h2>
                        {/* @ts-ignore */}
                        <p className="text-sm ">{details.thirdSiblingName}</p>
                    </div>
                    </div>
                    <div className="">
                        <div className="border p-2">
                            <h2 className="underline font-semibold">Home Address:</h2>
                            {/* @ts-ignore */}
                            <p className="text-sm ">{details.streetAddress}</p>
                        </div>
                    </div>
                    </div>
                    
                </Modal.Body>
            </Modal>

            
        </div>

    </div>
  )
}

export default DashUserDetails