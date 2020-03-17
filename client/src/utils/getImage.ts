import isUrl from 'is-url';

// Temporary util to get the image from the /images folder of the API
export function getImage(value: string) {
  if (isUrl(value)) {
    return value;
  }

  return `${process.env.REACT_APP_API_URL}/images/${value}`;
}
