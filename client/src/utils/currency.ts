export function currency(value: number) {
  return (Math.round(value * 100) / 100)
    .toFixed(2)
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}
