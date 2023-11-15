/**
 * Generates cryptographically strong pseudorandom data, it will return
 * an Uint8Array object. This function use `crypto.randomBytes()` in node.js
 * and `window.crypto.getRandomValues()` in Web browser.
 *
 * You can convert it to hex by `uint8Array2Hex()` or use some base64
 * library to convert it to string.
 */
export function randomBytes(bufferSize: number): Uint8Array {
  // This checks if the code is running in a Node.js environment
  if (typeof process === 'object' && typeof require === 'function') {
    const { randomBytes: rb } = require('crypto');
    return new Uint8Array(rb(bufferSize));
  } else {
    // For web environments, use the Web Crypto API
    const buffer = new Uint8Array(bufferSize);
    window.crypto.getRandomValues(buffer);
    return buffer;
  }
}
