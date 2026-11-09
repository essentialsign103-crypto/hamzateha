/**
 * lib/telegram/bot.ts
 *
 * Core bot logic.
 * - sendMessage()       → sends any text to a Telegram chat
 * - handleUpdate()      → decides what to reply based on what the user sent
 *
 * All responses use your real portfolio URL and stay professional & friendly.
 * No AI or database calls — that belongs to Phase 2.
 */

import type {
  TelegramUpdate,
  SendMessageParams,
  InlineKeyboardMarkup,
} from './types';

// ─── Constants ────────────────────────────────────────────────────────────────

const PORTFOLIO_URL = 'https://hamzateha-8abg.vercel.app';
const TELEGRAM_API  = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

// ─── Main keyboard (shown on /start, /help, and greetings) ───────────────────

const MAIN_KEYBOARD: InlineKeyboardMarkup = {
  inline_keyboard: [
    [
      { text: '🛠 Our Services',   callback_data: 'services'  },
      { text: '💼 View Portfolio', callback_data: 'portfolio' },
    ],
    [
      { text: '📩 Contact Hamza', callback_data: 'contact' },
    ],
  ],
};

// ─── sendMessage ──────────────────────────────────────────────────────────────

/**
 * Sends a message to a Telegram chat via the Bot API.
 * Returns the parsed JSON response from Telegram.
 */
export async function sendMessage(params: SendMessageParams): Promise<void> {
  const url = `${TELEGRAM_API}/sendMessage`;

  const res = await fetch(url, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(params),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Telegram sendMessage failed (${res.status}): ${body}`);
  }
}

// ─── answerCallbackQuery ──────────────────────────────────────────────────────

/**
 * Acknowledges a button press so Telegram stops showing the loading spinner.
 */
async function answerCallbackQuery(callbackQueryId: string): Promise<void> {
  await fetch(`${TELEGRAM_API}/answerCallbackQuery`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ callback_query_id: callbackQueryId }),
  });
}

// ─── Response builders ────────────────────────────────────────────────────────

function startResponse(firstName: string): SendMessageParams['text'] {
  return (
    `👋 <b>Hello, ${firstName}!</b>\n\n` +
    `Welcome to <b>HamzaTeha Business Bot</b> — your direct line to Hamza Teha, ` +
    `a Freelance Full-Stack Developer based in Ethiopia.\n\n` +
    `I can help you explore Hamza's services, view his portfolio, or get in touch directly.\n\n` +
    `<b>What would you like to do?</b>`
  );
}

const HELP_TEXT =
  `📋 <b>Available Commands</b>\n\n` +
  `/start      — Welcome message & main menu\n` +
  `/help       — Show this command list\n` +
  `/services   — View services offered\n` +
  `/portfolio  — Browse live projects\n\n` +
  `You can also just say <b>Hi</b>, <b>Hello</b>, or <b>Salam</b> to get started.\n\n` +
  `Use the buttons below to navigate quickly 👇`;

const SERVICES_TEXT =
  `🛠 <b>Services by Hamza Teha</b>\n\n` +
  `<b>1. Full-Stack Web Development</b>\n` +
  `   Custom React & Next.js applications, responsive layouts, REST APIs\n\n` +
  `<b>2. Backend & API Engineering</b>\n` +
  `   Node.js / Express servers, relational databases (PostgreSQL / MySQL), RBAC\n\n` +
  `<b>3. UI/UX & Frontend Engineering</b>\n` +
  `   Design systems, Tailwind CSS, accessible interfaces, micro-animations\n\n` +
  `<b>4. Video Editing & Graphic Design</b>\n` +
  `   Premiere Pro, After Effects, brand identity, social media assets\n\n` +
  `📌 Visit the full services page:\n${PORTFOLIO_URL}/#services`;

const PORTFOLIO_TEXT =
  `💼 <b>Selected Live Projects</b>\n\n` +
  `🏥 <b>HU CMS</b> — Clinic Management System\n` +
  `   <a href="https://hucms.vercel.app/">hucms.vercel.app</a>\n\n` +
  `📦 <b>HUIS</b> — University Inventory Management\n` +
  `   <a href="https://huis-inky.vercel.app/">huis-inky.vercel.app</a>\n\n` +
  `🎬 <b>TEHA TECH</b> — Creator Command Center\n` +
  `   <a href="https://tehatech-creator-commend-center.vercel.app/">tehatech-creator-commend-center.vercel.app</a>\n\n` +
  `🖼 <b>ImageFit</b> — Browser Image Utility\n` +
  `   <a href="https://imagefitv1-d8bx.vercel.app/">imagefitv1-d8bx.vercel.app</a>\n\n` +
  `🌐 <b>Full Portfolio:</b> <a href="${PORTFOLIO_URL}">${PORTFOLIO_URL}</a>`;

