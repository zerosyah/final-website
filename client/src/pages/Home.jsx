import React, { useState , useEffect} from "react";
import image1 from "../assets/images1.jpg";
import {motion} from "framer-motion"

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() =>{
    setFadeIn(true)
  }, [])
  return (
    <div className="flex flex-col gap-4">
      <div className="self-center">
        <motion.h1 className="text-4xl font-bold mt-5" initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1.5}}>WELCOME!</motion.h1>
      </div>

      {/*school image */}
      <div className={`flex self-center transition-opacity duration-1000 ease-in-out ${fadeIn ? "opacity-100 scale-110" : "opacity-0"}`}>
        <motion.img src={image1} alt="school emage" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: 1.5}}/>
      </div>

      {/*School welcome script */}
      <div className="text-center flex flex-col justify-center">
        <motion.h3 className="font-medium p-2 uppercase underline" initial={{x: -400, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1.5, delay: 3}}>Sompukwane Secondary School</motion.h3>
        <motion.p className="font-medium " initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: 4}}>
          We would like to thank you for the time you have taken to have a look
          at our school website. Sompukwane Secondary School is a progressive
          school, fully <br /> committed to the development of each pupil in a,
          structured, focused and desciplined environment. <br /> We strive to
          cater for the the interests of all the individual needs in our school
          as a way of gaining that competitive and winning urge. <br />
          <br />{" "}
          <motion.span className="text-red-300" 
          initial={{opacity: 0}} animate={{opacity: 1, scale: [1, 1.5, 1, 1.5]}} transition={{duration: 1.5, delay: 5}}
          whileHover={{scale: 1.6, yoyo: Infinity}}>
            Please take sometime and browse at what activities our institution
            is involved in, and what it offers to current and prospective
            students.
          </motion.span>
        </motion.p>
      </div>
    </div>
  );
}
