function itemsTaker(collectionOne, collectionTwo) {
  for (let i = 0; i < collectionTwo.length; i++) {
    collectionOne.push(collectionTwo[i]);
  }
  return collectionOne;
}

itemsTaker(
  [
    {
      firstName: "Arabela",
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
  ],
  [
    {
      firstName: "Batholomew",
      lastName: "Eim",
      email: "beim2@goodreads.com",
      salary: "$7.26",
      isEngineer: true,
      gender: "Male",
    },
    {
      firstName: "Ritchie",
      lastName: "Ferreira",
      email: "rferreira3@booking.com",
      salary: "$4.07",
      isEngineer: true,
      gender: "Male",
    },
  ]
);
