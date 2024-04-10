import { FastifyReply, FastifyRequest } from "fastify";
import data from "../data";

export async function addOneHandler(
    request: FastifyRequest,
    reply: FastifyReply
): Promise<any> {
    const requestBody: any = request.body;
    data.push(requestBody);
    reply.send(requestBody);
}