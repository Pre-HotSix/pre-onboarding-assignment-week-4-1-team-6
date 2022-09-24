export default function DateToString(dateTime: string | number | Date) {
  let dateString = '';

  const date = new Date(dateTime);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor(diff / (1000 * 60 * 60));
  const diffMin = Math.floor(diff / (1000 * 60));

  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  if (diffMin < 60) dateString = `${diffMin}분 전`;
  else if (diffHour < 24) dateString = `${diffHour}시간 전`;
  else if (diffDay < 8) dateString = `${diffDay}일 전`;
  else
    dateString = `${yyyy}-${mm.toString().padStart(2, '0')}-${dd
      .toString()
      .padStart(2, '0')}`;

  return dateString;
}
