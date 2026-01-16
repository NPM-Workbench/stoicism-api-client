export type TResponseTemplate = { code: "api-ok" | "api-fail", message: string };
export type TStoicQuote = { author: string, quote: string };
export type TStoicQuoteResponse = TResponseTemplate & {
  payload: null | TStoicQuote
};
