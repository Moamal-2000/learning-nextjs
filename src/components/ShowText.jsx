"use client";

function ShowText({ slug, index }) {
  const slashes = Array.from({ length: index + 1 })
    .map((_) => "-")
    .join("");

  if (slug?.length <= index || !slug) return "";

  return (
    <h2>
      {slashes} {slug?.[index]}
    </h2>
  );
}

export default ShowText;
