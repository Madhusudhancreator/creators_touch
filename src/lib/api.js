/**
 * api.js — thin fetch helpers for the Creators Touch backend.
 *
 * All functions return null on any failure (network error, non-200, bad JSON).
 * Consumers must always handle null by falling back to hardcoded defaults.
 *
 * fetchBlocks() is called from the server component page.js at request time.
 * The `next: { revalidate: 60 }` option means Next.js caches the response for
 * 60 seconds (ISR-style), so the backend isn't hammered on every page load.
 * Set revalidate to 0 during active admin editing to see changes immediately.
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/**
 * Fetches all blocks from GET /api/blocks.
 * Returns an array of block objects, or null if the request fails.
 *
 * @returns {Promise<Array|null>}
 */
/**
 * Fetches all blog posts from GET /api/blogs.
 * Returns an array, or null if the request fails.
 *
 * @returns {Promise<Array|null>}
 */
export async function fetchBlogs() {
  try {
    const res = await fetch(`${BASE_URL}/api/blogs`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function fetchBlocks() {
  try {
    const res = await fetch(`${BASE_URL}/api/blocks`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

/**
 * Finds a specific enabled block from a blocks array.
 * Returns the block object, or null if not found / not enabled.
 *
 * @param {Array|null} blocks  - result of fetchBlocks()
 * @param {string}     section - section slug, e.g. "reviews"
 * @returns {object|null}
 */
export function getBlock(blocks, section) {
  if (!Array.isArray(blocks)) return null;
  return blocks.find((b) => b.section === section && b.enabled) ?? null;
}
