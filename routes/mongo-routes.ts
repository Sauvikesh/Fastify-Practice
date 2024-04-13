import { FastifyInstance, FastifyRequest } from "fastify"
import { findUser } from "../mongo"

export async function mongoRouter(fastify: FastifyInstance) {

    // fastify.addHook("onRequest", async () => {
    //     fastify.log.info("recieved a request");
    // })
    // fastify.addHook("onResponse", async () => {
    //     fastify.log.info("sent a response");
    // })
  
    fastify.get('/getUser/:username', async function handler (request: any, reply) {
        const username = request.params.username;

        const user = await findUser(username);

        // assuming the body is the name of the user: "sauvikesh" and the
        reply.send({ userData: user })
    })
    
}