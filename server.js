// Require the framework and instantiate it
import Fastify from 'fastify';
const PORT = 3000;

const fastify = Fastify({
  logger: true
})

fastify.get('/', function handler (request, reply) {
  reply.send({ hello: "world" })
})

fastify.get('/allData', function handler (request, reply) {
  reply.send({ data: data })
})

// Declare a route
fastify.get('/singleData/:id', function handler (request, reply) {
const {id} = request.params;

if (id > data.length) {
  reply.send({error: "out of index"})
}
else {
  reply.send({ data: data[id] })
}
})

// Run the server!
fastify.listen({ port: PORT }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})