import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  const env = (locals as any).runtime?.env;
  const stripeSecret = env?.STRIPE_SECRET_KEY;

  if (!stripeSecret) {
    return new Response('Stripe not configured', { status: 500 });
  }

  const origin = new URL(request.url).origin;

  const body = new URLSearchParams({
    'mode': 'payment',
    'line_items[0][price]': env.STRIPE_PRICE_ID || 'price_PLACEHOLDER',
    'line_items[0][quantity]': '1',
    'success_url': `${origin}/pro/success?session_id={CHECKOUT_SESSION_ID}`,
    'cancel_url': `${origin}/pro`,
  });

  const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${stripeSecret}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Stripe error:', err);
    return new Response('Payment error', { status: 500 });
  }

  const session = await res.json() as { url: string };
  return Response.redirect(session.url, 303);
};
