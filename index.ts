import fastify from "fastify";

const server = fastify();

server.get("/", async (request, reply) => {
  return "Hello World";
});

server.get("/ping", async (request, reply) => {
  return "pongddddd\n";
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
