import React from "react";
import { Card } from "flowbite-react";

export default function Department() {
  const subjects = [
    "Mathematics",
    "English",
    "IsiZulu",
    "Life Oriantation",
    "Crative Art",
    "Technology",
    "Natural Science",
    "Geography",
    "Drama",
    "History",
    "Life Sciences",
    "Physical Science",
    "Mathematics Literacy",
    "Tourism",
    "Accounting",
    "Consumer Studies",
    "Business Studies",
    "****************",
  ];
  const grade = {
    Grade8: [
      subjects[0],
      subjects[1],
      subjects[2],
      subjects[3],
      subjects[4],
      subjects[5],
      subjects[6],
      subjects[17],
      subjects[17],
    ],
    Grade9: [
      subjects[0],
      subjects[1],
      subjects[2],
      subjects[3],
      subjects[4],
      subjects[5],
      subjects[6],
      subjects[17],
      subjects[17],
    ],
    grade10_science: [
      subjects[0],
      subjects[1],
      subjects[2],
      subjects[3],
      subjects[9],
      subjects[7],
      subjects[10],
      subjects[11],
    ],
    grade10_drama: [
      subjects[0],
      subjects[1],
      subjects[2],
      subjects[3],
      subjects[7],
      subjects[8],
      subjects[9],
      subjects[13],
    ],
    grade10_Commerse: [
      subjects[0],
      subjects[1],
      subjects[2],
      subjects[3],
      subjects[9],
      subjects[14],
      subjects[15],
      subjects[16],
    ],
  };
  return (
    <div className="flex flex-col gap-0">
      <div className="text-center text-4xl font-semibold my-2 mb-7">
        <h1>Departments</h1>
      </div>
      <div className="self-center flex flex-col gap-4 md:flex-row justify-evenly flex-wrap mb-4">
        {/*Grade 8 */}
        <Card>
          <h2 className="text-center dark:text-white text-black font-semibold ">GRADE 8:</h2>
          <ul className="">
            {grade["Grade8"].map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </Card>

        {/*Grade 9 */}
        <Card>
          <h2 className="text-center text-black font-semibold dark:text-white">GRADE 9:</h2>
          <ul className="">
            {grade["Grade9"].map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </Card>

        {/*Grade 10 Commerse */}
        <Card>
          <h2 className=" font-semibold text-center ">Grade 10:</h2>
          <span className=" italic text-center">Commerce</span>
          <ul className="">
            {grade.grade10_Commerse.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </Card>

        {/*Grade 10 drama */}
        <Card>
          <h2 className="font-semibold text-center">Grade 10:</h2>
          <span className="italic text-center">Genaral</span>
          <ul className="">
            {grade.grade10_drama.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </Card>

        {/*Grade 10 science */}
        <Card>
          <h2 className="font-semibold text-center">Grade 10:</h2>
          <span className="italic text-center">Science</span>
          <ul className="">
            {grade.grade10_science.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </Card>

        {/**grade11 */}

        {/*Grade 11 drama */}
        <Card>
          <h2 className="font-semibold text-center">Grade 11:</h2>
          <span className="italic text-center">Genaral</span>
          <ul className="">
            {grade.grade10_drama.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </Card>

        {/*Grade 11 science */}
        <Card>
          <h2 className="font-semibold text-center">Grade 11:</h2>
          <span className="italic text-center">Science</span>
          <ul className="">
            {grade.grade10_science.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </Card>

        {/*Grade 11 commerce */}
        <Card>
          <h2 className="font-semibold text-center">Grade 11:</h2>
          <span className="italic text-center">Commerse</span>
          <ul className="">
            {grade.grade10_Commerse.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </Card>

        {/*Grade 12 drama */}
        <Card>
          <h2 className="font-semibold text-center">Grade 12:</h2>
          <span className="italic text-center">Genaral</span>
          <ul className="">
            {grade.grade10_drama.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </Card>

        {/*Grade 12 science */}
        <Card>
          <h2 className="font-semibold text-center">Grade 12:</h2>
          <span className="italic text-center">Science</span>
          <ul className="">
            {grade.grade10_science.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </Card>

        {/*Grade 12 commerce */}
        <Card>
          <h2 className="font-semibold text-center">Grade 12:</h2>
          <span className="italic text-center">Commerse</span>
          <ul className="">
            {grade.grade10_Commerse.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
