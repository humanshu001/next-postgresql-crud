// import Image from "next/image";
import prisma from "@/lib/prisma";
import styles from "./page.module.css";
import Post from "./components/Post";
import Link from "next/link";

const fetchposts = async () => {
  const posts = await prisma.post.findMany({
    include:{
      author:{
        select: {name: true}
      }
    }
  })

  return posts;
}

export default async function Home() {
  const posts = await fetchposts();
  // console.log({posts});
  return (
    <main className={styles.main}>
      <Link href={'/add-post'}>Add Post</Link>
      <h1>Feed</h1>
      <div style={{display:'flex'}}>
      {
        posts.map((post)=>{
          return(
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              authorName={post.author.name}
            />
          )
        })
      }
      </div>

      
    </main>
  );
}
