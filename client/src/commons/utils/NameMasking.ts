export default function NameMasking(name: any) {
  const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
  // name = name.replaceAll(' ', '');

  return name.replace(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/gi, '*');
}
