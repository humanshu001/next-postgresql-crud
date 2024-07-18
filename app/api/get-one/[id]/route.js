import { NextResponse } from "next/server";

export async function GET(request , {params}){
    const id = params.id;
    const result = await prisma.post.findUnique({
        where:{id}
    })
    return NextResponse.json(result)
}