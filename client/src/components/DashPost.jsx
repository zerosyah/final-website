import { Button, Table, Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function DashPost() {
  // get current user from redux store
  const { currentUser } = useSelector((state) => state.user);

  // get posts from the api
  const [userPost, setUserPost] = useState([]);

  // show more usestate
  const [showMore, setShowMore] = useState(true);

  // show model usestate
  const [showModel, setShowModel] = useState(false);

  // set post id to a function
  const [postIdToDelete, setPostIdToDelete] = useState("");

  // useEffect for fetching posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // fetch posts
        const res = await fetch(`/api/post/posts?userId=${currentUser._id}`);

        // get data from database and change to json
        const data = await res.json();
        
        // if response was success fetch posts and set them to setUserPost
        if (res.ok) {
          // set posts
          setUserPost(data.posts);
          
          // if data.post.length is greater then 9
          if (data.posts.length  < 9){
            // set show more to false
            setShowMore(false);
          }
          
        }
      } catch (error) {
        // if error fetch posts
        console.log(error);
      }
    };

    // if user is logged in then show posts
    if (currentUser._id) {
      fetchPosts();
    }
  }, [currentUser._id]);

  // it a handle show more button
  const handleShowMore = async () => {
    // initiate a start index for number of posts
    const startIndex = userPost.length;

    // try to fetch number of post
    try {
      // fetch number of post in the database
      const res = await fetch(
        `/api/post/posts?userId=${currentUser._id}&startIndex=${startIndex}`
      );

      // turn the response into a data
      const data = await res.json();

      // when the response is successful
      if (res.ok) {
        // set posts
        setUserPost((prev)=>[...prev, ...data.posts]);
        if (data.posts.length  < 9){
          setShowMore(false);
        }
      }
    } catch (error) {
      // console.log error if true
      console.log(error);
    }
  };

  // handle delete post
  const handleDeletePost = async () => {
    // first show model off
    setShowModel(false);

    // try to delete post
    try {
      // api request to delete post in the backend with post id and user id
      const res = await fetch(`/api/post/delete/${postIdToDelete}/${currentUser._id}`, {
        method: "DELETE",
      });

      // return change the response to a data
      const data = await res.json();

      // when the request is successful
      if (res.ok) {
        // return message
        console.log(data.message);
      } else {
        // else setUserPost to prev data and filter the remaining data
        setUserPost((prev) => {
          // filter out the deleted document/posts
          prev.filter((post) => post.Id !== postIdToDelete);
        });
      }
    } catch (error) {
      // return error
      console.log(error);
    }
  };
  console.log(userPost.map((post) => post._id));
  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-500 dark:scrollbar-track-slate-700 ">
      {currentUser.isAdmin && userPost.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Date Updated</Table.HeadCell>
              <Table.HeadCell>Post Image</Table.HeadCell>
              <Table.HeadCell>Post Title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {userPost.map((post) => (
              <Table.Body key={post._id}>
                <Table.Row key={post._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/post/${post.slug}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-10 object-cover bg-gray-500"
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                      {post.title}
                  </Table.Cell>
                  <Table.Cell>{post.category}</Table.Cell>
                  <Table.Cell>
                    <span
                      className="text-red-500 font-medium hover:underline cursor-pointer"
                      onClick={() => {
                        // on click of button popup the modal window
                        setShowModel(true);

                        // then set the post Id
                        setPostIdToDelete(post._id);
                      }}
                    >
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      to={`/update-post/${post._id}`}
                      className="text-teal-500"
                    >
                      <span>Edit</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>

          {showMore && (
            <button type="button"
              className="w-full text-teal-500 self-center text-sm py-7"
              onClick={handleShowMore}
            >
              show more
            </button>
          )}
        </>
      ) : (
        <p>No Post</p>
      )}

      <Modal
        show={showModel}
        onClose={() => {
          setShowModel(false);
        }}
        popup
        size="md"
      >
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200 mt-3"/>
            <h3 className="mb-3 text-lg text-gray-500 dark:text-gray-400">
              Are you sure, that you want to delete this post?
            </h3>
          </div>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={handleDeletePost}>
              Delete
            </Button>
            <Button
              onClick={() => {
                setShowModel(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
