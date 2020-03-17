import faker from 'faker';

export function mockCreatives(): Creatives {
  return {
    header: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    url: faker.internet.url(),
    image: faker.image.imageUrl(),
  };
}
