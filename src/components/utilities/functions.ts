/**
 * Truncates a given text to a specified length and appends "..." if it exceeds that length.
 *
 * @param {string} text - The input text to be truncated.
 * @param {number} [length=120] - The maximum allowed length before truncation. Default is 120.
 * @returns {string} - The truncated text with "..." appended if it was cut off.
 */
export function textSlice(text: string, length: number = 50): string {
    if (text.length > length) {
        return text.slice(0, length) + "...";
    } else {
        return text;
    }
}