import { FastifyInstance, FastifyRequest } from "fastify"
import { singleUserQueryString } from "../schemas/mongo-schemas";
import { createUserHandler, getAllUsersHandler, getUserHandler } from "../controllers/mongo-controller";

export async function mongoRouter(fastify: FastifyInstance) {

    fastify.get('/getUser/:username', singleUserQueryString, getUserHandler);

    fastify.post('/createUser/:username', singleUserQueryString, createUserHandler);

    fastify.get('/getAllUsers', getAllUsersHandler);

}