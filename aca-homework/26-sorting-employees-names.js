function sortByNames(employees) {
  let sortedArray = employees.sort((max, min) => {
    let maxOrder = max.firstName.toLowerCase();
    let minOrder = min.firstName.toLowerCase();

    if (maxOrder < minOrder) {
      return -1;
    }
    if (maxOrder > minOrder) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}

sortByNames([
  {
    firstName: "Frabela",
    lastName: "Fockes",
    email: "afockes0@wired.com",
    salary: "$6.18",
    isEngineer: true,
    gender: "Female",
  },
  {
    firstName: "Bryant",
    lastName: "Marchi",
    email: "bmarchi1@theatlantic.com",
    salary: "$8.05",
    isEngineer: false,
    gender: "Male",
  },
  {
    firstName: "Batholomew",
    lastName: "Eim",
    email: "beim2@goodreads.com",
    salary: "$7.26",
    isEngineer: true,
    gender: "Male",
  },
]);
