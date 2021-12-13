export const getYearList = () => {
  let yeardata = [];
  let maxOffset = 100;
  let thisYear = new Date().getFullYear();
  for (let x = 0; x <= maxOffset; x++) {
    yeardata.push({ key: `${thisYear - x}`, name: `${thisYear - x}` });
  }
  return yeardata;
};

export const getMonthAndDayList = (month) => {
  let Monthdata = [];
  let maxOffset = month;

  for (let x = 1; x <= maxOffset; x++) {
    Monthdata.push({
      key: `${x <= 9 ? (x = "0" + x) : x}`,
      name: `${x}`,
    });
  }
  return Monthdata;
};
