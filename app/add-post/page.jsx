'use client'
import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function page() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();
    const submitButton = useRef();

    const handleSubmit = async (e) => {
        submitButton.current.disabled = true;

        e.preventDefault();
        
        try{
            await fetch('/api/add-post',{
                method:'POST',
                body:JSON.stringify({title,content}),
                headers:{
                    'Content-Type':'application/json'
                }
            })

            router.refresh();

            
        } catch (error) {
            console.error(error);
        }

        setTitle('');
        setContent('');
    }
  return (
    <>
        <Link href={'../'}>← Back to Home</Link>
        <h1 style={{textAlign:'center'}}>Add Post</h1>
        <form onSubmit={handleSubmit} style={{width:'50%',padding:'15px',margin:'20px auto',display:'flex',alignItems:'center',flexDirection:'column'}}>
            <label htmlFor="">
                Title:
            </label>
                <input type="text"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    style={{width:'100%',marginBottom:'10px',padding:'10px',boxSizing:'border-box',backgroundColor:'#f9f9f9',border:'2px solid #000',borderRadius:'5px'}}
                />
            <label htmlFor="">
                Content:
            </label>
                <textarea name="" id="" cols="30" rows="10"
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                    style={{width:'100%',marginBottom:'10px',padding:'10px',boxSizing:'border-box',backgroundColor:'#f9f9f9',border:'2px solid #000',borderRadius:'5px'}}
                    ></textarea>
            <button type="submit"
                    style={{width:'100%',marginBottom:'10px',padding:'10px',boxSizing:'border-box',backgroundColor:'#f9f9f9',border:'2px solid #000',borderRadius:'5px',cursor:'pointer',fontWeight:'bold',fontSize:'1.2rem'}}
                    ref={submitButton}
            >Submit</button>
            
        </form>
    </>
  )
}
