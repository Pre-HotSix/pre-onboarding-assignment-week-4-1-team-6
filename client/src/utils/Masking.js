export const maskingName = (name) => {
  if (name.length > 2) {
    let originName = name.split('');
    originName.forEach(function (name, i) {
      if (i === 0 || i === originName.length - 1) return;
      originName[i] = '*';
    });
    let joinName = originName.join();
    return joinName.replace(/,/g, '');
  } else {
    const pattern = /.$/; // 정규식
    return name.replace(pattern, '*');
  }
};

export const maskingPhone = (phone) => {
  const replacePhone = phone.replace(/-/g, '');
  if (replacePhone.length === 10) {
    return replacePhone.slice(0, 3) + '-***-' + replacePhone.slice(7, 11);
  } else {
    return replacePhone.slice(0, 3) + '-****-' + replacePhone.slice(7, 12);
  }
};
