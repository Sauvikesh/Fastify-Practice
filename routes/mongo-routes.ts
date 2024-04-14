import { FastifyInstance, FastifyRequest } from "fastify"
import { getUserQueryString } from "../schemas/mongo-schemas";
import { getAllUsersHandler, getUserHandler } from "../controllers/mongo-controller";

export async function mongoRouter(fastify: FastifyInstance) {

    fastify.get('/getUser/:username', getUserQueryString, getUserHandler);

    fastify.get('/getAllUsers', getAllUsersHandler);

}