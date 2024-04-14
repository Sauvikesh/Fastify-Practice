import { FastifyInstance } from "fastify/types/instance";

export async function decorateName(fastify: FastifyInstance, opts: any) {
    fastify.decorate('appName', "Fastify Test App"); 
  }