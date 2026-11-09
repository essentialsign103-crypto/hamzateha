/**
 * lib/telegram/types.ts
 *
 * TypeScript type definitions for Telegram Bot API objects.
 * Only the fields we actually use are defined here — this keeps
 * the file small and easy to understand.
 */

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  is_bot: boolean;
}

export interface TelegramChat {
  id: number;
  type: 'private' | 'group' | 'supergroup' | 'channel';
  first_name?: string;
  username?: string;
}

export interface TelegramMessage {
  message_id: number;
  from?: TelegramUser;
  chat: TelegramChat;
  date: number;
  text?: string;
}

export interface TelegramCallbackQuery {
  id: string;
  from: TelegramUser;
  message?: TelegramMessage;
  data?: string;
}

/** The top-level object Telegram sends to your webhook on every event. */
export interface TelegramUpdate {
  update_id: number;
  message?: TelegramMessage;
  callback_query?: TelegramCallbackQuery;
}

/** A single button that appears in an inline keyboard row. */
export interface InlineKeyboardButton {
  text: string;
  callback_data?: string;
  url?: string;
}

/** The inline keyboard markup sent alongside a message. */
export interface InlineKeyboardMarkup {
  inline_keyboard: InlineKeyboardButton[][];
}

/** Parameters accepted by the sendMessage Telegram API method. */
export interface SendMessageParams {
  chat_id: number;
  text: string;
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';
  reply_markup?: InlineKeyboardMarkup;
}
