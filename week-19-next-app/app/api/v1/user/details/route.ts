import { NextResponse,NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export  function GET(){
    return NextResponse.json({
        name : "parvati",
        age : 22

    })
}

export async function  POST(req : NextRequest){
   const data = await req.json();
   const user = await prismaClient.user.create({
    data : {
        username : data.username,
        password : data.password
    }
   })

   return NextResponse.json({
    message : "User created successfully",
    user : user
   })
}
export function PUT(){
    return NextResponse.json({
        message : "Data has been updated"
    })
}