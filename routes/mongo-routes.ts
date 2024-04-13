import { FastifyInstance, FastifyRequest } from "fastify"
import { findUser } from "../mongo"

export async function mongoRouter(fastify: FastifyInstance) {

    fastify.get('/getUser/:username', async function handler (request: any, reply) {
        const username = request.params.username;

        const user = await findUser(username);

        reply.send({ userData: user })
    })
    
}