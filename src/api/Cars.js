import data from "./cars.json";


export const getCars = () => {
  return data;
};

export default (req, res) => {
  const cars = getCars();
  res.json(cars);
};