import faker from 'faker';
import { mockPlatform } from '.';

export function mockCampaign(): Campaign {
  return {
    id: faker.random.number(),
    name: faker.lorem.sentence(),
    goal: faker.lorem.sentence(),
    total_budget: +faker.finance.amount(100, 100000, 2),
    status: faker.random.arrayElement(['Scheduled', 'Delivering', 'Ended']),
    platforms: {
      instagram: mockPlatform(),
      facebook: mockPlatform(),
      google: mockPlatform(),
    },
  };
}
