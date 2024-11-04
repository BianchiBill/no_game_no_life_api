

import Fastify from 'fastify';
import { ngnl_router } from '../routers/index.js';

const app = Fastify({
  logger: true,
});

await app.register( ngnl_router );

app.get( '/', async ( req, res ) => {
  return res.status( 200 ).type( 'text/plain' ).send( 'Olá, este é um texto de exemplo!' );
});


export default async function handler ( req, res ) {
  await app.ready();
  app.server.emit( 'request', req, res );
}

// // rodar localmente
// if ( process.env.NODE_ENV !== 'production' ) {
//   app.listen({ port: 8081 }, ( err, address ) => {
//     if ( err ) {
//       app.log.error( err );
//       process.exit( 1 );
//     }
//     app.log.info( `Servidor rodando em ${address}` );
//   });
// }
