const useCustomDate = (initialDate) => {
  const formattedDate = formatDate(initialDate);

  function formatDate(date) {
    const d = new Date(date);
    const localDate = d.toISOString().slice(0, 19).replace("T", " ");

    return localDate;
  }

  return [formattedDate];
};

export default useCustomDate;
