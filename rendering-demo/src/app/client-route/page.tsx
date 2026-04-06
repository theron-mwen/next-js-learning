// "use client"
// use client is not allowed since the serverSideFunction is a server-only function. If you want to use server-side functionality, you should not use "use client" in this file.
import { serverSideFunction } from "@/utils/server-util";

export default function ClientRoutePage() {
    const result = serverSideFunction();

    return <h1>Client Route - result :{result}</h1>;
}