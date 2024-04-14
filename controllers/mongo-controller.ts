import { FastifyReply, FastifyRequest } from "fastify";
import { findUser, getAllUsers } from "../mongo";

export async function getUserHandler (request: any,
    reply: FastifyReply) {
        
    const username = request.params.username;

    const user = await findUser(username);

    reply.send({ userData: user })
}

export async function getAllUsersHandler (request: any,
    reply: FastifyReply) {
        
    const users = await getAllUsers();

    reply.send({ allUsers: users })
}