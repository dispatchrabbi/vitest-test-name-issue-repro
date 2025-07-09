export function rng(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}