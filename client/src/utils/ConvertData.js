export const Masking = {
  text: (text) => {
    if (text.length > 2) {
      let originText = text.split('');
      originText.forEach(function (text, i) {
        if (i === 0 || i === originText.length - 1) return;
        originText[i] = '*';
      });
      let joinText = originText.join();
      return joinText.replace(/,/g, '');
    } else {
      const pattern = /.$/;
      return text.replace(pattern, '*');
    }
  },
  phone: (phone) => {
    const replacePhone = phone.replace(/-/g, '');
    if (replacePhone.length === 10) {
      return replacePhone.slice(0, 3) + '-***-' + replacePhone.slice(7, 11);
    } else {
      return replacePhone.slice(0, 3) + '-****-' + replacePhone.slice(7, 12);
    }
  },
};

export const Convert = {
  date: (data) => {
    const date = new Date(data);
    return new Intl.DateTimeFormat('kr').format(date);
  },
  owner: (userData, user_id) => {
    const filterData = userData.filter((data) => data.id === user_id);
    return filterData[0].name;
  },
  valueToKey: (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  },
  assets: (assets, payments) => {
    if (+assets > +payments)
      return <span className="text-red-600">{(+assets).toLocaleString()}</span>;
    if (+assets < +payments)
      return (
        <span className="text-blue-600">{(+assets).toLocaleString()}</span>
      );
    return <span>{(+assets).toLocaleString()}</span>;
  },
};