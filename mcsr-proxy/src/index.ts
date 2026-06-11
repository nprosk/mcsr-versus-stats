import { playerdbApiBaseUrl, rankedApiBaseUrl, minotarBaseUrl } from "../../src/constants";

/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const UPSTREAMS: Record<string, string> = {
	'/playerdb': playerdbApiBaseUrl,
	'/mcsr': rankedApiBaseUrl,
	'/minotar': minotarBaseUrl,
};

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);

		const prefix = Object.keys(UPSTREAMS).find(p => url.pathname.startsWith(p));
		if (!prefix) {
			return new Response('Not found', { status: 404 });
		}

		const upstream = UPSTREAMS[prefix] + url.pathname.slice(prefix.length) + url.search;

		const res = await fetch(upstream, {
			headers: { 'User-Agent': 'mcsr-versus-stats' },
		});

		return new Response(res.body, {
			status: res.status,
			headers: {
				'Content-Type': res.headers.get('Content-Type') ?? 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
		});
	},
} satisfies ExportedHandler<Env>;
