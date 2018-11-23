import moment from "moment";

export const getDaysArray = () => {
  const daysArray = [];

  daysArray.push(moment().subtract(2, "day"));
  daysArray.push(moment().subtract(1, "day"));
  daysArray.push(moment());
  daysArray.push(moment().add(1, "day"));
  daysArray.push(moment().add(2, "day"));

  return daysArray;
};
