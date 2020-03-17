import faker from 'faker';
import { mockTargetAudience, mockCreatives, mockInsights } from '.';

export function mockPlatform(): Platform {
  return {
    status: faker.random.arrayElement(['Scheduled', 'Delivering', 'Ended']),
    total_budget: +faker.finance.amount(100, 100000, 2),
    start_date: faker.random.number(),
    end_date: faker.random.number(),
    target_audience: mockTargetAudience(),
    creatives: mockCreatives(),
    insights: mockInsights(),
  };
}
