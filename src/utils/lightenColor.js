export default function lightenColor(hexaColor, percent) {

  const num = parseInt(hexaColor.substring(1), 16);

  const amt = Math.round(2.55 * percent);

  const r = (num >> 16) + amt;

  const g = (num & 0x0000FF) + amt;

  const b = (num >> 8 & 0x00FF) + amt;

  return '#' + (
    0x1000000
    + (r < 255 ? r < 1 ? 0 : r : 255) * 0x10000
    + (b < 255 ? b < 1 ? 0 : b : 255) * 0x100
    + (g < 255 ? g < 1 ? 0 : g : 255)
  ).toString(16).slice(1);

}