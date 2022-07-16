function getEmployeesEmails(employees) {
  return employees.reduce(function (aggr, employee) {
    return (aggr += employee.email + " \\ ");
  }, "");
}

getEmployeesEmails([
  {
    firstName: "Flemming",
    lastName: "Scroggins",
    email: "fscroggins7@msu.edu",
    salary: 200000,
    isEngineer: false,
    gender: "Male",
  },
  {
    firstName: "Sallee",
    lastName: "Schlagh",
    email: "sschlagh8@reuters.com",
    salary: 126000,
    isEngineer: false,
    gender: "Female",
  },
  {
    firstName: "Roxine",
    lastName: "Bedo",
    email: "rbedo9@whitehouse.gov",
    salary: 459000,
    isEngineer: false,
    gender: "Female",
  },
]);
