import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders);

  const headerList = await headers();
  console.log(headerList.get("authorization"));

  const theme = request.cookies.get("theme");
  console.log("Theme from cookie:", theme);

  const cookieStore = await cookies();
  cookieStore.set("resultPerPage", "20");
  console.log(cookieStore.get("resultPerPage"));

  return new Response("<h1>Profile API Data</h1>", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "theme=dark;" },
  });
}
