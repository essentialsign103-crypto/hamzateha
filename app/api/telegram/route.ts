/**
 * app/api/telegram/route.ts
 *
 * This is the Telegram webhook endpoint.
 * Telegram will POST every user message to:
 *   https://hamzateha-8abg.vercel.app/api/telegram
 *
 * Security:
 *   - GET requests return 405 (not allowed)
 *   - Every POST is verified against TELEGRAM_WEBHOOK_SECRET
 *     using the X-Telegram-Bot-Api-Secret-Token header
 *   - Invalid or missing secrets return 401 (unauthorized)
 *   - All errors are caught and return 500 without leaking details
 */

import { NextRequest, NextResponse } from 'next/server';
import { handleUpdate } from '@/lib/telegram/bot';
import type { TelegramUpdate } from '@/lib/telegram/types';

// Reject every method except POST
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // ── 1. Verify the webhook secret ────────────────────────────────────────
    const secret = process.env.TELEGRAM_WEBHOOK_SECRET;

    if (!secret) {
      // If the env var is missing, refuse all requests for safety
      console.error('[telegram/route] TELEGRAM_WEBHOOK_SECRET is not set');
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    const incomingSecret = req.headers.get('x-telegram-bot-api-secret-token');

    if (incomingSecret !== secret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // ── 2. Parse the incoming update ────────────────────────────────────────
    const update: TelegramUpdate = await req.json();

    // ── 3. Hand off to the bot logic ────────────────────────────────────────
    await handleUpdate(update);

    // ── 4. Always return 200 to Telegram ────────────────────────────────────
    // If we return anything other than 200, Telegram will keep retrying.
    return NextResponse.json({ ok: true }, { status: 200 });

  } catch (error) {
    console.error('[telegram/route] Unhandled error:', error);
    // Return 200 to Telegram even on errors so it doesn't retry endlessly.
    // The real error is logged above for Vercel logs.
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
