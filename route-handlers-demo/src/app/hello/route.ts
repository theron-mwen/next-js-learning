// Route handers are flexible and can be used to handle any HTTP method. 
// Here, we define a GET handler that returns a simple response.

export async function GET() {
  return new Response("Hello, World!");
}

