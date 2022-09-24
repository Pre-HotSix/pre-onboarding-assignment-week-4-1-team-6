import React, { useEffect, useState } from 'react';

export const datas = [
  {
    id: 1,
    title: 'abc',
    theme: ['a', 'b', 'd'],
    genre: ['A'],
  },
  {
    id: 2,
    title: 'abc',
    theme: ['a', 'c', 'd'],
    genre: ['A', 'B'],
  },
  {
    id: 3,
    title: 'abc',
    theme: ['b', 'c', 'd'],
    genre: ['C'],
  },
];

export default function Test() {
  const [data, setdata] = useState(datas);
  const [item, setItem] = useState({
    isFiltered: false,
    filteredTitle: '',
    filteredCategory: '',
  });

  const filterField = (a: string, b: string) => {
    const category = item.filteredCategory;
    const title = item.filteredTitle;

    setItem({
      isFiltered: true,
      filteredTitle: title,
      filteredCategory: category,
    });

    switch (category) {
      case 'Genre':
        return data.filter((content) => content.genre.includes(title));
      case 'Theme':
        return data.filter((content) => content.theme.includes(title));
      default:
        return data;
    }
  };

  return (
    <div>
      {/* <span>{data.filter((content) => content.theme.includes('a'))}</span> */}
      <div onClick={() => filterField('Genre', 'a')}>a</div>
    </div>
  );
}
