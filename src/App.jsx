

import { useState } from 'react';
import './App.css'
import Header from './Components/Header'
import { useEffect } from 'react';
import Blogs from './Components/Blogs';
import BookMark from './Components/BookMark';
import { addLocalStorage, getLocalStorage, removeLocalStorage } from './localStorage';


function App() {
  const [blogs,setBlogs]=useState([]);
  const[addBlog,setAddBlog]=useState([]);
  const[markRead,setMarkRead]=useState(0);
  
  useEffect(()=>{
      fetch('blogs.json')
      .then(res=>res.json())
      .then(data=>setBlogs(data))
  },[])
 
  useEffect(()=>{
    if(blogs.length){
      const getLsId=getLocalStorage();
      const localStorageData=[];
      for(const id of getLsId){
        const find=blogs.find(blog=>blog.id===id)
        if(find){
          localStorageData.push(find)
        }
      }
      setAddBlog(localStorageData)
    }
  },[blogs])

  
const handleAddBlog=(blog)=>{
const newBlogs=[...addBlog,blog];
setAddBlog(newBlogs)
addLocalStorage(blog.id)
}
const handleMarkRead=(reading_time,id)=>{
  if(addBlog!=false){
    const newReadingTime=markRead+reading_time
    setMarkRead(newReadingTime)
  }
      const filterBlog=addBlog.filter(blog=>blog.id!==id);
      setAddBlog(filterBlog)
    removeLocalStorage(id)
  }
  console.log(addBlog);

  return (
    <>
     <Header></Header>
     <div className='flex container mx-auto'>
     <Blogs blogs={blogs} handleAddBlog={handleAddBlog} handleMarkRead={handleMarkRead}></Blogs>
     <BookMark addBlog={addBlog} markRead={markRead} ></BookMark>
     </div>
      
    </>
  )
}

export default App
