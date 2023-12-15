const getNumber = (count) => {
  let numb = 0;
  numb = Math.floor(Math.random() * count + 1);
  return numb;
};

export default getNumber;
