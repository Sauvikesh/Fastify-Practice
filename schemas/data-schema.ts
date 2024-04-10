export const addOneQueryString = {
    schema: {
      body: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          name: { type: 'string' }
        }
      }
    }
}