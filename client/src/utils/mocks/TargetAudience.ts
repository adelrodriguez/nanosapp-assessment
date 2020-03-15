import faker from 'faker';

export function mockTargetAudience(): TargetAudience {
  return {
    languages: Array(faker.random.number(5)).fill(undefined).map(faker.random.locale),
    gender: Array(faker.random.number(2)).fill(undefined).map(() => faker.random.arrayElement(['M', 'F', 'Other'])),
    age_range: [faker.random.number(), faker.random.number()],
    locations: Array(faker.random.number()).fill(undefined).map(faker.address.country),
    interests: Array(faker.random.number()).fill(undefined).map(faker.hacker.noun),
  };
}