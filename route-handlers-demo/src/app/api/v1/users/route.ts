import {redirect } from "next/navigation";

type UserV1 ={
    id:string;
    email:string;
    fullName:string;
    createdAt:string;
}

export async function GET() {
    redirect("/api/v2/users");
    const users:UserV1[] = [
        {
            id:"1",
            email:"john.doe@example.com",
            fullName:"John Doe",
            createdAt:"2023-01-01T00:00:00Z"
        },
        {
            id:"2",
            email:"jane.smith@example.com",
            fullName:"Jane Smith",
            createdAt:"2023-01-02T00:00:00Z"
        }
    ];

    return new Response(JSON.stringify(users), {
        headers: { "Content-Type": "application/json" }
    });
}