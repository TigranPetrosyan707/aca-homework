function getHigherSalary(employess, salaryRate) {
  return employess.filter((employee) => employee.salary > salaryRate);
}

getHigherSalary(
  [
    {
      firstName: "Flemming",
      lastName: "Scroggins",
      email: "fscroggins7@msu.edu",
      salary: 250000,
      isEngineer: false,
      gender: "Male",
    },
    {
      firstName: "Sallee",
      lastName: "Schlagh",
      email: "sschlagh8@reuters.com",
      salary: 190000,
      isEngineer: false,
      gender: "Female",
    },
    {
      firstName: "Roxine",
      lastName: "Bedo",
      email: "rbedo9@whitehouse.gov",
      salary: 125000,
      isEngineer: false,
      gender: "Female",
    },
  ],
  150000
);
