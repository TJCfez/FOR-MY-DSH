/**
 * for-my-dsh — minimal DSH bundle plugin.
 *
 * Exports only named bindings (a default export makes the Cordis loader
 * collapse the namespace and drop inject/apply).
 */

/** Stable Cordis plugin name. */
export const name = 'for-my-dsh'

/**
 * Entry point invoked when the bundle row mounts.
 * @param {object} ctx - plugin context.
 */
export function apply(ctx) {
  ctx?.logger?.info?.('for-my-dsh loaded')
}