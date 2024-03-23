import { elements } from "chart.js";
import { Button, Select, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function Search() {
  const [sideBarData, setSideBarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "uncategorized",
  });


  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [showMore, setShowMore] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(()=>{
    const urlParms = new URLSearchParams(location.search)
    const searchTermFromUrl = urlParms.get('searchTerm')
    const sortFromUrl = urlParms.get('sort')
    const categoryFromUrl = urlParms.get('category')
    if(searchTermFromUrl || sortFromUrl || categoryFromUrl){
      setSideBarData({...sideBarData ,searchTerm: searchTermFromUrl, sort: sortFromUrl, category: categoryFromUrl})
    }

    const fetchPosts = async ()=>{
        setLoading(true)
        const searchQuery = urlParms.toString()
        const res = await fetch(`/api/post/posts?${searchQuery}`)
        if(!res.ok){
            setLoading(false)
            return
        }
        if(res.ok){
            const data = await res.json()
            setPosts(data.posts)
            setLoading(false)
            if(data.posts.length === 9){
                setShowMore(true)
            }else{
                setShowMore(false)
            }
        }
    }
    fetchPosts()
  }, [location.search])
  const handleChange = (e) =>{
    if(e.target.id === "searchTerm"){
      setSideBarData({...sideBarData, searchTerm: e.target.value})
  }
  if(e.target.id === "sort"){
    const order = e.target.value || "desc"
    setSideBarData({...sideBarData, sort: order})
  }
  if(e.target.id === "category"){
    const category = e.target.value || "uncategorized"
    setSideBarData({...sideBarData, category: category})
  }
}

  const handleSubmit = (e) => {
    e.preventDefault()
    const urlParms = new URLSearchParams()
    urlParms.set("searchTerm", sideBarData.searchTerm)
    urlParms.set("sort", sideBarData.sort)
    urlParms.set("category", sideBarData.category)
    const searchQuery = urlParms.toString()
    navigate(`/search?${searchQuery}`)
  }
  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParms = new URLSearchParams(location.search)
    urlParms.set("startIndex", startIndex)
    const searchQuery = urlParms.toString()
    const res = await fetch(`/api/post/posts?${searchQuery}`)
    if(!res.ok){
      return
    }
    if(res.ok){
      const data = await res.json()
      setPosts([...posts, ...data.posts])
      if(data.posts.length === 9){
        setShowMore(true)
      }else{
        setShowMore(false)
      }
    }
  }
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex gap-2 items-center">
            <label>Search Term</label>
            <TextInput placeholder="search..." id="searchTerm" type="text" value={sideBarData.searchTerm} onChange={handleChange}/>
          </div>
          <div className="flex gap-2 items-center">
            <label>Sort</label>
             <Select onChange={handleChange} value={sideBarData.sort} id="sort">
               <option value="desc">Newest</option>
               <option value="asc">Oldest</option>
             </Select>
          </div>
          <div className="flex gap-2 items-center">
            <label>Category </label>
             <Select onChange={handleChange} value={sideBarData.category} id="category">
               <option value="uncategorized">uncategorized</option>
               <option value="English">English</option>
               <option value="isizulu">Isizulu</option>
               <option value="Geography">Geography</option>
               <option value="Mathematics">Mathematics</option>
             </Select>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-3">Posts Results</h1>
        <div className="p-7 flex flex-wrap w-full">
          {
            !loading && posts.length === 0 && (<p className="text-center text-xl text-gray-500">No posts found</p>)
          }
          {
            loading && (<p className="text-center text-xl text-gray-500">Loading...</p>)
          }
          {
            !loading && posts && posts.map((post)=> <PostCard key={post._id} post={post}/>)
          }
          {
            showMore && <Button onClick={handleShowMore} className="text-teal-600 text-lg hover:text-teal-800 p-7 w-full">Show More</Button>
          }
        </div>
      </div>
    </div>
  );
}
