import format from "date-fns/format";

export const getCurrentSeason = () => {
  const thisMonth = Number(format(new Date(), "M"));
  switch (thisMonth) {
    case 3:
    case 4:
    case 5:
      return {
        label: "spring",
        value: "春",
      };
    case 6:
    case 7:
    case 8:
      return {
        label: "summer",
        value: "夏",
      };
    case 9:
    case 10:
    case 11:
      return {
        label: "autumn",
        value: "秋",
      };
    case 1:
    case 2:
    case 12:
      return {
        label: "winter",
        value: "冬",
      };
  }
};
