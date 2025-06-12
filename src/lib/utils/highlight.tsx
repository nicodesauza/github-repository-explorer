export default function highlightText(text: string, keyword: string) {
  if (!keyword) return text;

  const regex = new RegExp(`(${keyword})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <mark key={i} className="bg-yellow-300 text-black">
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
