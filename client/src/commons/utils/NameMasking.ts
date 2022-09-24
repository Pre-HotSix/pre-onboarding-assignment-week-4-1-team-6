export default function NameMasking(name: any) {
  const array = name.replaceAll('[^0-9]', '').split('');

  return array
    .map((ele: string, index: number) => {
      if (index < 1 || index >= array.length - 1) return ele;

      return '*';
    })
    .join('');
}
