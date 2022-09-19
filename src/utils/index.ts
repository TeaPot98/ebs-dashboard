export const Roles = {
  Moderator: "Moderator",
  Administrator: "Administrator",
};

export const Categories = {
  General: "General",
  News: "News",
  Nature: "Nature",
  Healthcare: "Healthcare",
  Sport: "Sport",
};

export const formatDate = (date: Date) => {
  let year = date.toLocaleString("default", { year: "numeric" });
  let month = date.toLocaleString("default", {
    month: "2-digit",
  });
  let day = date.toLocaleDateString("default", { day: "2-digit" });

  return `${year}-${month}-${day}`;
};
