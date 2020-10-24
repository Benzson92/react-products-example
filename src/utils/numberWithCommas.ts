export function numberWithCommas(number: string) {
  return number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}
