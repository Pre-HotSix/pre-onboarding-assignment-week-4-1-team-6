export default function AccountNumber(number: any) {
  const array = number.replaceAll('[^0-9]', '').split('');

  return array
    .map((ele: string, index: number) => {
      if (index <= 1 || index >= array.length - 2) return ele;
      return '*';
    })
    .join('');
}
