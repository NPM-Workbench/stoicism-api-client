/// <reference types="jest" />
import { getStoicQuote } from '../index.js';

/* mock console.error to keep test output clean */
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('getStoicQuote', () => {
  const originalFetch = (global as any).fetch;

  afterEach(() => {
    if (originalFetch) (global as any).fetch = originalFetch;
    else delete (global as any).fetch;
    jest.restoreAllMocks();
  });

  /* #1 */
  test('returns api-ok when response ok', async () => {
    const mockPayload = { author: 'Marcus Aurelius', quote: 'You have power' };
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({ data: mockPayload }),
    };
    (global as any).fetch = jest.fn().mockResolvedValue(mockResponse);

    const res = await getStoicQuote();
    expect(res.code).toBe('api-ok');
  });

  /* #2 */
  test('returns expected payload when response ok', async () => {
    const mockPayload = { author: 'Marcus Aurelius', quote: 'You have power' };
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({ data: mockPayload }),
    };
    (global as any).fetch = jest.fn().mockResolvedValue(mockResponse);

    const res = await getStoicQuote();
    expect(res.payload).toEqual(mockPayload);
  });

  /* #3 */
  test('returns api-fail when response.ok is false', async () => {
    const mockResponse = {
      ok: false,
      json: jest.fn().mockResolvedValue({}),
    };
    (global as any).fetch = jest.fn().mockResolvedValue(mockResponse);

    const res = await getStoicQuote();
    expect(res.code).toBe('api-fail');
    expect(res.payload).toBeNull();
  });

  /* #4 */
  test('returns api-fail when fetch throws', async () => {
    (global as any).fetch = jest.fn().mockRejectedValue(new Error('network'));

    const res = await getStoicQuote();
    expect(res.code).toBe('api-fail');
    expect(res.payload).toBeNull();
  });

  /* #5 */
  test('targets the stoic quote endpoint', async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({ data: {} }),
    };
    (global as any).fetch = jest.fn().mockResolvedValue(mockResponse);

    await getStoicQuote();
    expect((global as any).fetch).toHaveBeenCalledWith(
      'https://stoic.tekloon.net/stoic-quote',
    );
  });
});
