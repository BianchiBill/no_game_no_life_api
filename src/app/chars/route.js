import { chars } from '../../../packages/chars';

export async function GET () {
  return new Response(
    JSON.stringify( chars ),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    },
  );
}
