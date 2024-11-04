/* eslint-disable no-unused-vars */
import { chars } from '../chars/index.js';

export const ngnl_router = async ( fastify, options ) => {
  fastify.get( '/ngnl', async () => {
    return chars;
  });

  fastify.get( '/ngnl/:name', async ( request ) =>  chars[ request.params.name ] );





};
