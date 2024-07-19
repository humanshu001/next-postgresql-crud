'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function page() {
  const id = useSearchParams().get('id');

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const fetchData = async () =>{
    try{
      const response = await fetch(`/api/get-one/${id}`);
      const data = await response.json();
      setTitle(data.title);
      setContent(data.content);
    }
    catch (error){
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])


  
  
  return (
    <>
        <h1>Update Post</h1>
        <form style={{width:'50%',padding:'15px',margin:'20px auto',display:'flex',alignItems:'center',flexDirection:'column'}}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title"
            style={{width:'100%',marginBottom:'10px',padding:'10px',boxSizing:'border-box',backgroundColor:'#f9f9f9',border:'2px solid #000',borderRadius:'5px'}}
            value={title} onChange={(e) => {setTitle(e.target.value)}}/>
            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" cols="30" rows="10"
            style={{width:'100%',marginBottom:'10px',padding:'10px',boxSizing:'border-box',backgroundColor:'#f9f9f9',border:'2px solid #000',borderRadius:'5px'}}
            value={content} onChange={(e) => {setContent(e.target.value)}}/>
            <button type="submit"
            style={{width:'100%',marginBottom:'10px',padding:'10px',boxSizing:'border-box',backgroundColor:'#f9f9f9',border:'2px solid #000',borderRadius:'5px',cursor:'pointer',fontWeight:'bold',fontSize:'1.2rem'}}
            >Update</button>
        </form>
    </>
  )
}
