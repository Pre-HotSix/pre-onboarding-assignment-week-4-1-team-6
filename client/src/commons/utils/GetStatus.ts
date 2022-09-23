export default function GetStatus(
  obj: { [key: string]: number },
  val: number | undefined
) {
  return Object.keys(obj).find((key) => obj[key] === val);
}
