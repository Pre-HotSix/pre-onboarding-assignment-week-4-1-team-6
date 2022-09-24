import { SearchIcon } from 'assets/svgs';
import { ChangeEvent } from 'react';

interface IInput02Props {
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar(props: IInput02Props) {
  return (
    <div className="w-full flex justify-end mb-1.5">
      <div className="w-60 h-9 rounded-3xl flex items-center px-4 overflow-hidden border border-slate-400 border-solid">
        <span className="flex content-center">
          <SearchIcon />
        </span>
        <input
          className="w-full ml-2.5 placeholder:text-gray"
          type="search"
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}
