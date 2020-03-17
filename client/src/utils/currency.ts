export function currency(value: number) {
  if (navigator) {
    const lang = navigator.language;

    return `$${value.toLocaleString(lang)}`;
  }

  return value;
}
