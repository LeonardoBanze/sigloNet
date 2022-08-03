import moment from "moment";

export const randomDate = () => {
  return moment(
    new Date(+new Date() - Math.floor(Math.random() * 10000000000))
  ).format("MM/DD/YYYY");
};

export const randomPrice = () => {
  return Math.floor(Math.random() * 10) + Math.random();
};

export const randomQuantity = () => {
  return Math.floor(Math.random() * 20);
};
