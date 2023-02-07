export const capitalize = (value) => {
  if (typeof value !== "string") return "";
  const words = value?.toLocaleLowerCase().trim().split(" ");
  return words
    .map((word) =>
      word?.length === 0 ? word : word[0].toUpperCase() + word.substring(1)
    )
    .join(" ");
};
