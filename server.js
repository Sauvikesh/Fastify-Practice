// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const PORT = 3000;


const data = require('./data');

// Declare a route
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