import { FastifyInstance, FastifyRequest } from "fastify"
import { findUser } from "../mongo"
import { getUserQueryString } from "../schemas/mongo-schemas";
import { getUserhandler } from "../controllers/mongo-controller";

export async function mongoRouter(fastify: FastifyInstance) {

    fastify.get('/getUser/:username', getUserQueryString, getUserhandler);
}