import { NextResponse } from "next/server";

export async function DELETE(request , {params}){
    const id = params.id;
    console.log({id})

    const result = await prisma.post.delete({
        where:{id}
    })
    return NextResponse.json({result})
}