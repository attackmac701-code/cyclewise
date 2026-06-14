import type { APIRoute } from 'astro';
import { env as cfEnv } from 'cloudflare:workers';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const STRIPE_SECRET_KEY = (cfEnv as any).STRIPE_SECRET_KEY;
  const STRIPE_PRICE_ID = (cfEnv as any).STRIPE_PRICE_ID || 'price_1TiKouRryRKDTUoZYTO69OZJ';

  if (!STRIPE_SECRET_KEY) {
    return new Response(JSON.stringify({ error: 'Stripe not configured' }), { status: 500 });
  }

  const origin = new URL(request.url).origin;

  const params = new URLSearchParams({
    'payment_method_types[]': 'card',
    'line_items[0][price]': STRIPE_PRICE_ID,
    'line_items[0][quantity]': '1',
    'mode': 'payment',
    'success_url': `${origin}/pro/success?session_id={CHECKOUT_SESSION_ID}`,
    'cancel_url': `${origin}/pro`,
    'metadata[product]': 'cyclewise_pro',
  });

  const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  const session = await res.json() as any;

  if (!session.url) {
    return new Response(JSON.stringify({ error: 'Failed to create session', detail: session }), { status: 500 });
  }

  return Response.redirect(session.url, 303);
};
