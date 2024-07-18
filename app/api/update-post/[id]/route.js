import { NextResponse } from "next/server";

export async function UPDATE(request , {params}){
    const id = params.id;
    const res = await request.json();
    const {title, content} = res;
    console.log({res})

    const result = await prisma.post.update({
        where:{id},
        data:{
            title,
            content
        }
    })
    return NextResponse.json({result})
}