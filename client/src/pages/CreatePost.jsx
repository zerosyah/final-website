import React from 'react'
import { TextInput, Select, FileInput, Button } from 'flowbite-react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold '>Create Post</h1>
      <form className='flex flex-col gap-4'>
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <TextInput type='text' placeholder='Title' required className='flex-1'/>
          <Select >
            <option value="uncategorized">select category</option>
            <option value="mathematics">Mathematics</option>
            <option value="physics">Physics</option>
            <option value="english">English</option>
            <option value="isiZulu">IsiZulu</option>

          </Select>
        </div>
        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted'>
          <FileInput type="file" accept='image/*' className='' required/>
          <Button type='button' gradientDuoTone={"purpleToBlue"} size="sm" outline>Upload image</Button>
        </div>
        <ReactQuill theme="snow"  placeholder='Type here' className='h-72 mb-12' required/>
        <Button type='submit' gradientDuoTone={"purpleToPink"} outline>Submit</Button>
      </form>
    </div>
  )
}
