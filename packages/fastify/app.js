
import Fastify from 'fastify';
import { ngnl_router } from '../routers/index.js';



export const start = async () => {

  const fastify = Fastify({
    logger: true,
  });

  await fastify.register( ngnl_router );

  fastify.listen({ port: 3000 }, function ( err, address ) {
    if ( err ) {
      fastify.log.error( err );
      process.exit( 1 );
    }
    console.log( 'CONECTADO' );
  });
};

await start();
