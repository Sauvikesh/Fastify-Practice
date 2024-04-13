// Require the framework and instantiate it
import Fastify from 'fastify';
import { mongoClose, mongoRun } from './mongo';
import { dataRouter } from './routes/data-routes';
import { decorateName } from './plugins/decorate-name';
import { mongoRouter } from './routes/mongo-routes';

const PORT = 3000;



export async function startServer() {
  // creates a fastify instance which does everything
  const fastify = Fastify({
    logger: true
  })

  try {

    fastify.decorateRequest('app', 'cool')
    
    fastify.addHook('onReady', async function () {
      // Some async code
      await mongoRun();
      console.log("server is READY")
    })

    fastify.addHook('onClose', async function () {
      // Some async code
      await mongoClose();
      console.log("server is closed")
    })
  
    // basic routes
    fastify.get('/', function handler (request, reply) {
      reply.send({ app: 'name' })
  })

    await fastify.register(decorateName);
    await fastify.register(dataRouter);
    await fastify.register(mongoRouter)

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