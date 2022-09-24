export default function PhonNumber(phoneNumber: any) {
  const phoneMatchValue = phoneNumber.match(/\d{2,3}-\d{3,4}-\d{4}/gi);

  // 00-000-0000 형태인 경우
  if (/-[0-9]{3}-/.test(phoneMatchValue)) {
    phoneNumber = phoneNumber
      .toString()
      .replace(
        phoneMatchValue,
        phoneMatchValue.toString().replace(/-[0-9]{3}-/g, '-***-')
      );
  }
  // 00-0000-0000 형태인 경우
  else if (/-[0-9]{4}-/.test(phoneMatchValue)) {
    phoneNumber = phoneNumber
      .toString()
      .replace(
        phoneMatchValue,
        phoneMatchValue.toString().replace(/-[0-9]{4}-/g, '-****-')
      );
  }

  return phoneNumber;
}
