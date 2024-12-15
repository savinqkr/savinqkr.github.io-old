export function cleanContent(content: string) {
  // Replace closing tags of block elements with a space
  const textWithSpaces = content.replace(/<\/p>|<\/div>|<\/h[1-6]>/g, " ");

  // Remove all remaining HTML tags while preserving their text content
  const plainText = textWithSpaces.replace(/<[^>]+>/g, "");

  // Decode HTML entities
  const decodedText = plainText
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");

  // Clean up whitespace - replace multiple spaces with a single space and trim
  const cleanedText = decodedText.replace(/\s+/g, " ").trim();

  return cleanedText;
}
