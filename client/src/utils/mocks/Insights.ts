import faker from 'faker';

export function mockInsights(): Insights {
  return {
    impressions: faker.random.number(),
    clicks: faker.random.number(),
    website_visits: faker.random.number(),
    nanos_score: faker.random.number(),
    cost_per_click: faker.random.number(),
    click_through_rate: faker.random.number(),
    advanced_kpi_1: faker.random.number(),
    advanced_kpi_2: faker.random.number(),
  };
}
