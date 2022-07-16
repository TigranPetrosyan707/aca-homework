function findEmployee(employess, employeeName) {
  return employess.find((employes) => employes.firstName === employeeName);
}

findEmployee(
  [
    {
      firstName: "Flemming",
      lastName: "Scroggins",
      email: "fscroggins7@msu.edu",
      salary: "$7.54",
      isEngineer: false,
      gender: "Male",
    },
    {
      firstName: "Sallee",
      lastName: "Schlagh",
      email: "sschlagh8@reuters.com",
      salary: "$2.24",
      isEngineer: false,
      gender: "Female",
    },
    {
      firstName: "Roxine",
      lastName: "Bedo",
      email: "rbedo9@whitehouse.gov",
      salary: "$6.47",
      isEngineer: false,
      gender: "Female",
    },
  ],
  "Flemming"
);
