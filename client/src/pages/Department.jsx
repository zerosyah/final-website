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
    "Business Studies",
    "Accounting",
    "Consumer Studies",
    "Tourism",
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
    ],
    Grade9: [
      subjects[0],
      subjects[1],
      subjects[2],
      subjects[3],
      subjects[4],
      subjects[5],
      subjects[6],
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
      <div className="text-center text-4xl font-semibold my-2">
        <h1>Departments</h1>
      </div>
      <div className="self-center flex flex-col gap-4 md:flex-row justify-around flex-wrap">
        <div className="">
          <Card>
            <h2 className="self-center text-black font-semibold ">GRADE 8:</h2>
            <ul className="">
              {grade["Grade8"].map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="">
          <Card>
            <h2 className="self-center text-black font-semibold ">GRADE 9:</h2>
            <ul className="">
              {grade["Grade9"].map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="">
          <Card>
            <h2 className="text-left font-semibold pl-1">Grade 10:</h2>
            <span className="text-left font-serif pl-1 font-u">Commerce</span>
            <ul className="">
              {grade.grade10_Commerse.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="">
          <Card>
            <h2 className="text-left font-semibold pl-1">Grade 10:</h2>
            <span className="text-left font-serif pl-1">-Genaral-</span>
            <ul className="">
              {grade.grade10_drama.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="">
          <Card>
            <h2 className="text-left font-semibold pl-1">Grade 10:</h2>
            <span className="font-serif">-Science-</span>
            <ul className="">
              {grade.grade10_science.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </Card>
        </div>
        {/*spacing Div */}

        {/**grade11 */}
        <div className="">
          <Card>
            <h2 className="text-left font-semibold pl-1">Grade 11:</h2>
            <span className="text-left font-serif pl-1">-Genaral-</span>
            <ul className="">
              {grade.grade10_drama.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="">
          <Card>
            <h2 className="text-left font-semibold pl-1">Grade 11:</h2>
            <span className="text-left font-serif pl-1">-Genaral-</span>
            <ul className="">
              {grade.grade10_drama.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="">
          <Card>
            <h2 className="text-left font-semibold pl-1">Grade 11:</h2>
            <span className="text-left font-serif pl-1">-Genaral-</span>
            <ul className="">
              {grade.grade10_drama.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="">
          <Card>
            <h2 className="text-left font-semibold pl-1">Grade 12:</h2>
            <span className="text-left font-serif pl-1">-Genaral-</span>
            <ul className="">
              {grade.grade10_drama.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="">
          <Card>
            <h2 className="text-left font-semibold pl-1">Grade 12:</h2>
            <span className="text-left font-serif pl-1">-Genaral-</span>
            <ul className="">
              {grade.grade10_drama.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="">
          <Card>
            <h2 className="text-left font-semibold pl-1">Grade 12:</h2>
            <span className="text-left font-serif pl-1">-Genaral-</span>
            <ul className="">
              {grade.grade10_drama.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
