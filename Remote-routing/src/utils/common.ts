export const formatTime = (current: number) => {
  const h = Math.floor(current / 3600);
  const m = Math.floor((current - h * 3600) / 60);
  const s = Math.floor(current % 60);

  const sString = s < 10 ? "0" + s.toString() : s.toString();
  const mString = m < 10 ? "0" + m.toString() : m.toString();

  if (h > 0) {
    const hString = h < 10 ? "0" + h.toString() : h.toString();
    return `${hString}:${mString}:${sString}`;
  } else {
    return `${mString}:${sString}`;
  }
};