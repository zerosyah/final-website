import React from "react";
import image1 from "../assets/images1.jpg";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="self-center">
        <h1 className="text-4xl font-bold mt-5">WELCOME!</h1>
      </div>

      {/*school image */}
      <div className="flex self-center">
        <img src={image1} alt="school emage" />
      </div>

      {/*School welcome script */}
      <div className="text-center flex flex-col justify-center">
        <h3 className="font-medium p-2 uppercase underline">Sompukwane Secondary School</h3>
        <p className="font-medium ">
          We would like to thank you for the time you have taken to have a look
          at our school website. Sompukwane Secondary School is a progressive
          school, fully <br /> committed to the development of each pupil in a,
          structured, focused and desciplined environment. <br /> We strive to
          cater for the the interests of all the individual needs in our school
          as a way of gaining that competitive and winning urge. <br />
          <br />{" "}
          <span className="text-red-300">
            Please take sometime and browse at what activities our institution
            is involved in, and what it offers to current and prospective
            students.
          </span>
        </p>
      </div>
    </div>
  );
}
