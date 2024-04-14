import { FastifyReply, FastifyRequest } from "fastify";
import { findUser } from "../mongo";

export async function getUserhandler (request: any,
    reply: FastifyReply) {
        
    const username = request.params.username;

    const user = await findUser(username);

    reply.send({ userData: user })
}