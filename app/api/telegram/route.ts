/**
 * app/api/telegram/route.ts
 *
 * Telegram webhook endpoint.
 * URL: https://hamzateha-8abg.vercel.app/api/telegram
 *
 * GET  → health-check (returns bot status, safe to call publicly)
 * POST → webhook (secret-verified, processes Telegram updates)
 */

import { NextRequest, NextResponse } from 'next/server';
import { handleUpdate } from '@/lib/telegram/bot';
import type { TelegramUpdate } from '@/lib/telegram/types';

// ─── GET — health-check ───────────────────────────────────────────────────────
// Returns a 200 with basic status info.
// Safe to expose publicly — reveals nothing sensitive.
// Useful to confirm the endpoint is reachable before registering the webhook.

export async function GET(): Promise<NextResponse> {
  const tokenConfigured  = Boolean(process.env.TELEGRAM_BOT_TOKEN);
  const secretConfigured = Boolean(process.env.TELEGRAM_WEBHOOK_SECRET);

  return NextResponse.json(
    {
      ok:        true,
      service:   'HamzaTeha Business Bot',
      version:   '1.0.0',
      phase:     'Phase 1 — Commands & Keyboard',
      env: {
        token_configured:  tokenConfigured,
        secret_configured: secretConfigured,
      },
    },
    { status: 200 }
  );
}

// ─── POST — webhook ───────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // ── 1. Guard: secret env var must be set ──────────────────────────────
    const secret = process.env.TELEGRAM_WEBHOOK_SECRET;

    if (!secret) {
      console.error('[telegram/route] TELEGRAM_WEBHOOK_SECRET is not set');
      // 500 — server is misconfigured. Telegram will retry but that is
      // preferable to silently accepting unverified requests with 200.
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    // ── 2. Verify the request came from Telegram ──────────────────────────
    const incomingSecret = req.headers.get('x-telegram-bot-api-secret-token');

    if (incomingSecret !== secret) {
      // 401 is correct here — this is not from Telegram
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // ── 3. Parse the update ───────────────────────────────────────────────
    const update: TelegramUpdate = await req.json();

    // ── 4. Process ────────────────────────────────────────────────────────
    await handleUpdate(update);

    return NextResponse.json({ ok: true }, { status: 200 });

  } catch (error) {
    // Log full error to Vercel logs — never expose internals to caller
    console.error('[telegram/route] Unhandled error:', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
