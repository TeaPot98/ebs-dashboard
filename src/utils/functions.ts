export const formatDate = (date: Date) => {
  let year = date.toLocaleString("default", { year: "numeric" });
  let month = date.toLocaleString("default", {
    month: "2-digit",
  });
  let day = date.toLocaleDateString("default", { day: "2-digit" });

  return `${year}-${month}-${day}`;
};

export const getOneWeekDays = (start: number) => {
  let weekDays: string[] = [];

  let current = new Date();
  let firstDay = current.getDate() + start;

  for (let i = firstDay; i < firstDay + 7; i++) {
    let day = new Date(current.setDate(i)).toISOString().slice(0, 10);
    weekDays.push(day);
  }

  return weekDays;
};
