import React from "react";
import { Card } from "flowbite-react";

export default function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-4xl self-center my-4">
        <h1>Contact</h1>
      </div>
{/*School Info */}
      <div className="flex flex-col gap-4 self-center md:flex-row">

        {/*School Info */}
        <div>
          <Card className="max-w-sm">
            <h2 className="text-2xl font-semibold text-center">School Info:</h2>
            <h4 className="">
              <span className=" font-bold ">Name: </span>{" "}
              <span className="font-mono">Sompukwane Secondry School</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Tel No: </span>{" "}
              <span className="font-mono">0123456789</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Phone No: </span>{" "}
              <span className="font-mono">0123456789</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Fax No: </span>{" "}
              <span className="font-mono">0123456789</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Email: </span>{" "}
              <span className="font-mono">Email@email.com</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Physical Address: </span>{" "}
              <span className="font-mono">Address.here</span>
            </h4>
          </Card>
        </div>

{/*Principal Info */}
        <div>
          <Card className="max-w-sm">
            <h2 className="text-2xl font-semibold text-center">Principal Info:</h2>
            <h4 className="">
              <span className=" font-bold ">Name: </span>{" "}
              <span className="font-mono">John Doe</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Tel No: </span>{" "}
              <span className="font-mono">0123456789</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Phone No: </span>{" "}
              <span className="font-mono">0123456789</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Fax No: </span>{" "}
              <span className="font-mono">0123456789</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Email: </span>{" "}
              <span className="font-mono">Email@email.com</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Physical Address: </span>{" "}
              <span className="font-mono">Address.here</span>
            </h4>
          </Card>
        </div>
{/*Dept Info */}
        <div>
          <Card className="max-w-sm">
            <h2 className="text-2xl font-semibold text-center">Dept Info:</h2>
            <h4 className="">
              <span className=" font-bold ">Name: </span>{" "}
              <span className="font-mono">John Doe</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Tel No: </span>{" "}
              <span className="font-mono">0123456789</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Phone No: </span>{" "}
              <span className="font-mono">0123456789</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Fax No: </span>{" "}
              <span className="font-mono">0123456789</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Email: </span>{" "}
              <span className="font-mono">Email@email.com</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Physical Address: </span>{" "}
              <span className="font-mono">Address.here</span>
            </h4>
          </Card>
        </div>

{/*HOD Info */}
        <div>
          <Card className="max-w-sm">
            <h2 className="text-2xl font-semibold text-center">HOD Info:</h2>
            <h4 className="">
              <span className=" font-bold ">Name: </span>{" "}
              <span className="font-mono">John Doe</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Tel No: </span>{" "}
              <span className="font-mono">0123456789</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Phone No: </span>{" "}
              <span className="font-mono">0123456789</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Fax No: </span>{" "}
              <span className="font-mono">0123456789</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Email: </span>{" "}
              <span className="font-mono">Email@email.com</span>
            </h4>
            <h4 className="">
              <span className=" font-bold ">Physical Address: </span>{" "}
              <span className="font-mono">Address.here</span>
            </h4>
          </Card>
        </div>
      </div>
    </div>
  );
}
