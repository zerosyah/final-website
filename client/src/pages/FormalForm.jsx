import React, {useState} from "react";
import { motion } from "framer-motion";
import {
  Label,
  TextInput,
  Dropdown,
  Select,
  Datepicker,
  Textarea,
  Checkbox,
} from "flowbite-react";

export default function FormalForm() {
  const [formData, setFormData] = useState({});
  const [selectedDate, setSelectedDate] = useState('');

  const datePicker = (data)=>{
    setSelectedDate(data)
    setFormData({...formData, dates: selectedDate})
  }
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  const handleDateChange = (date) => {
    setSelectedDate(date)
    setFormData({...formData, dates: selectedDate})
    console.log(selectedDate);
  }
  console.log(formData);
  console.log(selectedDate);
  return (
    <div className="m-2 flex flex-col gap-2 w-fit">
      <div className="pl-2 border">
        <h3 className="uppercase text-lg font-semibold">
          School registration form
        </h3>
      </div>
      <div className="px-2 border">
        <p className="uppercase text-red-400">
          the following form must be completed in full. All changes to be
          initiated or signed by parents/guardian. compliting the form doess not
          neccessarily signify acceptance of the school.
        </p>
      </div>
      <div className="px-2 border py-2 flex flex-col w-full md:justify-evenly md:flex-row">
        <div className="w-full justify-between px-2 py-1 flex border items-center">
          <Label className="whitespace-nowrap px-2">grade applied for:</Label>
          <Select sizing={"sm"} id="gradeAppliedFor" onChange={handleChange}>
            <option value={"Grade 8"}>select</option>
            <option>Grade 8</option>
            <option>Grade 9</option>
            <option>Grade 10</option>
            <option>Grade 11</option>
          </Select>
        </div>
        <div className="w-full justify-between px-2 py-1 flex border items-center">
          <Label className="whitespace-nowrap px-2">
            Highest Grade passed:
          </Label>
          <Select sizing={"sm"} id="highestGradePassed" onChange={handleChange}>
            <option value={"Grade 7"}>select</option>
            <option>Grade 7</option>
            <option>Grade 8</option>
            <option>Grade 9</option>
            <option>Grade 10</option>
            <option>Grade 11</option>
          </Select>
        </div>
        <div className="w-full justify-between px-2 py-1 flex border items-center">
          <Label className="whitespace-nowrap px-2">
            Year Grade was passed:
          </Label>
          <Datepicker
            sizing={"sm"}
            id="yearGradeWasPassed"

            onChange={datePicker}
          />
        </div>
        <div className="w-full justify-between px-2 py-1 flex border items-center">
          <Label className="whitespace-nowrap px-2">repeating Grade:</Label>
          <Select sizing={"sm"} id="gradeRepeated" onChange={handleChange}>
            <option value={"No"}>select</option>
            <option>Yes</option>
            <option>No</option>
          </Select>
        </div>
      </div>
      <div className="parent flex flex-col md:flex-row md:justify-evenly">
        <div className="child-1 border p-2 w-full flex flex-col gap-1">
          <div className="flex items-center border p-1 w-full gap-9">
            <label
              htmlFor="lastName"
              className="font-semibold whitespace-nowrap"
            >
              Last Name:
            </label>
            <TextInput
              className="w-full pl-6"
              placeholder="Mazibuko"
              id="lastName"
              sizing={"xs"}
            />
          </div>
          <div className="flex items-center border p-1 w-full gap-9">
            <label
              htmlFor="firstName"
              className="font-semibold whitespace-nowrap"
            >
              First Name:
            </label>
            <TextInput
              className="w-full pl-6"
              placeholder="Siyamthanda"
              id="firstName"
              sizing={"xs"}
            />
          </div>
          <div className="flex items-center border p-1 w-full gap-9">
            <label
              htmlFor="dateOfBirth"
              className="font-semibold whitespace-nowrap"
            >
              Date of Birth:
            </label>
            <Datepicker
              id="dateOfBirth"
              sizing={"xs"}
              className="w-full pl-6"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="flex items-center border p-1 w-full gap-9">
            <label htmlFor="race" className="font-semibold">
              Race:
            </label>
            <TextInput
              className="w-full pl-6"
              id="race"
              placeholder="Black"
              sizing={"xs"}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center border p-1 w-full gap-9">
            <label htmlFor="race" className="font-semibold whitespace-nowrap">
              Country{" "}
              <span className="md:visible text-red-500" hidden>
                of Residdence
              </span>
              :
            </label>
            <TextInput
              className="w-full pl-6"
              id="race"
              placeholder="South Africa..."
              sizing={"xs"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="child-2 border p-2 w-full flex flex-col gap-1">
          <div className="flex items-center border p-1 w-full gap-9">
            <label
              htmlFor="nickName"
              className="font-semibold whitespace-nowrap"
            >
              Nickname:
            </label>
            <TextInput
              className="w-full pl-6"
              placeholder="Mazibuko..."
              id="nickName"
              sizing={"xs"}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center border p-1 w-full gap-9">
            <label
              htmlFor="otherName"
              className="font-semibold whitespace-nowrap"
            >
              Other Name:
            </label>
            <TextInput
              className="w-full pl-6"
              placeholder="Siyamthanda..."
              id="otherName"
              sizing={"xs"}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center border p-1 w-full gap-9">
            <label htmlFor="gender" className="font-semibold whitespace-nowrap">
              Gender:
            </label>
            <TextInput
              className="w-full pl-6"
              placeholder="Male..."
              id="gender"
              sizing={"xs"}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center border p-1 w-full gap-9">
            <label
              htmlFor="idNumber"
              className="font-semibold whitespace-nowrap"
            >
              ID Number:
            </label>
            <TextInput
              className="w-full pl-6"
              id="idNumber"
              placeholder="012345678909876"
              sizing={"xs"}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="parent flex flex-col md:flex-row md:justify-evenly gap-4 p-2 border">
        <div className="child-1 w-full flex flex-col gap-1">
          <div className="address ">
            <Textarea rows={3} id="address" onChange={handleChange}/>
          </div>
          <div className="flex gap-9 w-full border p-1">
            <label htmlFor="city" className="whitespace-nowrap font-semibold">
              City/Suburb:
            </label>
            <TextInput
              id="city"
              placeholder="City"
              sizing={10}
              className="w-full pl-6 py-1"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="child-2 w-full flex flex-col gap-1">
          <div className="flex gap-9 items-center border">
            <label
              htmlFor="homeNumber"
              className="whitespace-nowrap pl-1 font-semibold"
            >
              Home Number:
            </label>
            <TextInput
              id="homeNumber"
              placeholder="0123456789"
              sizing={10}
              className="w-full pl-6 p-1"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-9 items-center border">
            <label
              htmlFor="EmergencyNumber"
              className="whitespace-nowrap pl-1 font-semibold"
            >
              Emergency Number:
            </label>
            <TextInput
              id="EmergencyNumber"
              placeholder="0123456789"
              sizing={10}
              className="w-full pl-6 p-1"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="border uppercase mt-1">
        <h3 className="font-semibold pl-2">Previous School Information</h3>
      </div>
      <div className="border p-2 flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <div className="border flex gap-9 items-center p-1">
            <label
              htmlFor="schoolName"
              className="font-semibold whitespace-nowrap"
            >
              School Name:
            </label>
            <TextInput
              id="previousSchoolName"
              placeholder="School Name..."
              className="w-full pl-6"
              sizing={10}
              onChange={handleChange}
            />
          </div>
          <div className="border flex gap-9 items-center p-1">
            <label
              htmlFor="schoolAddress"
              className="font-semibold whitespace-nowrap"
            >
              School Address:
            </label>
            <TextInput
              id="previousSchoolAddress"
              placeholder="School Address..."
              className="w-full pl-6"
              sizing={10}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-evenly w-full">
          <div className="flex gap-9 w-full border p-1">
            <label htmlFor="code" className="font-semibold px-2">
              Code:
            </label>
            <TextInput
              id="previousSchoolZipCode"
              placeholder="Code..."
              className="w-full pl-6"
              sizing={10}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-9 w-full border items-center p-1">
            <label htmlFor="Province" className="font-semibold px-2">
              Province:
            </label>
            <TextInput
              id="previousSchoolProvince"
              placeholder="Province..."
              className="w-full pl-6"
              sizing={5}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-9 w-full border items-center p-1">
            <label htmlFor="country" className="font-semibold px-2">
              Country:
            </label>
            <TextInput
              id="previousSchoolCountry"
              placeholder="country..."
              className="w-full pl-6"
              sizing={5}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="medical border pl-2 mt-2">
        <h3 className="font-semibold uppercase">Medical Information</h3>
      </div>

      <div className="parent border p-2">
        <div className="flex flex-col gap-1 md:flex-row md:justify-evenly">
          <div className="child-1 flex flex-col gap-1 w-full">
            <div className="border flex gap-9 items-center p-1">
              <label
                htmlFor="medicalAidNumber"
                className="whitespace-nowrap font-semibold"
              >
                Medical Aid Number:
              </label>
              <TextInput
                id="medicalAidNumber"
                placeholder="Medical Aid Number..."
                className="w-full pl-6"
                sizing={10}
                onChange={handleChange}
              />
            </div>
            <div className="border flex gap-9 items-center p-1">
              <label
                htmlFor="mainMember"
                className="whitespace-nowrap font-semibold"
              >
                main member's name:
              </label>
              <TextInput
                id="mainMember"
                placeholder="main member's name..."
                className="w-full pl-6"
                sizing={10}
                onChange={handleChange}
              />
            </div>
            <div className="border flex gap-9 items-center p-1">
              <label
                htmlFor="doctorAddress"
                className="whitespace-nowrap font-semibold"
              >
                Doctor Address:
              </label>
              <TextInput
                id="doctorAddress"
                placeholder="Doctor Address..."
                className="w-full pl-6"
                sizing={10}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="child-1 flex flex-col gap-1 w-full">
            <div className="border flex gap-9 items-center p-1">
              <label
                htmlFor="medicalAidNumber"
                className="whitespace-nowrap font-semibold"
              >
                Medical Aid Name:
              </label>
              <TextInput
                id="medicalAidNumber"
                placeholder="Medical Aid Number..."
                className="w-full pl-6"
                sizing={10}
                onChange={handleChange}
              />
            </div>
            <div className="border flex gap-9 items-center p-1">
              <label
                htmlFor="mainMember"
                className="whitespace-nowrap font-semibold"
              >
                Doctor's Name:
              </label>
              <TextInput
                id="mainMember"
                placeholder="main member's name..."
                className="w-full pl-6"
                sizing={10}
                onChange={handleChange}
              />
            </div>
            <div className="border flex gap-9 items-center p-1">
              <label
                htmlFor="doctorAddress"
                className="whitespace-nowrap font-semibold"
              >
                Doctor's Number:
              </label>
              <TextInput
                id="doctorAddress"
                placeholder="Doctor Address..."
                className="w-full pl-6"
                sizing={10}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="parent flex flex-col gap-1 mt-1">
          <div className="border flex gap-9 items-center p-1">
            <label
              htmlFor="doctorAddress"
              className="whitespace-nowrap font-semibold"
            >
              Requiring Counseling:
            </label>
            <TextInput
              id="counsaling"
              placeholder="do you require counseling..."
              className="w-full pl-6"
              sizing={10}
              onChange={handleChange}
            />
          </div>
          <div className="border flex gap-9 items-center p-1">
            <label
              htmlFor="doctorAddress"
              className="whitespace-nowrap font-semibold"
            >
              Medical Condition:
            </label>
            <TextInput
              id="doctorAddress"
              placeholder="Medical Condition..."
              className="w-full pl-6"
              sizing={10}
              onChange={handleChange}

            />
          </div>
        </div>
      </div>

      <div className="border mt-2">
        <h3 className="pl-2">siblings</h3>
      </div>
      <div className="parents">
        <div className="child-1 border py-1">
          <div className=" flex flex-col gap-1 md:flex-row md:gap-9 items-center p-1">
            <div className="flex border items-center">
              <label htmlFor="numberOfSiblingsInSchool" className="whitespace-nowrap font-semibold pl-2">Number Of Siblings In this School:</label>
              <TextInput id="numberOfSiblingsInSchool" placeholder="Number Of Siblings In this School..." className="w-fit pl-6 pr-1 py-1" sizing={10} onChange={handleChange}/>
            </div>
            <div className="flex border items-center">
              <label htmlFor="positionInTheFamily" className="whitespace-nowrap font-semibold pl-2">Number Of Siblings In this School:</label>
              <TextInput id="positionInTheFamily" placeholder="e.g first..." className="w-fit pl-6 py-1 pr-1" sizing={10} onChange={handleChange}/>
            </div>
          </div>
          <div className="border mt-1 w-fit ml-1">
              <h4 className="font-semibold">Please Supply Names bellow</h4>
            </div>
          
          <div className="mt-1 flex flex-col gap-2 md:gap-4 md:flex-row">
            <TextInput id="firstSibling" placeholder="sibling names..." className="w-fit pl-1" sizing={10} onChange={handleChange}/>
            <TextInput id="secondSibling" placeholder="sibling names..." className="w-fit pl-1" sizing={10} onChange={handleChange}/>
            <TextInput id="thridSibling" placeholder="sibling names..." className="w-fit pl-1" sizing={10} onChange={handleChange}/>
          </div>
        </div>
      </div>

    </div>
  );
}
