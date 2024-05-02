import { Button, Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Result() {
  const [formData, setFormData] = useState({});
  const [test, setTest] = useState(false);
  const [student, setStudent] = useState([]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // @ts-ignore
      const res = await fetch(
        // @ts-ignore
        `/api/mark/create/${formData.subject}/${formData.studentId}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();
      if (res.ok) {
        console.log(data);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect to check if student participate on the subject.
  useEffect(()=>{
    // create a call back function to fetch student
    const searchStudent = async () => {
      // use try method
      try{
        // @ts-ignore
        const res = await fetch(`/api/mark/get/${formData.studentSubject}/${formData.studentId}`);
        
        // if the response from the backend is ok
        if(res.ok){
          // convert response to json
          const data = await res.json();
          setStudent(data.student);
          setTest(true);
        }
      }catch(error){
        console.log(error);
      }
    }

    // call the function
    searchStudent()

    // @ts-ignore
  }, [formData.studentSubject])
  
  return (
    <div className="main m-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-center text-lg font-bold underline">
          <h1>Student Result</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <div className="std-id flex flex-col gap-2">
            <TextInput
              id="studentId"
              placeholder="Enter Student ID"
              sizing={"sm"}
              onChange={handleChange}
            />
            <Select sizing={"sm"} id="studentSubject" onChange={handleChange}>
                  <option >Select subject</option>
                  <option value={"Accounting"}>Accounting</option>
                  <option value={"Business_Studies"}>Business studies</option>
                  <option value={"Mathematics"}>Mathematics</option>
                  <option value={"Physical_Sciences"}>Physical Sciences</option>
                  <option value={"Life_Sciences"}>Life Sciences</option>
                </Select>
          </div>
          <div className="flex h-9 w-52 items-center justify-center border border-dashed">
            {test === true ? (
              <>
                <p className="flex items-center justify-center text-lime-400">
                  {student.studentId}
                </p>
              </>
            ) : (
              <p className=""></p>
            )}
          </div>
          {test === true && (
            <div className="flex flex-col gap-3 border border-dotted p-3 md:flex-row md:items-center md:justify-evenly">
              <div className="flex items-center gap-1">
                <label htmlFor="subject" className="font-mono font-semibold">
                  subject:
                </label>
                <Select sizing={"sm"} id="subject" onChange={handleChange}>
                  <option >Select subject</option>
                  <option value={"Accounting"}>Accounting</option>
                  <option value={"Business_Studies"}>Business studies</option>
                  <option value={"Mathematics"}>Mathematics</option>
                  <option value={"Physical_Sciences"}>Physical Sciences</option>
                  <option value={"Life_Sciences"}>Life Sciences</option>
                </Select>
              </div>
              <div className="flex items-center gap-1">
                <label
                  htmlFor="testMonth"
                  className="whitespace-nowrap font-mono font-semibold"
                >
                  test Month:{" "}
                </label>
                <Select sizing={"sm"} id="testMonth" onChange={handleChange}>
                  <option>Select Month</option>
                  <option value={"Jan"}>January</option>
                  <option value={"Feb"}>February</option>
                  <option value={"Mar"}>March</option>
                  <option value={"Apr"}>April</option>
                  <option value={"May"}>May</option>
                  <option value={"Jun"}>June</option>
                </Select>
              </div>
              <div className="flex items-center gap-1">
                <Label
                  htmlFor="testName"
                  className="whitespace-nowrap font-mono font-semibold"
                >
                  test Name:
                </Label>
                <TextInput
                  id="testName"
                  sizing={"xs"}
                  size={14}
                  placeholder="TEST NAME" 
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
          {
            test === true && (
              <div className="border p-3 flex gap-4 flex-col md:flex-row md:justify-evenly">
                <div className="flex gap-1 items-center">
                  <Label htmlFor="mark" className="font-semibold whitespace-nowrap font-mono">mark:</Label>
                  <TextInput id="mark" sizing={"sm"} type="number" onChange={handleChange}/>
                </div>
                <div className="flex gap-1 items-center">
                  <Label htmlFor="status" className="font-semibold whitespace-nowrap font-mono">Status:</Label>
                  <TextInput id="status" sizing={"sm"} size={18} type="text" onChange={handleChange}/>
                </div>
              </div>
            )
          }
          {
            test === true && (
              <Button className="uppercase" gradientDuoTone={"tealToLime"} type="submit">Add Result</Button>
            )
          }
        </div>
      </form>
    </div>
  );
}