import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders);

  const headerList = await headers();
  console.log(headerList.get("authorization"));
  return new Response("<h1>Profile API Data</h1>", {
    headers: { "Content-Type": "text/html" }
  });
}

