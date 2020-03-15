import faker from 'faker';

export function mockCampaignSummary(count = 1): CampaignSummary[] {
  return Array(count)
    .fill(undefined)
    .map(() => ({
      id: faker.random.number(),
      name: faker.lorem.sentence(),
      goal: faker.lorem.sentence(),
      total_budget: +faker.finance.amount(100, 100000, 2),
      status: faker.random.arrayElement(['Scheduled', 'Delivering', 'Ended'])
    }));
}
