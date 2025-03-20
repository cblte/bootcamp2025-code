import { serve } from "https://deno.land/std/http/server.ts";

const port = 3000;

const handler = (request: Request): Response => {
  return new Response("Hello World\n", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
};

console.log(`Server running on http://localhost:${port}`);
await serve(handler, { port });