const CONTACT_TEXT =
  `📩 <b>Get in Touch with Hamza</b>\n\n` +
  `You can reach Hamza directly through any of these channels:\n\n` +
  `✉️  <b>Email:</b> hamzatehafeko8@gmail.com\n` +
  `💬  <b>Telegram:</b> @hamzateha\n` +
  `🔗  <b>LinkedIn:</b> linkedin.com/in/hamzateha\n` +
  `🐙  <b>GitHub:</b> github.com/hamzatehafeko8-boop\n\n` +
  `Or use the contact form on the portfolio:\n` +
  `${PORTFOLIO_URL}/#contact\n\n` +
  `Hamza typically responds within <b>24 hours</b>. 🚀`;

const FALLBACK_TEXT =
  `🤔 I didn't quite understand that.\n\n` +
  `Try one of these commands:\n` +
  `/start • /help • /services • /portfolio\n\n` +
  `Or tap a button below 👇`;

// ─── handleUpdate ─────────────────────────────────────────────────────────────

/**
 * Main entry point. Called by the webhook route for every incoming update.
 * Reads the update, decides the correct response, and sends it.
 */
export async function handleUpdate(update: TelegramUpdate): Promise<void> {
  // ── Handle button presses ──────────────────────────────────────────────────
  if (update.callback_query) {
    const { id, from, message, data } = update.callback_query;
    const chatId = message?.chat.id ?? from.id;

    // Always acknowledge the callback so the button spinner stops
    await answerCallbackQuery(id);

    switch (data) {
      case 'services':
        await sendMessage({ chat_id: chatId, text: SERVICES_TEXT,  parse_mode: 'HTML', reply_markup: MAIN_KEYBOARD });
        break;
      case 'portfolio':
        await sendMessage({ chat_id: chatId, text: PORTFOLIO_TEXT, parse_mode: 'HTML', reply_markup: MAIN_KEYBOARD });
        break;
      case 'contact':
        await sendMessage({ chat_id: chatId, text: CONTACT_TEXT,   parse_mode: 'HTML', reply_markup: MAIN_KEYBOARD });
        break;
      default:
        await sendMessage({ chat_id: chatId, text: FALLBACK_TEXT,  parse_mode: 'HTML', reply_markup: MAIN_KEYBOARD });
    }
    return;
  }

  // ── Handle text messages ───────────────────────────────────────────────────
  if (!update.message?.text) return;

  const { text, chat, from } = update.message;
  const chatId    = chat.id;
  const firstName = from?.first_name ?? 'there';
  const input     = text.trim().toLowerCase();

  // /start
  if (input === '/start') {
    await sendMessage({
      chat_id:      chatId,
      text:         startResponse(firstName),
      parse_mode:   'HTML',
      reply_markup: MAIN_KEYBOARD,
    });
    return;
  }

  // /help
  if (input === '/help') {
    await sendMessage({
      chat_id:      chatId,
      text:         HELP_TEXT,
      parse_mode:   'HTML',
      reply_markup: MAIN_KEYBOARD,
    });
    return;
  }

  // /services
  if (input === '/services') {
    await sendMessage({
      chat_id:      chatId,
      text:         SERVICES_TEXT,
      parse_mode:   'HTML',
      reply_markup: MAIN_KEYBOARD,
    });
    return;
  }

  // /portfolio
  if (input === '/portfolio') {
    await sendMessage({
      chat_id:      chatId,
      text:         PORTFOLIO_TEXT,
      parse_mode:   'HTML',
      reply_markup: MAIN_KEYBOARD,
    });
    return;
  }

  // Greetings: Hi, Hello, Salam (and common variations)
  const greetings = ['hi', 'hello', 'salam', 'hey', 'hii', 'helo', 'selam'];
  if (greetings.some((g) => input === g || input.startsWith(g + ' '))) {
    await sendMessage({
      chat_id:      chatId,
      text:         startResponse(firstName),
      parse_mode:   'HTML',
      reply_markup: MAIN_KEYBOARD,
    });
    return;
  }

  // Unrecognised input
  await sendMessage({
    chat_id:      chatId,
    text:         FALLBACK_TEXT,
    parse_mode:   'HTML',
    reply_markup: MAIN_KEYBOARD,
  });
}
