// Require the framework and instantiate it
import Fastify from 'fastify';
import { dataRouter } from './routes/data-routes';

const PORT = 3000;

// creates a fastify instance which does everything
const fastify = Fastify({
  logger: true
})

fastify.register(dataRouter);

// Run the server!
fastify.listen({ port: PORT }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})