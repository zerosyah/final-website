import React, { useState, useRef } from "react";
import { TextInput, Select, FileInput, Button, Alert } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL, ref
} from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CreatePost() {
  const [file, setFile] = useState([]);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const fileRef = useRef(null);

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please select an image to upload");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress);
        },
        (error) => {
          setImageUploadError("Error uploading image");
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      console.log(error);
      setImageUploadError("Error uploading image");
      setImageUploadProgress(null);
    }
  };
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold ">Create Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <TextInput
            type="text"
            placeholder="Title"
            required
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">select category</option>
            <option value="mathematics">Mathematics</option>
            <option value="physics">Physics</option>
            <option value="english">English</option>
            <option value="isiZulu">IsiZulu</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted">
          <FileInput
            type="file"
            accept="image/*"
            className=""
            required
            onChange={(e) => setFile(e.target.files[0])}
          />

          <Button
            type="button"
            gradientDuoTone={"purpleToBlue"}
            size="sm"
            outline
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              "upload image"
            )}
          </Button>
        </div>
        {imageUploadError && (
          <Alert color="failure">{imageUploadError}</Alert>
        )}
        {formData.image && (
          <img src={formData.image} alt="uploaded image" className="w-full h-72 object-cover"/>
        )}
        <ReactQuill
          theme="snow"
          placeholder="Type here"
          className="h-72 mb-12"
          required
        />
        <Button type="submit" gradientDuoTone={"purpleToPink"} outline>
          Submit
        </Button>
      </form>
    </div>
  );
}
