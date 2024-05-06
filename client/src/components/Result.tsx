import { Button, Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { studentSearchStart, studentSearchSuccess, studentSearchFailure } from "../redux/marks/markSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Result() {
  const [formData, setFormData] = useState({});
  const [display, setDisplay] = useState(false);
  const [studens, setStudent] = useState([]);
  const dispatch = useDispatch();
  const { error, searching } = useSelector((state)=>state.mark)
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
        dispatch(studentSearchStart());
        // @ts-ignore
        const res = await fetch(`/api/mark/get/${formData.studentSubject}/${formData.studentId}`);

        // get data from database and change to json
        const data = await res.json();

        if(data.success === false) {
          dispatch(studentSearchFailure(data))
          setDisplay(false)
        }else{
          dispatch(studentSearchSuccess(data))
          setDisplay(true)
          setStudent(data.message)
        }
        
        // if the response from the backend is ok
        /*if(res.ok){
          // convert response to json
          const data = await res.json();
          setStudent(data.student);
          setDisplay(true);
        }*/
      }catch(error){
        console.log(error);
      }
    }

    // call the function
    searchStudent()

    // @ts-ignore
  }, [formData.studentSubject, formData.studentId])  
  return (
    <div className="main m-4 ">
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
                  <option value={"undefined here"}>Select subject</option>
                  <option value={"Accounting"}>Accounting</option>
                  <option value={"Bussiness_Studies"}>Business studies</option>
                  <option value={"Mathematics"}>Mathematics</option>
                  <option value={"Creative_Art"}>Creative Art</option>
                  <option value={"Physical_Sciences"}>Physical Sciences</option>
                  <option value={"Life_Sciences"}>Life Sciences</option>
                </Select>
          </div>
          <div className="flex h-fit p-1 w-56 items-center justify-center border border-dashed">
            {searching ? <p className="text-lime-400">searching...</p> : error ? <p className="text-lime-400">{error.message}</p> : <p className="text-lime-400">{studens}</p>}
          </div>
          {display === true && (
            <div className="flex flex-col gap-3 border border-dotted p-3 md:flex-row md:items-center md:justify-evenly">
              <div className="flex items-center gap-1">
                <label htmlFor="subject" className="font-mono font-semibold">
                  subject:
                </label>
                <Select sizing={"sm"} id="subject" onChange={handleChange}>
                  <option value={"undefined here"}>Select subject</option>
                  <option value={"Accounting"}>Accounting</option>
                  <option value={"Bussiness_Studies"}>Business studies</option>
                  <option value={"Creative_Art"}>Creative Art</option>
                  <option value={"Drama"}>Drama</option>
                  <option value={"English"}>English</option>
                  <option value={"Geography"}>Geography</option>
                  <option value={"History"}>History</option>
                  <option value={"IsiZulu"}>IsiZulu</option>
                  <option value={"Life_Orientation"}>Life Orientation</option>
                  <option value={"Life_Sciences"}>Life Sciences</option>
                  <option value={"Mathematics"}>Mathematics</option>
                  <option value={"Natural_Science"}>Natural Science</option>
                  <option value={"Physical_Sciences"}>Physical Sciences</option>
                  <option value={"Technology"}>Technology</option>
                  <option value={"Tourism"}>Tourism</option>
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
                  <option value={"Jul"}>July</option>
                  <option value={"Aug"}>August</option>
                  <option value={"sep"}>September</option>
                  <option value={"Oct"}>October</option>
                  <option value={"Nov"}>November</option>
                  <option value={"Dec"}>December</option>
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
            display === true && (
              <div className="border p-3 flex gap-4 flex-col md:flex-row md:justify-evenly">
                <div className="flex gap-1 items-center">
                  <Label htmlFor="mark" className="font-semibold whitespace-nowrap font-mono">mark:</Label>
                  <TextInput id="mark" sizing={"sm"} type="number" onChange={handleChange}/>
                </div>
                <div className="flex gap-1 items-center">
                  <Label htmlFor="status" className="font-semibold whitespace-nowrap font-mono">status:</Label>
                  <TextInput id="status" sizing={"sm"} size={18} type="text" onChange={handleChange}/>
                </div>
              </div>
            )
          }
          {
            display === true && (
              <Button className="uppercase" gradientDuoTone={"tealToLime"} type="submit">Add Result</Button>
            )
          }
        </div>
      </form>
    </div>
  );
}
