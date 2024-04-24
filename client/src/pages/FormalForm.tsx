import {useState} from "react";
import {
  Label,
  TextInput,
  Select,
  Datepicker,
  Textarea,
  Button,
} from "flowbite-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function FormalForm() {
  const [formData, setFormData] = useState({});
  const [selectedDate, setSelectedDate] = useState('');
  const { currentUser } = useSelector((state: any) => state.user)
  // @ts-ignore
  const [error, setError] = useState(false)
  // @ts-ignore
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const datePicker = (data: any)=>{
    setSelectedDate(data)
    setFormData({...formData, dates: selectedDate})
  }
  const handleChange = (e: any) =>{
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  const handleDateChange = (date: any) => {
    setSelectedDate(date)
    setFormData({...formData, dates: selectedDate})
    console.log(selectedDate);
  }
  console.log(formData);
  console.log(selectedDate);

  const handleSubmit = async (e:any) =>{
    e.preventDefault()
    try{
      setLoading(true)
      setError(false)
      const res = await fetch(`/api/user/register/${currentUser._id}`, {
        method: "POST",
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      setLoading(false)

      if(data.success === false){
        setError(true)
        return;
      }else{
        navigate("/dashboard?tab=dash")
      }

    }catch(error){
      console.log(error);
      setError(true)
      setLoading(false)
    }
  }
  return (
    <div className="m-2 flex flex-col gap-2 w-fit">
      <form onSubmit={handleSubmit}>
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
          <Select sizing={"sm"} required id="gradeAppliedFor" onChange={handleChange}>
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
          <Select sizing={"sm"} required id="highestGradePassed" onChange={handleChange}>
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
          <Select sizing={"sm"} required id="gradeRepeated" onChange={handleChange}>
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
              value={currentUser.lastName}
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
              value={currentUser.firstName}
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
              placeholder="Race..."
              required
              sizing={"xs"}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center border p-1 w-full gap-9">
            <label htmlFor="countryOfOrigin" className="font-semibold whitespace-nowrap">
              Country
              <span className="md:visible text-red-500" hidden>
                of Residdence
              </span>
              :
            </label>
            <TextInput
              className="w-full pl-6"
              id="countryOfOrigin"
              placeholder="South Africa..."
              required
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
              placeholder="NickName..."
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
              placeholder="Other Names..."
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
              placeholder="Gender..."
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
              placeholder="Student Id Number..."
              sizing={"xs"}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="parent flex flex-col md:flex-row md:justify-evenly gap-4 p-2 border">
        <div className="child-1 w-full flex flex-col gap-1">
          <div className="address ">
            <Textarea rows={3} id="streetAddress" onChange={handleChange}/>
          </div>
          <div className="flex gap-9 w-full border p-1">
            <label htmlFor="city" className="whitespace-nowrap font-semibold">
              City/Suburb:
            </label>
            <TextInput
              id="city"
              placeholder="City..."
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
              placeholder="Home Number..."
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
              placeholder="Emargency Number..."
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
              htmlFor="previousSchoolName"
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
              htmlFor="previousSchoolAddress"
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
            <label htmlFor="previousSchoolZipCode" className="font-semibold px-2">
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
            <label htmlFor="previousSchoolProvince" className="font-semibold px-2">
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
            <label htmlFor="previousSchoolCountry" className="font-semibold px-2">
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
                htmlFor="medicalAidMainMember"
                className="whitespace-nowrap font-semibold"
              >
                main member's name:
              </label>
              <TextInput
                id="medicalAidMainMember"
                placeholder="main member's name..."
                className="w-full pl-6"
                sizing={10}
                onChange={handleChange}
              />
            </div>
            <div className="border flex gap-9 items-center p-1">
              <label
                htmlFor="medicalAidDoctorAddress"
                className="whitespace-nowrap font-semibold"
              >
                Doctor Address:
              </label>
              <TextInput
                id="medicalAidDoctorAddress"
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
                htmlFor="medicalAidNane"
                className="whitespace-nowrap font-semibold"
              >
                Medical Aid Name:
              </label>
              <TextInput
                id="medicalAidNane"
                placeholder="Medical Aid Number..."
                className="w-full pl-6"
                sizing={10}
                onChange={handleChange}
              />
            </div>
            <div className="border flex gap-9 items-center p-1">
              <label
                htmlFor="medicalAidDoctorName"
                className="whitespace-nowrap font-semibold"
              >
                Doctor's Name:
              </label>
              <TextInput
                id="medicalAidDoctorName"
                placeholder="Doctor Name..."
                className="w-full pl-6"
                sizing={10}
                onChange={handleChange}
              />
            </div>
            <div className="border flex gap-9 items-center p-1">
              <label
                htmlFor="medicalAidDoctorNumber"
                className="whitespace-nowrap font-semibold"
              >
                Doctor's Number:
              </label>
              <TextInput
                id="medicalAidDoctorNumber"
                placeholder="Doctor's Number..."
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
              htmlFor="studentRequiringCounseling"
              className="whitespace-nowrap font-semibold"
            >
              Requiring Counseling:
            </label>
            <TextInput
              id="studentRequiringCounseling"
              placeholder="do you require counseling..."
              className="w-full pl-6"
              sizing={10}
              onChange={handleChange}
            />
          </div>
          <div className="border flex gap-9 items-center p-1">
            <label
              htmlFor="studentMedicalCondition"
              className="whitespace-nowrap font-semibold"
            >
              Medical Condition:
            </label>
            <TextInput
              id="studentMedicalCondition"
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
            <TextInput id="firstSiblingName" placeholder="First Names..." className="w-fit pl-1" sizing={10} onChange={handleChange}/>
            <TextInput id="secondSiblingName" placeholder="Second Names..." className="w-fit pl-1" sizing={10} onChange={handleChange}/>
            <TextInput id="thirdSiblingName" placeholder="Third Names..." className="w-fit pl-1" sizing={10} onChange={handleChange}/>
          </div>
        </div>
      </div>
      <div className="border mt-2">
        <h3 className="pl-2 font-semibold uppercase">Parent / guardian Information</h3>
      </div>
      <div className="parent p-2 border">
        <div className="child-2 flex flex-col gap-1 md:items-center md:flex-row md:justify-evenly md:gap-4">
          <div className="w-full flex flex-col gap-2">
            <div className="flex justify-evenly gap-3 w-full">
            <div className="border flex gap-6 items-center w-48 px-1">
            <label htmlFor="parentTitle" className="whitespace-nowrap font-semibold">title:</label>
            <Select sizing={"sm"} id="parentTitle" onChange={handleChange}>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
              <option value="Prof">Prof</option>
              <option value="Other">Other</option>
            </Select>
          </div>
          <div className="border flex gap-6 items-center w-full px-1">
            <label htmlFor="parentInitials" className="whitespace-nowrap font-semibold">Initials:</label>
            <TextInput id="parentInitials" required={true} placeholder="Initials..." className="w-full pl-6" sizing={10} onChange={handleChange}/>
          </div>
            </div>
            
          <div className="border flex gap-6 items-center w-full px-1">
            <label htmlFor="parentFirstName" className="whitespace-nowrap font-semibold">First Name:</label>
            <TextInput id="parentFirstName" required={true} placeholder="first name..." className="w-full pl-6 py-1" sizing={10} height={50} onChange={handleChange}/>
          </div>
          <div className="border flex gap-6 items-center w-full px-1">
            <label htmlFor="parentHomeLanguage" className="whitespace-nowrap font-semibold">Home Language:</label>
            <TextInput id="parentHomeLanguage" required={true} placeholder="Home Language..." className="w-full pl-6 py-1" sizing={10} height={50} onChange={handleChange}/>
          </div>
          <div className="border flex gap-6 items-center w-full px-1">
            <label htmlFor="parentId" className="whitespace-nowrap font-semibold">Parent Id:</label>
            <TextInput id="parentId" required={true} placeholder="Id Number..." className="w-full pl-6 py-1" sizing={10} height={50} onChange={handleChange}/>
          </div>
          <Button gradientDuoTone={"purpleToBlue"} type="submit">Submit</Button>
          </div>
          <div className="w-full flex flex-col gap-2">
          <div className="border flex gap-6 items-center w-full px-1">
            <label htmlFor="parentSurname" className="whitespace-nowrap font-semibold">Surname:</label>
            <TextInput id="parentSurname" required={true} placeholder="Surname..." className="w-full pl-6 py-1" sizing={10} height={50} onChange={handleChange}/>
          </div>
          <div className="border flex gap-6 items-center w-full px-1">
            <label htmlFor="parentSecondName" className="whitespace-nowrap font-semibold">Second Name:</label>
            <TextInput id="parentSecondName" placeholder="Second name..." className="w-full pl-6 py-1" sizing={10} height={50} onChange={handleChange}/>
          </div>
          <div className="border flex gap-6 items-center w-full px-1">
            <label htmlFor="parentEmail" className="whitespace-nowrap font-semibold">Email:</label>
            <TextInput id="parentEmail" placeholder="Email..." className="w-full pl-6 py-1" sizing={10} height={50} onChange={handleChange}/>
          </div>
          <div className="border flex gap-6 items-center w-full px-1">
            <label htmlFor="parentPhone" className="whitespace-nowrap font-semibold">Phone Number:</label>
            <TextInput id="parentPhone" required={true} placeholder="Parent Phone Number..." className="w-full pl-6 py-1" sizing={10} height={50} onChange={handleChange}/>
          </div>
          <div className="border flex gap-6 items-center w-full px-1">
            <label htmlFor="parentAlterNumber" className="whitespace-nowrap font-semibold">Alter Number:</label>
            <TextInput id="parentAlterNumber" placeholder="Parent Phone Number..." className="w-full pl-6 py-1" sizing={10} height={50} onChange={handleChange}/>
          </div>
          
          </div>
        </div>
      </div>

      <div className="border my-2">
        <p className="">If the learner is accepted, the following documents must be provided upon day of school</p>
      </div>
        </form>
    </div>
  );
}
