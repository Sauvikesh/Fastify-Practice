import { FastifyInstance, FastifyRequest } from "fastify"
import { singleUserQueryString } from "../schemas/mongo-schemas";
import { createUserHandler, getAllUsersHandler, getUserHandler } from "../controllers/mongo-controller";

export async function mongoRouter(fastify: FastifyInstance) {

    fastify.route({
        method: 'GET',
        url: '/getUser/:username',
        schema: singleUserQueryString,
        handler: getUserHandler
    })

    fastify.route({
        method: 'POST',
        url: '/createUser/:username',
        schema: singleUserQueryString,
        handler: createUserHandler
    })

    fastify.route({
        method: 'GET',
        url: '/getAllUsers',
        handler: getAllUsersHandler
    })

}