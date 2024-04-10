// Require the framework and instantiate it
import Fastify from 'fastify';
import { dataRouter } from './routes/data-routes';
import { decorateName } from './plugins/decorate-name';

const PORT = 3000;



export async function startServer() {
  // creates a fastify instance which does everything
  const fastify = Fastify({
    logger: true
  })

  try {

    fastify.decorateRequest('app', 'cool')
    
    await fastify.register(decorateName);
    fastify.register(dataRouter);

    // Run the server!
    fastify.listen({ port: PORT }, (err) => {
      if (err) {
        fastify.log.error(err)
        process.exit(1)
      }
    })
  }
  catch (error) {
    console.error(error);
  }
}

(async () => {
  await startServer();
})();