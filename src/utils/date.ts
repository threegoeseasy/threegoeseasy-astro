export default function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long", // Full weekday name
    year: "numeric", // Numeric representation of the year
    month: "long", // Full month name
    day: "numeric", // Day of the month
  });
}
