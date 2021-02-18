const ages = {
  Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10,
};

const additionalAges = { Marilyn: 22, Spot: 237 };

const allAges = Object.assign(ages, additionalAges);

console.log(allAges);
