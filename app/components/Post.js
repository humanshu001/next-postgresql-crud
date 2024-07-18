import Link from "next/link";
import DeletePostButton from "./DeletePostButton";

export default function Post({id, title, content, authorName}){
    return(
        <>
            <div style={{border:'2px solid black',padding:'15px',borderRadius:'5px',width:'25%',margin:'10px'}}>
                <h3>{authorName}</h3>
                <h4>{title}</h4>
                <p>{content}</p>
                <DeletePostButton id={id}/>
                <Link href={`/update-post?id=${id}`}>Update</Link>
            </div>
        </>
    )
}