/* eslint-disable no-unused-vars */
import { chars } from '../chars/index.js';

export const ngnl_router = async ( fastify, options ) => {
  fastify.get( '/', async () => {
    return chars;
  });

  fastify.get( '/:name', async ( request ) =>  chars[ request.params.name ] );





};
