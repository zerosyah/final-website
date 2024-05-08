import { TextInput } from 'flowbite-react'
import React from 'react'

function Calculator() {
  return (
    <div>
        <div className="">
            <h1 className="">Calculator</h1>
        </div>
        <div className="border w-60 rounded-lg p-2">
            <div className="DIV-2">
                <TextInput disabled/>
            </div>
            <div className="buttons flex justify-between">
              <div className="leftButton flex flex-col text-lg font-bold font-serif py-2 gap-2">
                <button className='border rounded-full px-2 border-r-2 bg-orange-500 border-orange-300'>C</button>
                <button className='border rounded-full border-r-2 bg-gray-500 border-gray-400 items-center flex justify-center px-2' type="button">7</button>
                <button className='border rounded-full border-r-2 bg-gray-500 border-orange-300 items-center flex justify-center '>4</button>
                <button className='border rounded-full border-r-2 bg-gray-500 border-orange-300 items-center flex justify-center shadow- shadow-gray-300 '>1</button>
                <button className='border rounded-full border-r-2 bg-gray-500 border-orange-300 items-center flex justify-center '>%</button>
              </div>
              <div className="leftButton flex flex-col text-lg font-bold font-serif py-2 gap-2">
              <button className='border rounded-full px-2 border-r-2 bg-orange-500 border-orange-300'>/</button>
                <button className='border rounded-full border-r-2 bg-gray-500 border-gray-400 items-center flex justify-center '>8</button>
                <button className='border rounded-full border-r-2 bg-gray-500 border-orange-300 items-center flex justify-center '>5</button>
                <button className='border rounded-full border-r-2 bg-gray-500 border-orange-300 items-center flex justify-center '>2</button>
                <button className='border rounded-full border-r-2 bg-gray-500 border-orange-300 items-center flex justify-center '>0</button>
              </div>
              <div className="leftButton flex flex-col text-lg font-bold font-serif py-2 gap-2">
              <button className='border rounded-full px-2 border-r-2 bg-orange-500 border-orange-300'>x</button>
                <button className='border rounded-full border-r-2 bg-gray-500 border-gray-400 items-center flex justify-center '>9</button>
                <button className='border rounded-full border-r-2 bg-gray-500 border-orange-300 items-center flex justify-center '>6</button>
                <button className='border rounded-full border-r-2 bg-gray-500 border-orange-300 items-center flex justify-center '>3</button>
                <button className='border rounded-full border-r-2 bg-gray-500 border-orange-300 items-center flex justify-center '>.</button>
              </div>
              <div className="leftButton flex flex-col text-lg font-bold font-serif py-2 gap-2">
              <button className='border rounded-full px-2 border-r-2 bg-orange-500 border-orange-300'>!</button>
              <button className='border rounded-full px-2 border-r-2 bg-orange-500 border-orange-300'>-</button>
              <button className='border rounded-full px-2 border-r-2 bg-orange-500 border-orange-300'>+</button>
              <button className='border rounded-full px-2 border-r-2 bg-orange-500 border-orange-300 h-full'>=</button>
                
              </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator
