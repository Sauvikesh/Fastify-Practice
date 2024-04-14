import { FastifyInstance } from "fastify/types/instance";
import { mongoClose, mongoRun } from "../mongo";

export async function runCloseMongo(fastify: FastifyInstance, opts: any, done: any) {

    fastify.addHook('onReady', async function () {
        await mongoRun();
        console.log("server is READY")
      })
  
      fastify.addHook('onClose', async function () {
        await mongoClose();
        console.log("server is closed")
      })
    done();
}