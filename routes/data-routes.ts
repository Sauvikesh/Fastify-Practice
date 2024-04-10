import { FastifyInstance } from "fastify"
import data from "../data"
import { addOneHandler } from "../controllers/data-controller"
import { addOneQueryString } from "../schemas/data-schema"

export async function dataRouter(fastify: FastifyInstance) {

    // basic routes
    fastify.get('/', function handler (request, reply) {
        reply.send({ hello: "world" })
    })
  
    fastify.get('/allData', function handler (request, reply) {
        reply.send({ data: data })
    })
    
    fastify.get('/singleData/:id', function handler (request: any, reply) {
    const {id} = request.params;
    
    if (id > data.length) {
        reply.send({error: "out of index"})
    }
    else {
        reply.send({ data: data[id] })
    }
    })

    fastify.post('/addOne', addOneQueryString, addOneHandler);
}