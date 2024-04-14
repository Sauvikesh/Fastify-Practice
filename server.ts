// Require the framework and instantiate it
import Fastify from 'fastify';
import { dataRouter } from './routes/data-routes';
import { decorateName } from './plugins/decorate-name';
import { runCloseMongo } from './plugins/run-close-mongo';
import { mongoRouter } from './routes/mongo-routes';

const PORT = 3000;



export async function startServer() {
  // creates a fastify instance which does everything
  const fastify = Fastify({
    logger: false
  })

  try {
    // basic route
    fastify.get('/', function handler (request, reply) {
      reply.send({ app: 'name' })
    })

    // mongo db connection plugin
    await fastify.register(runCloseMongo);

    // route plugins
    await fastify.register(dataRouter);
    await fastify.register(mongoRouter)

    // Run the server!
    fastify.listen({ port: PORT }, (err) => {
      if (err) {
        fastify.log.error(err)
        process.exit(1)
      }
    })
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  await startServer();
})();