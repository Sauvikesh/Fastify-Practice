export const singleUserQueryString = {
      params: {
        type: 'object',
        properties: {
          username: { type: 'string' },
        }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          userData: {
            type: 'object',
            properties: {
              _id: { type: 'string' },
              name: { type: 'string' }
            }
          }
        }
      }
    }
}