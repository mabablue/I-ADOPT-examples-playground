import { getRaw } from '$lib/store/variable.js';

export const prerender = true;


/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {

  // retrieve file content
  const raw = await getRaw( params.path + '.ttl' );

  return new Response( raw, {
		headers: {
			'Content-Type': 'text/turtle'
		}
	});

};
