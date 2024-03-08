import React, { useEffect, useState } from "react";
import moment from "moment";
import { FaThumbsUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Button, Textarea } from "flowbite-react";

export default function Comments({ comment, onlike, onEdit }) {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.content);
  const { currentUser } = useSelector((state) => state.user);

  const handleEdit = async (commentId) => {
    //console.log(commentId);
    setIsEditing(true);
    setEditedComment(comment.content);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect to get user that commented
  useEffect(() => {
    // get user from database
    const getUser = async () => {
      // try catch
      try {
        // get user from database request
        const res = await fetch(`/api/user/${comment.userId}`);

        // get data from database and change to json
        const data = await res.json();

        // if response was success
        if (res.ok) {
          // set user
          setUser(data);
        }
      } catch (error) {
        //  console.log error if true
        console.log(error);
      }
    };
    getUser();
  }, [comment]);
  console.log(comment.likes[0]);

  // handle save comment after edit function
  const handleSave = async (commentId) => {
    try {
      const res = await fetch(`/api/comment/edit/${comment._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ content: editedComment }),
      });
      if (res.ok) {
        setIsEditing(false);
        onEdit(comment, editedComment);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex  gap-2 p-4 border-b dark:border-gray-600 text-sm">
      <div className="flex-shrink-0 mr-3">
        <img
          src={user.profilePicture}
          alt={user.lastName}
          className="w-10 h-10 rounded-full items-center"
        />
      </div>
      <div className="flex-1 ">
        <div className="flex items-center mb-1">
          <span className="font-bold mr-1 text-xs truncate">
            {user ? `@${user.firstName}` : "anonymous"}
          </span>
          <span className="text-xs text-gray-500">
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>
        {isEditing ? (
          <div className="transition-all duration-1000 delay-1000 ease-in-out">
            <Textarea
              className="w-full p-2 border border-gray-400 animate-pulse rounded-md focus:outline-none focus:border-blue-500 animate-fade-in"
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            />
            <div className="flex justify-end gap-2 mt-1 text-xs transition-all animate-fade-in">
              <Button
                type="button"
                size={"sm"}
                className="hover:transition-all scale-75 duration-500 hover:scale-95 ease-in-out"
                gradientDuoTone={"tealToLime"}
                outline="true"
                onClick={handleSave}
              >
                Save
              </Button>
              <Button
                type="button"
                size={"sm"}
                className="transition-all scale-75 hover:scale-95 duration-500 ease-in-out"
                gradientDuoTone={"pinkToOrange"}
                outline="true"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <>
            <p className="text-gray-500 pb-2">{comment.content}</p>
            <div className="flex items-center gap-2 border-t border-gray-600 max-w-fit">
              <button
                type="button"
                onClick={() => onlike(comment._id)}
                className={`hover:text-blue-500 text-gray-500 ${
                  currentUser &&
                  comment.likes.includes(currentUser._id) &&
                  "!text-blue-500"
                }`}
              >
                <FaThumbsUp size="12" />
              </button>
              <span className="text-sm text-gray-500">
                {comment.numberOfLikes > 0 &&
                  comment.numberOfLikes +
                    " " +
                    (comment.numberOfLikes === 1 ? "like" : "likes")}
              </span>
              {currentUser &&
                (currentUser._id === comment.userId || currentUser.isAdmin) && (
                  <button
                    className="text-sm text-gray-500 hover:text-blue-500"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
