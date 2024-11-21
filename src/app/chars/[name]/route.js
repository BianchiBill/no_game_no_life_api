import { chars } from '../../../../packages/chars/index.js';

export async function GET ( req, { params }) {
  const { name } = await params;

  return new Response(
    JSON.stringify( chars[ name ] ),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    },
  );
}
