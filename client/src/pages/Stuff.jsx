import React, { useState } from "react";
import logo from "../assets/image2.jpg";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { motion } from "framer-motion";

export default function Stuff() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col justify-evenly flex-wrap">
      <div className="text-center text-4xl font-semibold my-2">
        <h1 className="uppercase mb-2">Stuff</h1>
      </div>

      <div className="flex flex-wrap gap-4 justify-evenly my-2">

        {/*General Teacher*/}
        <Card className={`max-w-sm 0verflow-hidden transition-transform duration-700 transform ${isHovered ? "scale-105" : "100"} `} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} imgSrc={logo} horizontal>
          <h5 className={`text-2xl font-bold tracking-tight text-gray-900 dark:text-white ${isHovered ? "-mt-5 duration-700 ease-in-out": "mt-0"}`}>
            Home Language (IsiZulu)
          </h5>
          <motion.p className="font-normal text-gray-700 dark:text-gray-400" {...(isHovered ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } } : { initial: { opacity: 1 }, animate: { opacity: 0 }, transition: { duration: 0.5 } })}>
            Here are the teachers who are teaching the home language in
            Sompukwane Secondary School in reverse chronological order.{" "}
          </motion.p>
          <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-0 ease-in-out transition-opacity duration-700 ${isHovered ? "opacity-100 translate-y-4": "translate-y-0"}`}>
            <Link to="/view" className="">
              view
            </Link>
          </button>
        </Card>  

        {/*General Teacher*/}
        <Card className="max-w-sm hover:scale-105" imgSrc={logo} horizontal onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            First Additional Language (English)
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the teachers who are teaching the first additional language
            in Sompukwane Secondary School in reverse chronological order.{" "}
            <Link to="/view" className="text-blue-700">
              view
            </Link>
          </p>
        </Card>

        {/*/maths Teachers */}
        <Card className="max-w-sm" imgSrc={logo} horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Mathematics
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the teachers who are teaching the Mathematics in Sompukwane
            Secondary School in reverse chronological order.{" "}
            <Link to="/view" className="text-blue-700">
              view
            </Link>
          </p>
        </Card>

        {/*History Teachers*/}
        <Card className="max-w-sm" imgSrc={logo} horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Mathematics (Literacy)
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the teachers that are teaching the home language in
            Sompukwane Secondary School in reverse chronological order.{" "}
            <Link to="/view" className="text-blue-700">
              view
            </Link>
          </p>
        </Card>

        {/*Geography */}
        <Card className="max-w-sm" imgSrc={logo} horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Physical Sciences
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the teachers who are teaching the physical sciences in
            Sompukwane Secondary School in reverse chronological order.{" "}
            <Link to="/view" className="text-blue-700">
              view
            </Link>
          </p>
        </Card>

        {/*Drama */}
        <Card className="max-w-sm" imgSrc={logo} horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Drama
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the teachers who are teaching the drama in Sompukwane
            Secondary School in reverse chronological order.{" "}
            <Link to="/view" className="text-blue-700">
              view
            </Link>
          </p>
        </Card>

        {/*Tourism Teachers */}
        <Card className="max-w-sm" imgSrc={logo} horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Tourism
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the teachers that are teaching the tourism in Sompukwane
            Secondary School in reverse chronological order.{" "}
            <Link to="/view" className="text-blue-700">
              view
            </Link>
          </p>
        </Card>

        {/*Accounting Teachers*/}
        <Card className="max-w-sm" imgSrc={logo} horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Accounting
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the teachers that are teaching the home language in
            Sompukwane Secondary School in reverse chronological order.{" "}
            <Link to="/view" className="text-blue-700">
              view
            </Link>
          </p>
        </Card>

        {/* */}
        <Card className="max-w-sm" imgSrc={logo} horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Business Studies
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the teachers that are teaching the home language in
            Sompukwane Secondary School in reverse chronological order.{" "}
            <Link to="/view" className="text-blue-700">
              view
            </Link>
          </p>
        </Card>

        <Card className="max-w-sm" imgSrc={logo} horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Life Sciences
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the teachers that are teaching the home language in
            Sompukwane Secondary School in reverse chronological order.{" "}
            <Link to="/view" className="text-blue-700">
              view
            </Link>
          </p>
        </Card>

        <Card className="max-w-sm" imgSrc={logo} horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Life Sciences
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the teachers who are teaching the life orientation in
            Sompukwane Secondary School in reverse chronological order.{" "}
            <Link to="/view" className="text-blue-700">
              view
            </Link>
          </p>
        </Card>

        <Card className="max-w-sm" imgSrc={logo} horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Consumer
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the teachers who are teaching the consumer in Sompukwane
            Secondary School in reverse chronological order.{" "}
            <Link to="/view" className="text-blue-700">
              view
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
