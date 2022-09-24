export default function GetAccountFormat(format: string, number: string) {
  let index = 0;
  return format
    .split('')
    .map((el: string) => {
      if (el === '-') return el;
      index++;
      return number[index - 1];
    })
    .join('');
}
