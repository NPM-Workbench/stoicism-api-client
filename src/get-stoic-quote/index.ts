/* app imports */
import { TStoicQuoteResponse } from "../index.js";

/* types */
type TOutput = TStoicQuoteResponse;

/* module */
async function getStoicQuote(): Promise<TOutput> {
  /* setup */
  const API_BASE_URL = "https://stoic.tekloon.net";
  const API_URL = `${API_BASE_URL}/stoic-quote`;

  try {
    /* fetch */
    const response = await fetch(API_URL);

    /* check and return */
    if (!response.ok) {
      throw new Error("[Bad]: Get Stoic Quote Error!");
    } else {
      const { data } = await response.json();
      return {
        code: "api-ok",
        message: "No errors encountered",
        payload: data
      };
    }
  } catch (error) {
    console.error(error);
    return {
      code: "api-fail",
      message: "Get Stoic Quote: Encountered Error!",
      payload: null
    };
  }
}

/* exports */
export { getStoicQuote };
