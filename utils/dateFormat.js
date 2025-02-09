function formatDate(dateStr) {
  const dateObj = new Date(dateStr);
  const dayNumber = dateObj.getDate();
  const monthName = dateObj.toLocaleString("default", { month: "long" });
  const yearNumber = dateObj.getFullYear();
  return `${monthName} ${yearNumber}`;
}

export default formatDate;
