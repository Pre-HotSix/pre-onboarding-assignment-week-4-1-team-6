import { ChangeEvent } from 'react';

interface IInput01Props {
  type: string;
  placeholder?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}

export default function Input01(props: IInput01Props) {
  return (
    <input
      className="w-full h-12 rounded-lg border border-solid border-gray-400 focus:outline-none focus:border-indigo-700 py-3.5 px-5"
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      autoComplete={props.autoComplete}
    />
  );
}
